"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");

class FoldCommentProvider {
    provideFoldingRanges (doc) {
        const active = vscode.window.activeTextEditor;
        if (!active) {
            return;
        }
        return getRanges(doc);
    }
}

function getRanges (doc) {
    const text = doc.getText();
    const reg = /^\s*\/\/*/gm;
    const lines = [];
    let match;
    while ((match = reg.exec(text))) {
        lines.push(doc.positionAt(match.index).line);
    }
    const ranges = [];
    let start = 0;
    let last = 0;
    for (let i = 0; i < lines.length; i++) {
        if (lines[last] + 1 === lines[i]) {
            last++;
        }
        else {
            if (last - start > 0 && lines[start] - 1 > -1) {
                ranges.push(new vscode.FoldingRange(lines[start] - 1, lines[last] - 1));
            }
            last = i;
            start = i;
        }
    }
    if (last - start > 0) {
        ranges.push(new vscode.FoldingRange(lines[start] - 1, lines[last]));
    }
    return ranges;
}

function applyRange (ranges, editor, fn) {
    const selection = editor.selection;
    return Promise.all(ranges.map(fn)).then(() => {
        editor.selection = selection;
    });
}
function foldRanges (ranges, editor) {
    return applyRange(ranges, editor, x => {
        editor.selection = new vscode.Selection(x.start, 0, x.end, 0);
        return vscode.commands.executeCommand("editor.fold");
    });
}
function unfoldRanges (ranges, editor) {
    return applyRange(ranges, editor, x => {
        editor.selection = new vscode.Selection(x.start, 0, x.end, 0);
        return vscode.commands.executeCommand("editor.unfold");
    });
}
exports.getRanges = getRanges;
exports.foldRanges = foldRanges;
exports.FoldCommentProvider = FoldCommentProvider;
exports.applyRange = applyRange;
exports.unfoldRanges = unfoldRanges;
//# sourceMappingURL=fold.js.map
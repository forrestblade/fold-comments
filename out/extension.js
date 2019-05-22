"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fold_1 = require("./fold");
function activate(context) {
    let active = vscode.window.activeTextEditor;
    if (active) {
        const provider = new fold_1.FoldCommentProvider();
        vscode.languages.registerFoldingRangeProvider({ scheme: "file", language: "typescript" }, provider);
        vscode.languages.registerFoldingRangeProvider({ scheme: "file", language: "javascript" }, provider);
        vscode.languages.registerFoldingRangeProvider({ scheme: "file", language: "sass" }, provider);
        vscode.languages.registerFoldingRangeProvider({ scheme: "file", language: "scss" }, provider);
    }
    
    const foldAllComments = vscode.commands.registerCommand("extension.foldAllComments", () => {
        const active = vscode.window.activeTextEditor;
        if (active) {
            try {
                const ranges = fold_1.getRanges(active.document);
                fold_1.foldRanges(ranges, active);
            }
            catch (e) {
                console.log(e);
            }
        }
    });

    const unfoldAllComments = vscode.commands.registerCommand("extension.unfoldAllComments", () => {
        const active = vscode.window.activeTextEditor;
        if (active) {
            const ranges = fold_1.getRanges(active.document);
            fold_1.unfoldRanges(ranges, active);
        }
    });
    context.subscriptions.push(foldAllComments, unfoldAllComments);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
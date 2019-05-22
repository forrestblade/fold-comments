"use strict";
// import * as vscode from "vscode";
// vscode.fold
// class FoldAllBlockCommentsAction extends FoldingAction<void> {
// 	constructor() {
// 		super({
// 			id: 'editor.foldAllComments',
// 			label: "Fold All Vomments",
// 			alias: 'Fold All Comments',
// 			precondition: null,
// 			kbOpts: {
// 				kbExpr: EditorContextKeys.editorTextFocus,
// 				primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_K, KeyMod.CtrlCmd | KeyCode.US_SLASH),
// 				weight: KeybindingWeight.EditorContrib
// 			}
// 		});
// 	}
// 	invoke(foldingController: FoldingController, foldingModel: FoldingModel, editor: ICodeEditor): void {
// 		if (foldingModel.regions.hasTypes()) {
// 			setCollapseStateForType(foldingModel, FoldingRangeKind.Comment.value, true);
// 		} else {
// 			let comments = LanguageConfigurationRegistry.getComments(editor.getModel().getLanguageIdentifier().id);
// 			if (comments && comments.blockCommentStartToken) {
// 				let regExp = new RegExp('^\\s*' + escapeRegExpCharacters(comments.blockCommentStartToken));
// 				setCollapseStateForMatchingLines(foldingModel, regExp, true);
// 			}
// 		}
// 	}
// }
//# sourceMappingURL=action.js.map
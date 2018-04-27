'use strict';

const vscode = require('vscode');

function activate(context) {

    // Prepare some variables
    var outputChannel = vscode.window.createOutputChannel("demo");
    outputChannel.show();

    // Register commands
    context.subscriptions.push(

        vscode.commands.registerCommand('demo.command', function() {

            function showPosition(position) {
                return "(" + position.line + ", " + position.character + ")";
            }

            function showRange(range) {
                return showPosition(range.start) + " -- " + showPosition(range.end);
            }

            vscode.window.onDidChangeTextEditorVisibleRanges(event => {
                outputChannel.appendLine("onDidChangeTextEditorVisibleRanges");
                outputChannel.appendLine("Event contains " + event.visibleRanges.length + " ranges:");
                for (var i=0; i<event.visibleRanges.length; i++) {
                    outputChannel.appendLine(showRange(event.visibleRanges[i]));
                }
                outputChannel.appendLine("---");
            });
        }),

    );
}

function deactivate() {
    outputChannel.dispose();
}

module.exports.activate = activate;
module.exports.deactivate = deactivate;

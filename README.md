# Bug demo

This code shows how Visual Studio Code starts sending TextEditorVisibleRangesChangeEvent with ranges that don't even exist in the document.


## How to

1. Clone this repository.
2. Open the folder in VS Code.
3. Press F5 to debug it. A new window should open. The rest of the instructions shall be performed in the new window.
4. From the menu select View > Output to open the Output console.
5. Press Shift+Ctrl+P and select command 'Bug: Demo command'. The dropdown in the Output console should now read 'demo'.
6. In some document (e.g. a new one), add a character.
7. The Output console now will repeatingly output lines saying that the range has changes far beyond what really exists in the document.

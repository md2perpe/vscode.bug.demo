# Bug demo

This code shows how Visual Studio Code starts sending TextEditorVisibleRangesChangeEvent with ranges that don't even exist in the document.


## How to

1. Clone this repository.
2. Open the folder in VS Code.
3. Press F5 to debug it. A new window should open.
4. In the new window, press Ctrl+K, Ctrl+H to open the Output console.
5. In the new window, press Shift+Ctrl+P.
6. Select command 'Bug: Demo command'. The dropdown in the Output console should now read 'demo'.
7. In some document (e.g. a new one), add a character.
8. The Output console now will repeatingly output lines saying that the range has changes far beyond what really exists in the document.


class PlaylistExtModal {
    ModalId = "PlaylistExtModal";

    constructor() {}

    GetModalAsHtmlNode(){

        var dialog = document.createElement("DIV");  
        dialog.id = this.ModalId;
        dialog.classList.add("playlist-ext-dialog-container-style");

        var dialogContent = this.GetDialogContent();

        dialog.classList.add("fade-in-style");
        dialog.appendChild(dialogContent);

        return dialog;
    }

    GetDialogContent(){
        var actions = ["Find all duplicates", "Find and remove duplicates", "Copy all tracks to clipboard"]

        var dialogContent = document.createElement("DIV");  
        dialogContent.classList.add("playlist-ext-dialog-content-style");

        var header = DialogHeaderUtils.prototype.GetDialogHeader(); 
        dialogContent.appendChild(header);

        var dialogActions = new DialogItems(actions);
        dialogActions.InitializeDialogItemElements();

        var actionsElements = dialogActions.GetDialogItemElements();
        var styles = dialogActions.GetDefaultStyles();
        dialogActions.AddStylesToDialogItems(styles);

        dialogContent.appendChild(actionsElements);
        
        return dialogContent;
    }
}



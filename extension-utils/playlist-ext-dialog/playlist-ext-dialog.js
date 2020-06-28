class PlaylistExtModal {
    ModalId = "PlaylistExtModal";

    constructor() {
    }

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
        var dialogContent = document.createElement("DIV");  
        dialogContent.classList.add("playlist-ext-dialog-content-style");

        var header = this.GetDialogHeader(); 
        dialogContent.appendChild(header)
        
        return dialogContent;
    }

    GetDialogHeader(){
        var dialogHeader = document.createElement("HEADER");

        dialogHeader.classList.add("playlist-ext-dialog-header-style");
        
        var headerTitle = document.createElement("DIV");
        headerTitle.innerHTML="Extension actions";
        headerTitle.classList.add("playlist-ext-dialog-header-title-style");

        var headerCloseButton = this.GetCloseButton();
        headerCloseButton.classList.add("playlist-ext-dialog-header-close-button-style");

        dialogHeader.appendChild(headerTitle);
        dialogHeader.appendChild(headerCloseButton);

        return dialogHeader;
    }

    GetCloseButton(){
        var button = document.createElement("BUTTON");
        button.innerHTML = "X";
        button.onclick = this.CloseDialog;

        this.ApplyCloseButtonStyles(button);

        return button;
    }

    ApplyCloseButtonStyles(button) {
        const initialButtonStyle = "extension-button-style playlist-ext-dialog-header-close-button-style";
        ApplyStylesToElement(button, initialButtonStyle);
    
        button.onmousedown = function(){ button.classList = []; button.classList.add("extension-button-click-style");};
        button.onmouseup = function(){ button.classList = []; ApplyStylesToElement(button, initialButtonStyle); };
        button.onmouseleave = function(){ button.classList = []; ApplyStylesToElement(button, initialButtonStyle);};
    
        return button;
    }

    CloseDialog() {  
        var dialog = document.getElementById(this.ModalId);
        dialog.classList.add("fade-out-style")
        
        setTimeout(() => {
            dialog.remove();
        }, 195);
    }

}



class PlaylistExtButton {
    constructor() {
    }

    GetPlaylistButtonAsHtmlNode() {
        const button = document.createElement("BUTTON");

        ApplyStylesToElement(button, "extension-button-style");
        button.onclick = this.HandleOpenExtensionButtonClicked;
        button.id = "SpotifyExtensionButton";

        const t = document.createTextNode("Open extensions");
        button.appendChild(t);
    
        return button;
    }

    HandleOpenExtensionButtonClicked() {
        var playlistExtModal = PlaylistExtModal.prototype.GetModalAsHtmlNode();
        document.body.appendChild(playlistExtModal);
    }
}
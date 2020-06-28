var ApplyStylesToElement = function (button, initialButtonStyles) {
    // const initialButtonStyle = "extension-button-style";
    ApplyMultipleStylesToClassList(button, initialButtonStyles);

    button.onmousedown = function(){ button.classList = []; button.classList.add("extension-button-click-style");};
    button.onmouseup = function(){ button.classList = []; ApplyMultipleStylesToClassList(button, initialButtonStyles);};
    button.onmouseleave = function(){ button.classList = []; ApplyMultipleStylesToClassList(button, initialButtonStyles);};

    return button;
}

var ApplyMultipleStylesToClassList = function(button, initialButtonStyle) {
    initialButtonStyle.split(" ").forEach(style => {
        button.classList.add(style);
    });
}
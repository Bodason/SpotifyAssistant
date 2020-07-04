var ApplyStylesToElement = function (button, initialButtonStyles) {
    // const initialButtonStyle = "extension-button-style";
    ApplyMultipleStylesToClassList(button, initialButtonStyles);

    button.onmousedown = function(){ button.classList = []; button.classList.add("extension-button-click-style");};
    button.onmouseup = function(){ button.classList = []; ApplyMultipleStylesToClassList(button, initialButtonStyles);};
    button.onmouseleave = function(){ button.classList = []; ApplyMultipleStylesToClassList(button, initialButtonStyles);};

    return button;
}

var ApplyMultipleStylesToClassList = function(button, initialButtonStyle) { // split strings. Does not work for arrays!
    var styles = initialButtonStyle.split(" ");
    styles.forEach(style => {
        button.classList.add(style);
    });
}
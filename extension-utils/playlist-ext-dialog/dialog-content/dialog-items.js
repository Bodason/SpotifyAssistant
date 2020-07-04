class DialogItems {
    actions; // string array of actions
    actionsContainerElement // UL element containing the list items 
    defaultStyles; // styles for UL containing the list items


    constructor(actions){
        this.actions = actions;
        this.defaultStyles = "dialog-items-style";
    }

    InitializeDialogItemElements(){
        var actionsContainerElement = document.createElement("UL");
        for (let indexOfAction = 0; indexOfAction < this.actions.length; indexOfAction++) {
            const element = this.actions[indexOfAction];
            const li = document.createElement("LI");
            li.innerHTML = element;
            actionsContainerElement.appendChild(li);
        }

        this.actionsContainerElement = actionsContainerElement;
    }

    GetDialogItemElements() {
        return this.actionsContainerElement;
    }

    GetDefaultStyles(){
        return this.defaultStyles;
    }

    AddStylesToDialogItems(styles) {
        var listItems = this.actionsContainerElement;
        listItems.childNodes.forEach(element => {
            element.classList.add(styles);
            element.onmouseenter = function(){
                element.classList.add("dialog-items-on-mouse-enter-style");
            }
            element.onmouseleave= function(){
                element.classList.remove("dialog-items-on-mouse-enter-style");
            }
            
        });
    }
}

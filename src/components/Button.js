import { isUpperCaseMode } from "../utils/upperCaseMode";
import backspace from "../utils/backspaceFunc";
import del from "../utils/deleteFunc";
import space from "../utils/spaceFunc";
import tab from "../utils/tabFunc";
import enter from "../utils/enterFunc";

export default class Button {
  constructor({ key, code, width, color }) {
    this.key = isUpperCaseMode ? key : key.toLowerCase();
    this.code = code;
    this.width = width;
    this.color = color;
  }

  createButton = (parent) => {
    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.innerText = this.key;
    newButton.id = this.code;
    newButton.style.background = this.color;
    newButton.style.color = "white";
    newButton.style.width = this.width;
    parent.append(newButton);
    newButton.addEventListener("mousedown", () => {
      newButton.classList.add("activeButton");
    });
    //the main logic of all enter,shift etc. buttons
    newButton.addEventListener("click", () => {
      if (this.key.toLowerCase() === "backspace") {
        backspace(textInputField);
      } else if (this.key.toLowerCase() === "delete") {
        del(textInputField);
      } else if (this.key.toLowerCase() === "space") {
        space(textInputField);
      } else if (this.key.toLowerCase() === "tab") {
        tab(textInputField);
      } else if (this.key.toLowerCase() === "enter") {
        enter(textInputField);
      } else {
        textInputField.value += this.key;
      }
    });
  };
}

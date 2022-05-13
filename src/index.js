import {
  keyboardLanguage,
  switchKeyboardLanguage,
} from "./utils/keyboardLanguage";
import { isUpperCaseMode, toggleCaseMode } from "./utils/upperCaseMode";
import "./index.css";
// import setFocusOnText from "./utils/focusEnd";
import backspace from "./utils/backspaceFunc";
import del from "./utils/deleteFunc";
import space from "./utils/spaceFunc";
import tab from "./utils/tabFunc";
import enter from "./utils/enterFunc";
import { renderKeyBoard } from "./components/keyboard";
import { left, right, up, down } from "./utils/navigateArrows";
import setFocusOnText from "./utils/focusEnd";
import renderInfoField from "./components/InfoField";

const divToAppend = document.createElement("div");
divToAppend.className = "wrapper";
divToAppend.id = "wrapper";

const divToAppendKeyboard = document.createElement("div");
divToAppendKeyboard.className = "keyboard-wrapper";
divToAppendKeyboard.id = "keyboard-wrapper";

const body = document.querySelector("body");
body.append(divToAppend);

//add text field
const textInputField = document.createElement("textarea");
textInputField.id = "textarea";
divToAppend.append(textInputField);

//add keyboard
divToAppend.append(divToAppendKeyboard);

//add event listeners to a body to listen UpperCaseMode
//exactly 3 needed for better UX

///a la state
let shift = false;
let caps = false;
///a la state

const ToggleCaseAnsRerenderKeyboard = (e = "none") => {
  if (e !== "none") {
    shift = e.shiftKey;
    caps = e.getModifierState("CapsLock");
  }
  toggleCaseMode();
  deleteKeyboard();
  renderKeyBoard();
};

// listener to highlight and manage upperCaseMode
body.addEventListener("keydown", (e) => {
  setFocusOnText(textInputField);
  let element = document.querySelector(`#${e.code}`);
  element.classList.add("activeButton");
  if (
    ((e.shiftKey !== shift) & !e.metaKey & !e.altKey & !e.ctrlKey) |
    (e.getModifierState("CapsLock") !== caps)
  ) {
    ToggleCaseAnsRerenderKeyboard(e);
  }
});

body.addEventListener("keyup", (e) => {
  setFocusOnText(textInputField);
  let element = document.querySelector(`#${e.code}`);
  element.classList.remove("activeButton");
  if (
    ((e.shiftKey !== shift) & !e.metaKey & !e.altKey & !e.ctrlKey) |
    (e.getModifierState("CapsLock") !== caps)
  ) {
    ToggleCaseAnsRerenderKeyboard(e);
  }
});
// listener to highlight and manage upperCaseMode

////switch Language listener
body.addEventListener("keydown", (e) => {
  if ((e.metaKey && e.altKey) || (e.ctrlKey && e.altKey)) {
    switchKeyboardLanguage();
    deleteKeyboard();
    renderKeyBoard();
  }
});
//switch Language listener

export class Button {
  constructor({ keyRu, keyRuUp, keyEn, keyEnUp, code, width, color }) {
    this.key =
      keyboardLanguage === "ru"
        ? isUpperCaseMode
          ? keyRuUp
          : keyRu
        : isUpperCaseMode
        ? keyEnUp
        : keyEn;

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
    //the main logic of all enter,shift etc. buttons
    newButton.addEventListener("click", (e) => {
      switch (this.code) {
        case "CapsLock":
          {
            ToggleCaseAnsRerenderKeyboard(e);
            setFocusOnText(textInputField);
          }
          break;
        case "ShiftLeft":
          {
            ToggleCaseAnsRerenderKeyboard(e);
            setFocusOnText(textInputField);
          }
          break;
        case "ShiftRight":
          {
            ToggleCaseAnsRerenderKeyboard(e);
            setFocusOnText(textInputField);
          }
          break;
        case "MetaLeft":
          {
            setFocusOnText(textInputField);
          }
          break;
        case "MetaRight":
          {
            setFocusOnText(textInputField);
          }
          break;
        case "AltLeft":
          {
            setFocusOnText(textInputField);
          }
          break;
        case "AltRight":
          {
            setFocusOnText(textInputField);
          }
          break;
        case "Control":
          {
            setFocusOnText(textInputField);
          }
          break;
        case "Backspace":
          {
            backspace(textInputField);
          }
          break;
        case "Delete":
          {
            del(textInputField);
          }
          break;
        case "Tab":
          {
            tab(textInputField);
          }
          break;
        case "Enter":
          {
            enter(textInputField);
          }
          break;
        case "Space":
          {
            space(textInputField);
          }
          break;
        case "ArrowLeft":
          {
            left(textInputField);
          }
          break;
        case "ArrowRight":
          {
            right(textInputField);
          }
          break;
        case "ArrowUp":
          {
            up(textInputField);
          }
          break;
        case "ArrowDown":
          {
            down(textInputField);
          }
          break;
        default:
          textInputField.value += this.key;
      }
    });

    newButton.addEventListener("mousedown", () => {
      newButton.classList.add("activeButton");
    });
    newButton.addEventListener("mouseup", () => {
      newButton.classList.remove("activeButton");
    });
  };
}

// delete KeyBoard
const deleteKeyboard = () => {
  for (let i = 1; i <= 5; i++) {
    let arr = document.querySelector("#keyboard-row");
    arr.remove();
  }
};

// const highlightCapsOrShift = () => {
//   if (shift === true) {
//     let element = document.querySelector(`#ShiftLeft`);
//     element.classList.remove("activeButton");
//   } else if (caps === true) {
//     let element = document.querySelector(`#CapsLock`);
//     element.classList.remove("activeButton");
//   }
// };

// highlightCapsOrShift();

///Render
renderKeyBoard();
renderInfoField(divToAppend);

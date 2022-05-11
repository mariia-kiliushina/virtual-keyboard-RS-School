const setFocusOnText = (textInputField) => {
  const ss = textInputField.selectionStart;
  const end = textInputField.value.length;
  if (ss !== 0) {
    // textInputField.setSelectionRange(end, end);
    textInputField.focus();
    textInputField.selectionStart = ss;
    textInputField.selectionEnd = ss;
  } else {
    textInputField.setSelectionRange(end, end);
    textInputField.focus();
    textInputField.selectionStart = ss;
    textInputField.selectionEnd = ss;
  }
};

export default setFocusOnText;

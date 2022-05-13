const left = (textbox) => {
  const cursor = textbox.selectionStart;
  textbox.focus();
  textbox.selectionStart = cursor - 1;
  textbox.selectionEnd = cursor - 1;
};

const right = (textbox) => {
  const cursor = textbox.selectionStart;
  textbox.focus();
  textbox.selectionStart = cursor + 1;
  textbox.selectionEnd = cursor + 1;
};

const up = (textbox) => {
  const start = 0;
  textbox.focus();
  textbox.selectionStart = start;
  textbox.selectionEnd = start;
};

const down = (textbox) => {
  const length = textbox.value.length;
  textbox.focus();
  textbox.selectionStart = length + 1;
  textbox.selectionEnd = length + 1;
};

export { left, right, up, down };

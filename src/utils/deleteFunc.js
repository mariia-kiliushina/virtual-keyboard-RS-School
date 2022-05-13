function del(textbox) {
  const ss = textbox.selectionStart;
  const se = textbox.selectionEnd;
  const ln = textbox.value.length;

  const textbefore = textbox.value.substring(0, ss); //text in front of selected text
  // const textselected = textbox.value.substring(ss, se); //selected text
  const textafter = textbox.value.substring(se, ln); //text following selected text

  if (ss == se) {
    // if no text is selected
    textbox.value =
      textbox.value.substring(0, ss) + textbox.value.substring(se + 1, ln);
    textbox.focus();
    textbox.selectionStart = ss;
    textbox.selectionEnd = ss;
  } // if some text is selected
  else {
    textbox.value = textbefore + textafter;
    textbox.focus();
    textbox.selectionStart = ss;
    textbox.selectionEnd = ss;
  }
}

export default del;

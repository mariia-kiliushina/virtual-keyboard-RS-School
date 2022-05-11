function tab(textbox) {
  const ss = textbox.selectionStart;
  const se = textbox.selectionEnd;
  const ln = textbox.value.length;

  const textbefore = textbox.value.substring(0, ss); //text in front of selected text
  // const textselected = textbox.value.substring(ss, se); //selected text
  const textafter = textbox.value.substring(ss, ln); //text following selected text
  if (ss == se) {
    // if no text is selected
    textbox.value =
      textbox.value.substring(0, ss) +
      "\u00A0\u00A0\u00A0\u00A0" +
      textbox.value.substring(ss, ln);
    textbox.focus();
    textbox.selectionStart = ss + 4;
    textbox.selectionEnd = ss + 4;
  } // if some text is selected
  else {
    textbox.value = textbefore + "\u00A0\u00A0\u00A0\u00A0" + textafter;
    textbox.focus();
    textbox.selectionStart = ss;
    textbox.selectionEnd = ss;
  }
}

export default tab;

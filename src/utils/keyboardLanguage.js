let keyboardLanguage = "en";

const switchKeyboardLanguage = () => {
  if (keyboardLanguage === "en") {
    keyboardLanguage = "ru";
    return;
  }
  keyboardLanguage = "en";
  console.log(keyboardLanguage);
};

export { keyboardLanguage, switchKeyboardLanguage };

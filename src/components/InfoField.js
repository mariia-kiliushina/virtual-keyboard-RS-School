const renderInfoField = (parent) => {
  let infoFieldWrapper = document.createElement("div");
  infoFieldWrapper.id = "infoFieldWrapper";
  parent.append(infoFieldWrapper);
  let infoFieldLabel = document.createElement("div");
  infoFieldLabel.innerHTML =
    "Сочетание клавиш для смены раскладки: -Для MacOs Cmd+Opt   -Для Win Ctrl+ALt";
  infoFieldWrapper.append(infoFieldLabel);
  let infoFieldText = document.createElement("div");
  infoFieldText.innerHTML = "-Для MacOs Cmd+Opt   -Для Win Ctrl+ALt";
  infoFieldWrapper.append(infoFieldText);
};

export default renderInfoField;

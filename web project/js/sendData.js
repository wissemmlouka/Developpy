function setLocalSorage(id, head, body) {
  var tab1 = ["<!DOCTYPE html>\n", "<html>\n", "<head>\n"];
  var tab2 = ["\n</head>\n", "<body>\n"];
  var tab3 = ["\n</body>\n", "</html>\n"];
  const htmlCoreBeging = tab1.join("");
  //"<!DOCTYPE html>\n<html>\n<head>\n".toString();
  const htmlCoreMiddle = tab2.join("");
  //"\n</head>\n<body>\n".toString();
  const htmlCoreEnd = tab3.join("");
  //"\n</body>\n</html>\n".toString();
  const code = document.getElementById(id).innerText;
  console.log(id, " ", head, " ", body);
  if (head != null && body != null) {
    localStorage.setItem("codeExemple", code);
    return;
  }
  if (head != null && body == null) {
    const ch = htmlCoreBeging + code + htmlCoreMiddle + htmlCoreEnd;
    localStorage.setItem("codeExemple", ch);
    return;
  }
  if (head == null && body != null) {
    var ch = htmlCoreBeging + htmlCoreMiddle + code + htmlCoreEnd;
    localStorage.setItem("codeExemple", ch);

    return;
  }
}

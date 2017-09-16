module.exports = function check(str, bracketsConfig) {
  let result = true;

  let allowOpenTag = [];
  for (var i = 0; i < bracketsConfig.length; i++) {
    for (var k = 0; k < bracketsConfig[i].length; k++) {
      allowOpenTag.push(bracketsConfig[i][k]);
    }
  }
  const strAllowOpenTag = allowOpenTag.join('');
  let allowCloseTag = [];
  for (var i = 0; i < str.length; i++) {
    if (allowCloseTag[allowCloseTag.length-1] === strAllowOpenTag[strAllowOpenTag.indexOf(str[i])]) {
      allowCloseTag.pop();
    }else if (strAllowOpenTag.indexOf(str[i]) % 2 === 0) {
      allowCloseTag.push(strAllowOpenTag[strAllowOpenTag.indexOf(str[i]) + 1]);
    }else if (allowCloseTag[allowCloseTag.length-1] !== strAllowOpenTag[strAllowOpenTag.indexOf(str[i])]) {
      result = false;
    }
    if (str.length - 1 === i) {
      if (allowCloseTag.length !== 0) {
        result = false;
      }
    }
  }
  return result;
}

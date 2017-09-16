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
    console.log(str[i], i ,'str[i], i');
    if (allowCloseTag[allowCloseTag.length-1] === strAllowOpenTag[strAllowOpenTag.indexOf(str[i])]) {
      console.log(allowCloseTag, 'allowCloseTag before obn');
      allowCloseTag.pop();
      console.log(allowCloseTag, 'allowCloseTag after obn');
    }else if (strAllowOpenTag.indexOf(str[i]) % 2 === 0) {
      allowCloseTag.push(strAllowOpenTag[strAllowOpenTag.indexOf(str[i]) + 1]);
      console.log(allowCloseTag, 'определили ожидаемый закрывающий тэг');
    }else if (allowCloseTag[allowCloseTag.length-1] !== strAllowOpenTag[strAllowOpenTag.indexOf(str[i])]) {
      console.log(allowCloseTag, 'false');
      result = false;
    }
    if (str.length - 1 === i) {
      if (allowCloseTag.length !== 0) {
        console.log(allowCloseTag, 'if false');
        result = false;
      }
    }
  }
  return result;
}

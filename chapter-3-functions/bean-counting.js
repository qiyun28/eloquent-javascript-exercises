function countChar(inStr, inChar) {
  var result = 0;
  for (var i = 0; i < inStr.length; i++) {
    if(inStr.charAt(i) == inChar) {
      result++;
    }
  }
  return result;
}

function countBs(inStr) {
  return countChar(inStr, "B");
}

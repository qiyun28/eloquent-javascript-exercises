function isEven(inNum) {
  if (inNum < 0) {
    inNum = -inNum;
  }
  if (inNum == 0) {
    return true;
  } else if (inNum == 1) {
    return false;
  } else {
    return isEven(inNum - 2);
  }
}

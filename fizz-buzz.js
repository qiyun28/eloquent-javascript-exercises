for (var i = 1; i <=100 ; i++) {
  var content = "";
  if (i % 3 === 0) {
    content += "Fizz";
  }
  if (i % 5 === 0) {
    content += "Buzz";
  }
  if (content.length === 0) {
    content = i;
  }
  console.log(content);
}

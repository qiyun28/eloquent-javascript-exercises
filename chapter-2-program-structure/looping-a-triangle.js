var num = 7;
var hashtags = "";
while (num > 0) {
  hashes += "#";
  console.log(hashtags);
  num--;
}

//solution from author
for(var line = "#"; line.length < 8; line += "#") {
    console.log(line);
}

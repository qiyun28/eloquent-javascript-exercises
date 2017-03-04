var size = 10;
var line_odd = "";
var line_even = "";

for (var i = 0; i < size; i++) {
  if (i % 2) {
    line_odd += "#";
  	line_even += " ";
  } else {
    line_odd += " ";
    line_even += "#";
  }
}
for(var j = 0; j < size/2; j++) {
  console.log(line_odd);
  console.log(line_even);
}

// solution from author
// logic is more intuitive. but O(n*n)
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

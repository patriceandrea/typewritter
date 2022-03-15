const sentence = "hello there from lighthouse labs\n";
let timeToNextLetter = 500;
for (const char of sentence) {


  setTimeout(() => {
    // print the char here
    // console.log(char)
    process.stdout.write(char);
  }, timeToNextLetter) // <= 1s delay to make it noticeable. Can dial it down later.
  timeToNextLetter += 500;
} 
const sentence = "hello there from lighthouse labs\n";

for (const char of sentence) {

  // process.stdout.write(char);
  setTimeout(() => {
    // print the char here
    console.log(char)
  }, 50) // <= 1s delay to make it noticeable. Can dial it down later.
} 
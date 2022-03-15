const sentence = "hello there from lighthouse labs\n";

for (const char of sentence) {


  setTimeout(() => {
    // print the char here
    // console.log(char)
    process.stdout.write(char);
  }, 50) // <= 1s delay to make it noticeable. Can dial it down later.
} 
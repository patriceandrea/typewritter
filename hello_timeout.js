
/// chalenge #1/// 
setTimeout(() => {
  console.log('4311o th3r3 w0r1d');
}, 3000);

// chalenge #2 
let word = '4311o th3r3 w0r1d';
separate = word.split(' ');
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(separate[i]);
  }, 1000);
}
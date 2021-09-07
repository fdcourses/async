const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {});

console.log('Hi!');

const id = setTimeout(function callback1() {
  console.log('Hello World');

  // setTimeout(function callbackDeep () {
  //   console.log(1234);
  // }, 1000)
}, 0);

clearTimeout(id);

let i = 0;
// const intervalId = setInterval(()=>{console.log(`interval${i++}`)}, 100);

// clearInterval(intervalId);

console.log('END.');

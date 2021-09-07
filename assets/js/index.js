/*
Создать функции которые последовательно выводят в консоль числа от 1 до 20 
с интервалом в 100 мс.
Можно решить через 
- setInterval - if, clearInterval
- setTimeout - рекурсия с if

Посчисать сколько времени это все дело заняло
console.time() 
console.timeEnd()
*/

// function countInterval() {
//   let counter = 1;
  
//   const intervalId = setInterval(()=>{
//     console.log(counter++);

//     if(counter > 20) {
//       clearInterval(intervalId);
//       console.timeEnd('interval');
//     }
//   },100);
// }

// console.time('interval'); 
// countInterval();


const obj = {
  id: 1,
  name: 'test',
  lastName: 'test',
  age: 100,
  location: undefined,
  test() {

  },
  [Symbol()]: 'test'

};

const arr = [1,2,3]

const jsonifiedObj = JSON.stringify(arr); // сериализация чегото

const rebuildedObj = JSON.parse(jsonifiedObj); // десериализция
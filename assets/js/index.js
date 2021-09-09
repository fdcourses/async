'use strict';


try {
  // обязательная часть
  console.log(1);
  
  throw 1325468796;
  
  console.log(2);
  // после него либо catch или finally
} catch (err) {
  // необязательная
  console.log(err);
} finally {
  // необязательная 
  console.log('finally');
}
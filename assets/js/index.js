'use strict';

// ====================================================================
fetch('./assets/js/data.json')
  .then((response) => {
    console.log('завершился запрос fetch');
    return response.json(); // пытаемся превратить кашу в что-то читаемое
  })
  .then((data) => {
    console.log('превратили данные в джаваскриптовый массив');
    console.log(data);
  });

console.log(fetchResult);

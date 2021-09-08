'use strict';

// ====================================================================
fetch('./assets/js/dadfvbdfta.json')
  .then((response) => response.json(),(err)=>{console.log('обработка ошибок в then')})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('обработка ошибок в catch');
  });

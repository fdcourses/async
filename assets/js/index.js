'use strict';

// ====================================================================
fetch('./assets/js/dadfvbdfta.json')
  .then(
    (response) => response.json(),
    (err) => {
      console.log('обработка ошибок в then');
    }
  )
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('обработка ошибок в catch');
  });

function exec(resolve, reject) {
  resolve();
  reject();
}

const promise = new Promise(exec);

const ratPromise = new Promise((resolve, reject) => {
  const verdict = Math.random();

  if (verdict > 0.5) {
    resolve('крыса жива');
  } else {
    reject('крыса почти жива');
  }
});

ratPromise.then(
  (data) => {
    console.log(data);
  },
  (errorData) => {
    console.log(errorData);
  }
);

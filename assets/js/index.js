'use strict';

// fetch('http://192.168.1.149:3000/api/users')

const loadDiv = document.getElementById('load');

const result = fetch('./assets/js/data.json')
  .then((response) => response.json())
  .then((data) => {
    const jsonString = JSON.stringify(data, null, 4);
    document.body.append(jsonString);
  })
  .catch((err) => {
    document.body.append('error happende');
  })
  .finally(() => {
    loadDiv.remove();
  });

  //
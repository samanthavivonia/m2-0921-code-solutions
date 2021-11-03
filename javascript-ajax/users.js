var $userList = document.querySelector('#user-list');

var request = new XMLHttpRequest()
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.responseType = 'json';
request.addEventListener('load', function() {
  console.log('request.status: ', request.status);
  console.log('request.response: ', request.response);
  for (var i = 0; i < request.response.length; i++) {
    var newLi = document.createElement('li')
    $userList.appendChild(newLi);
    newLi.textContent = request.response[i].name;
  };
})
request.send();

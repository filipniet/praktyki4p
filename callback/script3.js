function getPosts() {
    const link = 'https://jsonplaceholder.typicode.com/posts';
  
    function checkResponse(response) {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Error Status musi byc równy 200. Status = ' + response.status);
      }
    }
  
    function printData(posts) {
      for (const { title, body } of posts) {
        console.log('Title:', title);
        console.log('Description:', body);
        console.log('/////////////');
      }
    }

    fetch(link).then(checkResponse).then(printData)
      .catch(error => console.error('Error: ', error.message));
  }
  
  getPosts();
  
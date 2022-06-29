fetch('https://api.github.com/users/Eduardo-Luizz')
  .then( response => response.json())
  .then( data => fetch(data.repos_url))
  .then( res => res.json())
  .then( d => console.log(d)) // Mostra repositórios
  .catch( err => console.log(err))
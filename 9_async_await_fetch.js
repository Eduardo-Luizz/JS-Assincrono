// Com o fetch
// fetch("https://api.github.com/users/Eduardo-Luizz")
//   .then(response => response.json())
//   .then(data => fetch(data.repos_url))
//   .then(res => res.json())
//   .then(d => console.log(d))
//   .catch(err => console.log(err))

async function start() {
  try {
    const response = await fetch("https://api.github.com/users/Eduardo-Luizz");
    const user = await response.json();
    const reposResponse = await fetch(user.repos_url);
    const repos = await reposResponse.json();
    console.log(repos);
  } catch (error) {
    console.log(error);
  }
}

start();

// Clean code

async function startRefatorada() {
  const url = "https://api.github.com/users/Eduardo-Luizz";
  const user = await fetch(url).then((r) => r.json());
  const userRepos = await fetch(user.repos_url).then((r) => r.json());
  console.log(userRepos);
}

startRefatorada().catch((e) => console.log(e));

import axios from "axios";

Promise.all([
  axios.get("https://api.github.com/users/Eduardo-Luizz"),
  axios.get("https://api.github.com/users/Eduardo-Luizz/repos")
])
  .then((response) => {
    console.log(response[0].data.login);
    console.log(response[1].data.length);
  })
  .catch((err) => console.log(err.message));
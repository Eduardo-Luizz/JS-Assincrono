import axios from "axios";

axios.get("https://api.github.com/users/Eduardo-Luizz").then((res) => {
  console.log(res.data);
});
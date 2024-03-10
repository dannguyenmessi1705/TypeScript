import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts/1";

axios
  .get(URL)
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => console.log(e));

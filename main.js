import axios from "axios";
import { userHTTP } from "./modules/http.request";

let token = location.href.split('access_token=').at(-1)
localStorage.setItem("myId", token);

const { request } = userHTTP()

request("/v1/me/", "get").then(res => {
    console.log(res);
})



// axios.get("https://api.spotify.com/v1/me/", {
//   headers: {
//     Authorization: "Bearer BQCORus3mYUHTV76MotkQ9XcE6TtJl91d9GrakxPz0hSAnujo284CVUjdURMS_U18jnZMSHTmGErd1dOXu1xORsApEZX3UxMCeFl8lSsNSpR99Rqcj7v0aL8tvIWBZa9ZiLVNG-YoA0jPK36n4Mu66J1Vsz_3n5uQxury0TV5qzEMBzp1n1lMt4EvO5y6iky4OmA1TmpOLXBCqCAt6VzTX8NirKrhz3mrAdkq_XU4gXGFDd-H8zr_tElyGAujQjmROrn1RP7DLmV-AfiEj9wy--j"
//   }
// }).then(res => {
//   console.log(res);
// })
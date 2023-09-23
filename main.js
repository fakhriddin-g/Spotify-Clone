import axios from "axios";
import { userHTTP } from "./modules/http.request";

let playlists = document.querySelectorAll('.section-playlist')

let token = location.href.split('access_token=').at(-1)
localStorage.setItem("myId", token);

const { request } = userHTTP()

request("/v1/me/", "get").then(res => {
   console.log(res);
})

playlists.forEach(playlist => {
   playlist.onclick = () => {
      location.assign('/pages/playlist/')
   }
})
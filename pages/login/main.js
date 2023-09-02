
const client_id = "56264e0f4cfb4c13a8b773bb74431d48"
const REDIRECT_URI = "http://localhost:5173"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

let login = document.querySelector(".account")

login.onclick = () => {
  location.assign(`${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&score=user-library-read`)
}

// login.href = `${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&score=user-library-read`
// let token = location.href.split('access_token=').at(-1)
// localStorage.setItem("myId", token);
// console.log(token);
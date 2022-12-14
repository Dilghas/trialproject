const BASE_URL = "http://localhost:8081/get/csmt/hit/reactlink";

function NavService() {
  return fetch(BASE_URL).then((response) => response.json());
}

export default NavService;

import axios from "axios";

const BASE_URL = "http://localhost:8081/get/csmt/hit/reactlink";
const FILE_UPLOAD_URL="http://localhost:8081/get/csmt/upload";

function NavService() {
  return fetch(BASE_URL).then((response) => response.json());
}

const fileUploadService=(formData)=>{
 return axios.post(FILE_UPLOAD_URL,formData)
}

export {NavService,fileUploadService};

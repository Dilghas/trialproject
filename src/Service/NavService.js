//import axios from "axios";

const BASE_URL="http://localhost:8081/get/csmt/hit/reactlink";




function NavService(){
    return fetch(BASE_URL)
          .then((response) => response.json())
}

/*const NavService=()=>{
    console.log(axios.get(BASE_URL))
    return axios.get(BASE_URL);
} 
/*export const NavService=()=>{
    
    return fetch(BASE_URL)
    .then((response)=> response.json())
    .then((data)=>console.log(data))
    .catch(err=> console.log(err));
}*/

export default NavService
import axios from "axios";
export default class axiosclass {
     operation(data,urls) {
         axios.post(urls,data).then((res)=>{
               return res;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  }
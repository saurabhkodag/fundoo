import axios from "axios";
export default class axiosclass {
    static operation(data,urls) {
        axios.post(urls,data).then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  }
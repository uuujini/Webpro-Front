import axios from "axios";

const request = axios.create({
    baseURL: "http://172.20.10.10:8081",
    // headers: {
      // 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    // }
  });

export default request;

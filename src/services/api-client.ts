import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "52ec5c1c42e54663b7c9eeebb0402977"
    }
})
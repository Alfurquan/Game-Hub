import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "045a8b66926845d6a04302d5dcad9a37"
    }
})
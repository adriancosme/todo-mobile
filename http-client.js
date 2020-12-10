import axios from "axios";

export default axios.create({
    baseURL: "https://api-nodejs-todolist.herokuapp.com/",
    timeout: 1000,
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM5OWM5MWU4MzM2NDAwMTcyYWI5MzkiLCJpYXQiOjE2MDcwNDk3MzJ9.noFHPLuBwvWmhuqVGP_3N6H4FuqAZuTsxb2rezDBgmg",
        "Content-Type": "application/json"
    }
})
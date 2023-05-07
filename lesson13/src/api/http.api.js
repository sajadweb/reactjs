import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 15000,
  // headers: { "X-Custom-Header": "foobar" },
});
export { http };

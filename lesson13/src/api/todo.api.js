import { http } from "./http.api";

export async function getBackend() {
  const res = await http.get("/");
  console.log(res);
  return res?.data;
}
export async function getTodo() {
  const res = await http.get("/todos");
  console.log(res);
  return res?.data;
}
export async function addTodo(data) {
  const res = await http.post("/todos/add", data);
  console.log("addTodo", res);
  return res?.data;
}
export async function editTodo(data) {
  const res = await http.post("/todos/edit", data);
  console.log("editTodo", res);
  return res?.data;
}
export async function deleteTodo(data) {
  const res = await http.post("/todos/delete", data);
  console.log("deleteTodo", res);
  return res?.data;
}
export async function completeTodo(data) {
  const res = await http.post("/todos/complete", data);
  console.log("completeTodo", res);
  return res?.data;
}

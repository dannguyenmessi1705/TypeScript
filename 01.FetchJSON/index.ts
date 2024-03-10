import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number; // Khai báo 1 thuộc tính id kiểu number
  title: string; // Khai báo 1 thuộc tính title kiểu string
  completed: boolean; // Khai báo 1 thuộc tính completed kiểu boolean
} // Khai báo 1 interface Todo chứa các thuộc tính của 1 todo

axios
  .get(URL)
  .then((res) => {
    const todo = res.data as Todo; // Ép kiểu res.data về Todo để có thể sử dụng các thuộc tính của Todo
    const id = todo.id; // Lấy ra thuộc tính id của todo và gán vào biến id
    const title = todo.title; // Lấy ra thuộc tính title của todo và gán vào biến title
    const completed = todo.completed; // Lấy ra thuộc tính completed của todo và gán vào biến completed
    // Dùng JS thì sẽ không thể check được kiểu dữ liệu hoặc các thuộc tính, nên sẽ dễ gây lỗi nếu không kiểm tra kiểu dữ liệu hoặc các thuộc tính

    printTodo(id, title, completed); // Gọi hàm printTodo và truyền vào các tham số id, title, completed
  })
  .catch((e) => console.log(e));

const printTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The to with id: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}`);
}; // Khai báo hàm printTodo với 3 tham số id, title, completed và ràng buộc kiểu dữ liệu của các tham số
// Nếu truyền vào 1 kiểu dữ liệu khác sẽ báo lỗi

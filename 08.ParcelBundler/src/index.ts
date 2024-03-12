import { User } from "./User";
const user = new User(); // Khởi tạo một đối tượng từ class
console.log(user); // Hiển thị giá trị của name

import { Company } from "./Company";
const company = new Company(); // Khởi tạo một đối tượng từ class
console.log(company); // Hiển thị giá trị của companyName

import { Map } from "./Map";
const map = new Map("map"); // Khởi tạo một đối tượng từ class
map.addMarker(user); // Thêm marker cho user
map.addMarker(company); // Thêm marker cho company
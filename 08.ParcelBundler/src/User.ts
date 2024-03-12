import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";
export class User implements Mappable{
  name: string; // Khai báo kiểu dữ liệu cho name
  address: {
    lat: number;
    lng: number;
  }; // Khai báo kiểu dữ liệu cho address, lưu ý đây không phải khai báo kiểu dữ liệu object mà là kiểu dữ liệu của thuộc tính address
  constructor() {
    this.name = faker.name.firstName(); // Gán giá trị cho name
    // Không thể truyền giá trị trực tiếp cho address, phải truyền giá trị cho lat và lng vì chúng ta đang khai báo kiểu dữ liệu cho address
    this.address = {
      lat: parseFloat(faker.address.latitude()), // Gán giá trị cho lat
      lng: parseFloat(faker.address.longitude()), // Gán giá trị cho lng
    };
  } // constructor
  markerContent(): string {
    return `
      <div>
        <h1>User Name: ${this.name}</h1>
      </div>
    `;
  }
}

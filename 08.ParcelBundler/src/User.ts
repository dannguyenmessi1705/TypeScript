import { faker } from "@faker-js/faker";
class User {
  name: string; // Khai báo kiểu dữ liệu cho name
  address: {
    lat: number;
    lng: number;
  }; // Khai báo kiểu dữ liệu cho address
  constructor() {
    this.name = faker.name.firstName(); // Gán giá trị cho name
    this.address = {
      lat: parseFloat(faker.address.latitude()), // Gán giá trị cho lat
      lng: parseFloat(faker.address.longitude()), // Gán giá trị cho lng
    };
  } // constructor
}

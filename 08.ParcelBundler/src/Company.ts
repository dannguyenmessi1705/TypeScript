import { faker } from "@faker-js/faker";
export class Company {
  companyName: string;
  companyPhrase: string;
  address: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.name();
    this.companyPhrase = faker.company.catchPhrase();
    this.address = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Company Phrase: ${this.companyPhrase}</h3>
      </div>
    `;
  }
}

/// <reference types="@types/google.maps" />

import { Company } from "./Company";
import { User } from "./User";

export class Map {
  private customMap: google.maps.Map;
  constructor(divId: string) {
    this.customMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 7,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }
  addMarker(mappable: User | Company): void { // mappable: sẽ có kiểu dữ liệu là User hoặc Company, và giữa 2 class này có chung thuộc tính address, nên có thể sử dụng chung
    new google.maps.Marker({
      map: this.customMap,
      position: {
        lat: mappable.address.lat,
        lng: mappable.address.lng
      }
    })
  }
}

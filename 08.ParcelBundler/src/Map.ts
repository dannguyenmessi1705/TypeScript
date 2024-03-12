/// <reference types="@types/google.maps" />

export interface Mappable {
  address: {
    lat: number;
    lng: number;
  };
  markerContent(): string; // method này sẽ trả về chuỗi
}
export class Map {
  private customMap: google.maps.Map;
  constructor(divId: string) {
    this.customMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }
  addMarker(mappable: Mappable): void {
    // mappable: sẽ có kiểu dữ liệu là User hoặc Company,
    // và giữa 2 class này có chung thuộc tính address, nên có thể sử dụng chung`
    const marker = new google.maps.Marker({
      map: this.customMap,
      position: {
        lat: mappable.address.lat,
        lng: mappable.address.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindows = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindows.open(this.customMap, marker);
    });
  }
}

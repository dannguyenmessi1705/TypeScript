/// <reference types="@types/google.maps" />
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
}

/// <reference types="@types/google.maps" />
import { Mappable } from './Mappable';

export class CustomMap {
  private newMap: google.maps.Map;

  constructor(id: string){
    const mapElement = document.getElementById(id) as HTMLElement;
    this.initializeMap(mapElement, id);
  }

  async initializeMap(mapElement: HTMLElement, id: string) {
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

    // The map
    this.newMap = new Map(
      mapElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        },
        mapId: id,
      }
    );
  }

  async addMarker(mappable: Mappable): Promise<void> {
    console.log("@@ addMarker mappable-", mappable);

    // Request needed libraries.
    //@ts-ignore
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    //The position
    const position = {
      lat: mappable.location.lat,
      lng: mappable.location.lng
    };

    // The marker
    const marker = new AdvancedMarkerElement({
      map: this.newMap,
      position: position,
    });
  
    const contentString = '<div id="bodyContent">'+ mappable.markerContent() + '</div>';
    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "",
    });
  
    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map: this.newMap,
      });
    });
  }

}
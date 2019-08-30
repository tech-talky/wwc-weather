import { Component, OnInit } from '@angular/core';
import { AgmMarker } from '@agm/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public markers: AgmMarker[];

  constructor() {
    this.markers = [];
  }

  ngOnInit() {
  }

  // whenever map is clicked an event is triggered
  // that holds lat and long for that.
  // add markert to this new clicked position.
  mapClicked($event: MouseEvent) {
    console.log('Clicked Map:', $event);
    this.markers.push({
      latitude: $event.coords.lat,
      longitude: $event.coords.lng,
      draggable: true
    } as AgmMarker);
  }

  // whenever marker is clicked remove that from the map
  clickedMarker(marker: AgmMarker, index: number) {
    console.log('Removing the clicked Marker:', marker);
    this.markers.splice(index, 1);
  }

  // whenever marker is dragged and left
  markerDragEnd(marker: AgmMarker, $event: MouseEvent) {
    console.log('a marker moved', marker, $event);
  }


}

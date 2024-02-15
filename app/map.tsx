// client (browser) interacts with SchoolMap this can't 
// be a react server function.
"use client";

// react mapbox gl library
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Source, Layer, GeolocateControl, ScaleControl, NavigationControl, ViewStateChangeEvent } from "react-map-gl"
import { useState } from 'react';

const floorplan: any = {
  id: "floor_plan",
  type: "line",
  paint: {
    'fill-color': 'black',
    'fill-opacity': 0.9
  }
}

const mapAttr: any = {
  mapboxAccessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  initialViewState: {
      longitude: -88.1559,
      latitude: 41.7674,
      zoom: 17
    },
    mapStyle: "mapbox://styles/ejscamehorn/cls6whfn702cy01p1gmy2geqo",
    width: "100%",
    height: "100%", 
    style: {
      position: 'absolute',
      top: 0,
      left: 0
    }
}

export default function SchoolMap( { data , data2 } : { data: any, data2: any } ) {
  const [zoom, setZoom] = useState(mapAttr.initialViewState.zoom);

  const handleZoomChange = (event: ViewStateChangeEvent) => {
    setZoom(event.viewState.zoom)
    console.log("zoom changed to", event.viewState.zoom)
  };
  return <Map {...mapAttr} onZoomEnd={handleZoomChange}>
    <GeolocateControl />
    <ScaleControl />
    <NavigationControl />
    <Source type="geojson" data={zoom > 17.5 ? data2 : data}>
      <Layer {...floorplan} />
    </Source>
  </Map>;
}


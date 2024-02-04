// page.tsx is the page rendered at / of the server. reminder: this is a 
// react server function. you can not do anything in the client interactively 
// here.

// filesystem support
import fs from 'fs';

// client function for the map
import SchoolMap from './map';

// server gets geojson of nchs floorplan from file
const filePath = "mapping-src/nchs floorplan georeferenced 4326.geojson"
const geojson: any = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

export default function Home() {
  return (
    <main>
      {/* render mapbox with the geojson on top */}
      <SchoolMap
        data={geojson}
      />
    </main>
  );
}

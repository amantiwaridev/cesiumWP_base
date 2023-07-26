import {Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math } from "cesium";
import "cesium/Widgets/widgets.css";
import "../src/css/main.css"

// // Your access token can be found at: https://cesium.com/ion/tokens.
// // This is the default access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMDA1MGMyZS01Mzg4LTRmMDctOTM2MS1iYjRhZDhlZDBlM2EiLCJpZCI6MTEyNjc4LCJpYXQiOjE2NjY4NzU1NTJ9.G3Zt4HeJ-J5ko1wF46c-1vFCgbhMME8xE5k6XTBCskA';

// // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
// const viewer = new Cesium.Viewer("cesiumContainer", {
//   terrainProvider: new Cesium.CesiumTerrainProvider({
//     url: Cesium.IonResource.fromAssetId(1),
//   }),
// });
const worldTerrain = Cesium.createWorldTerrain({
  requestWaterMask: true,
  requestVertexNormals: true,
});

const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: worldTerrain,
});

const solani = viewer.entities.add({
  polygon: {
    hierarchy: Cesium.Cartesian3.fromDegreesArray([
        77.72,29.88, 77.72,30.30, 78.0,30.30, 78.0,29.88, 
      ]),
        
    height: 0,
    material: Cesium.Color.BLUE.withAlpha(0.5),
    outline: true,
    outlineColor: Cesium.Color.BLACK,
  },
});

viewer.zoomTo(solani);
solani.polygon.height = 0;
const initValue =document.getElementById("volume").value;
solani.polygon.extrudedHeight = initValue;

const buttonTest = document.getElementById("volume");
buttonTest.addEventListener("input", (e)=>{
  solani.polygon.extrudedHeight = e.target.value;
});

// set lighting to true
viewer.scene.globe.enableLighting = false;

const layer = viewer.imageryLayers.addImageryProvider(
  new Cesium.IonImageryProvider({ assetId: 2012824 })
);
    // Centering the view above Solani Basin
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees( 77.92, 30.11, 100000),
    orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-90,0)
    }
    });





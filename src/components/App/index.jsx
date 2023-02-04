import { useState, useEffect } from "react";
import "./App.scss";
import ReactMapboxGl from "react-mapbox-gl";
import Flat from "../Flat";
import FlatMarker from "../FlatMarker";

const API_URL =
  "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiamFvbWF0ZXVzIiwiYSI6ImNsYTJsNWw4cjBpamczdm9qamF1dmRucDIifQ.4t15J5odPc5Afe1898nf2A",
});

const App = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setFlats(data));
  }, []);

  return (
    <div className="app">
      <div className="main">
        <input className="search" />
        <div className="flats">
          {flats.map((flat) => {
            return (
              <Flat
                key={flat.id}
                imageUrl={flat.imageUrl}
                price={flat.price}
                name={flat.name}
              />
            );
          })}
          ;
        </div>
      </div>
      <div className="map">
        <Map
          zoom={[14]}
          center={[2.3522, 48.8566]}
          containerStyle={{ height: "100vh", width: "100%" }}
          style="mapbox://styles/mapbox/streets-v8"
        >
          {flats.map((flat) => {
            return (
              <FlatMarker
                key={flat.id}
                price={flat.price}
                lat={flat.lat}
                lng={flat.lng}
              />
            );
          })}

        </Map>
      </div>
    </div>
  );
};

export default App;

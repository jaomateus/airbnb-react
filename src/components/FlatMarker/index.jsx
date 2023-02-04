import { Marker } from "react-mapbox-gl";
import './FlatMarker.scss'

const FlatMarker = ({ lat, lng, price }) => {
  return (
    <Marker coordinates={[lng, lat]} anchor="bottom">
      <strong className="marker">{price}</strong>
    </Marker>
  );
};
export default FlatMarker;

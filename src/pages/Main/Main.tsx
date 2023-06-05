import React from 'react';
import { MainContainer, Header, Feedback } from './Main.styles';

import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';

import useGeolocation from 'react-hook-geolocation';

const Main = () => {
  const geolocation = useGeolocation();
  const [map, setMap] = React.useState(null);

  let center = {
    lat: 0,
    lng: 0,
  };

  console.log(geolocation);

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  if (geolocation.latitude != null) {
    center = {
      lat: geolocation.latitude,
      lng: geolocation.longitude,
    };
  }

  const path = [
    {
      lat: 37.239683,
      lng: 127.083616,
    },
    {
      lat: 37.239718,
      lng: 127.083615,
    },
    {
      lat: 37.239727,
      lng: 127.083576,
    },
    {
      lat: 37.239682,
      lng: 127.083575,
    },
  ];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(process.env.REACT_APP_GOOGLE_MAP_API),
  });

  // map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
  //   center: { lat: -34.397, lng: 150.644 },
  //   zoom: 6,
  // });
  // infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement('button');

  locationButton.textContent = 'Pan to Current Location';
  locationButton.classList.add('custom-map-control-button');

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <MainContainer>
      <Header>경국맵</Header>
      <Feedback>피드백</Feedback>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Polygon
          // Make the Polygon editable / draggable
          editable
          draggable
          path={path}
          // Event used when manipulating and adding points
          // onMouseUp={onEdit}
          // // Event used when dragging the whole Polygon
          // onDragEnd={onEdit}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
          options={{
            fillColor: 'red',
            strokeColor: 'red',
            strokeWeight: 0,
            geodesic: false,
          }}
          onClick={() => console.log('ccc')}
        />
        <></>
      </GoogleMap>
    </MainContainer>
  ) : (
    <></>
  );
};

export default Main;

import React, { useCallback, useState } from 'react';
import {
  MainContainer,
  Header,
  Feedback,
  SelectorBoxWrapper,
  Building,
  ParticipantsTitle,
  BuildingWraaper,
} from './Main.styles';

import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  Marker,
  Circle,
  InfoWindow,
} from '@react-google-maps/api';

import useGeolocation from 'react-hook-geolocation';

import aa from '../../assets/icons/312.png';

const Main = () => {
  const geolocation = useGeolocation();
  const [map, setMap] = useState(null);
  const [mapLocation, setMapLocation] = useState({ lat: 0, lng: 0 });

  let center = {
    lat: 0,
    lng: 0,
  };

  // function getLocation() {
  //   if (navigator.geolocation) {
  //     // GPS를 지원하면
  //     navigator.geolocation.getCurrentPosition(
  //       function (position) {
  //         alert(position.coords.latitude + ' ' + position.coords.longitude);
  //       },
  //       function (error) {
  //         alert(error);
  //       },
  //       {
  //         enableHighAccuracy: false,
  //         maximumAge: 0,
  //         timeout: Infinity,
  //       }
  //     );
  //   } else {
  //     alert('GPS를 지원하지 않습니다');
  //   }
  // }
  // getLocation();

  // console.log(geolocation);

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

  const handleBuildingClick = useCallback(
    (text: string) => {
      console.log(text);
      if (text == '공과대학') {
        setMapLocation({
          lat: 37.2463696,
          lng: 127.0803839,
        });
      } else if ('전자정보대학') {
        setMapLocation(center);
      }
    },
    [mapLocation]
  );

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
    googleMapsApiKey: 'AIzaSyDRQVy_3xtkSuN-0k7Xvi20BPCqWRP2fqk',
  });

  // map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
  //   center: { lat: -34.397, lng: 150.644 },
  //   zoom: 6,
  // });
  // infoWindow = new google.maps.InfoWindow();

  const getParticipant = () => {
    const result: JSX.Element[] = [];
    const building = [
      '공과대학',
      '전자정보대학',
      '외국어대학',
      '체육대학',
      '예술디자인대학',
      '생명과학대학',
    ];

    for (let i = 0; i < building.length; i++) {
      result.push(
        <Building onClick={() => handleBuildingClick(building[i])}>
          {building[i]}
        </Building>
      );
    }

    return result;
  };

  const locationButton = document.createElement('button');

  locationButton.textContent = 'Pan to Current Location';
  locationButton.classList.add('custom-map-control-button');

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMapLocation(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <MainContainer>
      <Header>
        경국맵
        <Feedback>피드백</Feedback>
      </Header>
      <SelectorBoxWrapper>
        <BuildingWraaper>{getParticipant()}</BuildingWraaper>
      </SelectorBoxWrapper>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapLocation}
        onZoomChanged={() => {
          console.log('dd');
        }}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {path.map((item) => {
          return (
            <Marker
              position={item}
              label={'dd'}
              icon={{
                url: aa,
                scale: 3,
                fillColor: '#EB00FF',
                scaledSize: new google.maps.Size(34, 25),
              }}
            >
              <InfoWindow>
                <span>Something</span>
              </InfoWindow>
            </Marker>
          );
        })}

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
            strokeWeight: 5,
            geodesic: false,
            strokeOpacity: 0.75,
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

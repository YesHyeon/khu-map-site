import React, { useCallback, useEffect, useState } from 'react';
import {
  MainContainer,
  Header,
  Feedback,
  SelectorBoxWrapper,
  Building,
  ParticipantsTitle,
  BuildingWraaper,
  FloorButtonWrapper,
  FloorButton,
  GoogleMapWrapper,
  CurrentButton,
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
import locationImage from '../../assets/icons/locationImg.png';

const Main = () => {
  const geolocation = useGeolocation();
  const [map, setMap] = useState(null);
  const [mapLocation, setMapLocation] = useState({ lat: 0, lng: 0 });
  const [currentBuilding, setCurrentBuildingn] = useState<string>('공과대학');
  const [currentMarker, setCurrentMarker] = useState<any>([{ lat: 0, lng: 0 }]);
  const [a, setA] = useState<any>([{ lat: 0, lng: 0 }]);

  const [infoIndex, setInfoIndex] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [floorButton, setFloorButton] = useState([true, false, false]);

  let center = {
    lat: 0,
    lng: 0,
  };

  let testData = {
    공과대학: {
      location: {
        lat: 37.2463696,
        lng: 127.0803839,
      },
      floor: 7,
      roomposition: [
        {
          name: '101',
          lat: 37.2460496,
          lng: 127.0807303,
        },
        {
          name: '102',
          lat: 37.2461435,
          lng: 127.080734,
        },
        { name: '103', lat: 37.2462135, lng: 127.0807379 },
      ],
    },
    전자정보대학: {
      location: {
        lat: 37.2395856,
        lng: 127.083447,
      },
      floor: 7,
      roomposition: [
        {
          name: '101',
          lat: 37.2463696,
          lng: 127.0803839,
        },
        {
          name: '102',
          lat: 37.2463698,
          lng: 127.0803839,
        },
        { name: '103', lat: 37.2463698, lng: 127.0803839 },
      ],
    },
    외국어대학: {
      location: {
        lat: 37.2451036,
        lng: 127.0778022,
      },
      floor: 7,
      roomposition: [
        {
          name: '101',
          lat: 37.2463696,
          lng: 127.0803839,
        },
        {
          name: '102',
          lat: 37.2463698,
          lng: 127.0803839,
        },
        { name: '103', lat: 37.2463698, lng: 127.0803839 },
      ],
    },
    체육대학: {
      location: {
        lat: 37.2443537,
        lng: 127.0804408,
      },
      floor: 7,
      roomposition: [
        {
          name: '101',
          lat: 37.2463696,
          lng: 127.0803839,
        },
        {
          name: '102',
          lat: 37.2463698,
          lng: 127.0803839,
        },
        { name: '103', lat: 37.2463698, lng: 127.0803839 },
      ],
    },
    예술디자인대학: {
      location: {
        lat: 37.241596,
        lng: 127.084429,
      },
      floor: 7,
      roomposition: [
        {
          name: '101',
          lat: 37.2463696,
          lng: 127.0803839,
        },
        {
          name: '102',
          lat: 37.2463698,
          lng: 127.0803839,
        },
        { name: '103', lat: 37.2463698, lng: 127.0803839 },
      ],
    },
    생명과학대학: {
      location: {
        lat: 37.2428622,
        lng: 127.0810594,
      },
      floor: 7,
      roomposition: {
        '101': {
          lat: 37.2463696,
          lng: 127.0803839,
        },
        '102': {
          lat: 37.2463698,
          lng: 127.0803839,
        },
        '103': {
          lat: 37.2463698,
          lng: 127.0803839,
        },
      },
    },
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = useCallback(() => {
    const getCurrentPosBtn = () => {
      navigator.geolocation.getCurrentPosition(
        getPosSuccess,
        () => alert('위치 정보를 가져오는데 실패했습니다.'),
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
        }
      );
    };

    const getPosSuccess = (pos: GeolocationPosition) => {
      // 현재 위치(위도, 경도) 가져온다.

      setA({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      setMapLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    };

    getCurrentPosBtn();
  }, [a, mapLocation]);

  console.log('Geo', geolocation.latitude);

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
      if (text === '공과대학') {
        setCurrentBuildingn('공과대학');
        setMapLocation(testData['공과대학'].location);
        setCurrentMarker(testData['공과대학'].roomposition);
      } else if (text === '전자정보대학') {
        setCurrentBuildingn('전자정보대학');
        setMapLocation(testData['전자정보대학'].location);
      } else if (text === '외국어대학') {
        setCurrentBuildingn('외국어대학');
        setMapLocation(testData['외국어대학'].location);
      } else if (text === '체육대학') {
        setCurrentBuildingn('체육대학');
        setMapLocation(testData['체육대학'].location);
      } else if (text === '예술디자인대학') {
        setCurrentBuildingn('예술디자인대학');
        setMapLocation(testData['예술디자인대학'].location);
      } else if (text === '생명과학대학') {
        setCurrentBuildingn('생명과학대학');
        setMapLocation(testData['생명과학대학'].location);
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

  console.log(currentMarker);

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

  const getMarker = () => {
    const result: JSX.Element[] = [];

    for (const a in currentMarker) {
      console.log(currentMarker[a]);
      result.push(
        <Marker
          position={currentMarker[a]}
          icon={{
            url: aa,
            scale: 3,
            fillColor: '#EB00FF',
            scaledSize: new google.maps.Size(34, 30),
          }}
        >
          <InfoWindow>
            <span>Something</span>
          </InfoWindow>
        </Marker>
      );
    }

    return result;
  };

  const click = useCallback(
    (index: number) => {
      console.log(index);
      setInfoIndex((prev) =>
        prev.map((v, i) => {
          console.log(i);
          return index === i ? !v : false;
        })
      );
    },
    [infoIndex]
  );

  const handleFloorClick = useCallback(
    (floor: number) => {
      if (floor == 0) {
        setCurrentMarker([
          { lat: 37.246459, lng: 127.0807249, name: '112' },
          { lat: 37.2465465, lng: 127.0807346, name: '113' },
          { lat: 37.2465465, lng: 127.0807346, name: '114' },
        ]);
      }

      if (floor == 1) {
        setCurrentMarker([
          { lat: 37.24659, lng: 127.0807549, name: '212' },
          { lat: 37.2465665, lng: 127.0807456, name: '213' },
          { lat: 37.2465765, lng: 127.0807376, name: '214' },
        ]);
      }

      if (floor == 2) {
        setCurrentMarker([
          {
            name: '301',
            lat: 37.2460496,
            lng: 127.0807303,
          },
          {
            name: '302',
            lat: 37.2461435,
            lng: 127.080734,
          },
          { name: '303', lat: 37.2462135, lng: 127.0807379 },
        ]);
      }
      setFloorButton((prev) =>
        prev.map((v, i) => {
          return floor === i ? !v : false;
        })
      );
    },
    [currentMarker, floorButton]
  );

  const handleCurrentLocationClick = () => {};

  const locationButton = document.createElement('button');

  locationButton.textContent = 'Pan to Current Location';
  locationButton.classList.add('custom-map-control-button');

  // const onLoad = React.useCallback(function callback(map: any) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);

  //   setMapLocation(map);
  // }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  console.log('map', map);

  return isLoaded ? (
    <MainContainer>
      <Header>
        경국맵
        <Feedback>피드백</Feedback>
      </Header>
      <SelectorBoxWrapper>
        <BuildingWraaper>{getParticipant()}</BuildingWraaper>
      </SelectorBoxWrapper>
      <GoogleMapWrapper>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapLocation}
          onZoomChanged={() => {}}
          zoom={18}
          // onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={a}></Marker>
          {currentMarker.map((item: any, index: any) => {
            return (
              <Marker
                position={{ lat: item['lat'], lng: item['lng'] }}
                icon={{
                  url: aa,
                  scale: 3,
                  fillColor: '#EB00FF',
                  scaledSize: new google.maps.Size(34, 25),
                }}
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  click(index);
                }}
              >
                {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  infoIndex[index] ? (
                    <InfoWindow>
                      <span>{item['name']}</span>
                    </InfoWindow>
                  ) : null
                }
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
        </GoogleMap>
      </GoogleMapWrapper>
      <FloorButtonWrapper>
        <FloorButton
          active={floorButton[0]}
          onClick={() => {
            handleFloorClick(0);
          }}
        >
          1
        </FloorButton>
        <FloorButton
          active={floorButton[1]}
          onClick={() => {
            handleFloorClick(1);
          }}
        >
          2
        </FloorButton>
        <FloorButton
          active={floorButton[2]}
          onClick={() => {
            handleFloorClick(2);
          }}
        >
          3
        </FloorButton>
      </FloorButtonWrapper>
      <CurrentButton src={locationImage} onClick={() => getLocation()} />
    </MainContainer>
  ) : (
    <></>
  );
};

export default Main;

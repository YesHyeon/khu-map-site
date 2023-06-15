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
  FloorText,
  FixText,
  InfoButton,
  ButtonWrapper,
  HeaderImg,
  ViewButtonWrapper,
  ViewButton,
} from './Main.styles';

import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  Marker,
  Circle,
  InfoWindow,
} from '@react-google-maps/api';

import InfoBox from '../../components/InfoBox/InfoBox';
import khuLogo from '../../assets/images/khuLogo.png';

import useGeolocation from 'react-hook-geolocation';

import locationImage from '../../assets/icons/locationImg.png';
import info from '../../assets/icons/info.png';

import eng from '../../assets/datas/eng2.json';

const Main = () => {
  const geolocation = useGeolocation();
  const [map, setMap] = useState(null);
  const [mapLocation, setMapLocation] = useState({ lat: 0, lng: 0 });
  const [currentBuilding, setCurrentBuildingn] = useState<string>('공과대학');
  const [currentMarker, setCurrentMarker] = useState<any>([
    { lat: 0, lng: 0, name: 101 },
  ]);
  const [a, setA] = useState<any>([{ lat: 0, lng: 0 }]);
  const [availableShowInfoBox, SetAvailableShowInfoBox] = useState([
    false,
    false,
    false,
  ]);

  const [infoIndex, SetInfoIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [buildingIndex, setBuildingIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
  ]);

  const [floorButton, setFloorButton] = useState([true, false, false]);
  const [viewButton, setViewButton] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

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
    console.log('--', eng);

    setBuildingIndex((prev) =>
      prev.map((v, i) => {
        return 8 === i ? !v : false;
      })
    );

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
    (text: string, index: number) => {
      console.log(text);
      if (text === '공과대학') {
        setCurrentBuildingn('공과대학');
        setMapLocation(testData['공과대학'].location);
        setCurrentMarker(eng['공과대학'].roomposition[0][1]);
        SetAvailableShowInfoBox([false, false, false]);
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

      setBuildingIndex((prev) =>
        prev.map((v, i) => {
          return index === i ? !v : false;
        })
      );
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
        <Building
          active={buildingIndex[i]}
          onClick={() => handleBuildingClick(building[i], i)}
        >
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
            url: '../../assets/icons/322.png',
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
      SetInfoIndex((prev) =>
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
      SetAvailableShowInfoBox([false, false, false]);
      SetInfoIndex((prev) =>
        prev.map((v, i) => {
          return false;
        })
      );

      if (floor == 0) {
        setCurrentMarker(eng['공과대학'].roomposition[0][1]);
        setFloorButton((prev) =>
          prev.map((v, i) => {
            return floor === i ? !v : false;
          })
        );
      }

      if (floor == 1) {
        setCurrentMarker(eng['공과대학'].roomposition[0][2]);
        setFloorButton((prev) =>
          prev.map((v, i) => {
            return floor === i ? !v : false;
          })
        );
      }

      if (floor == 2) {
        alert('지원 예정입니다');
      }
    },
    [currentMarker, floorButton]
  );

  const handleViewClick = useCallback(
    (view: number) => {
      SetAvailableShowInfoBox([false, false, false]);
      SetInfoIndex((prev) =>
        prev.map((v, i) => {
          return false;
        })
      );

      if (view == 0) {
        // setCurrentMarker(eng['공과대학'].roomposition[0][1]);
        setViewButton((prev) =>
          prev.map((v, i) => {
            return view === i ? !v : false;
          })
        );
      }

      if (view == 1) {
        // setCurrentMarker(eng['공과대학'].roomposition[0][2]);
        setViewButton((prev) =>
          prev.map((v, i) => {
            return view === i ? !v : false;
          })
        );
      }

      if (view == 2) {
        setViewButton((prev) =>
          prev.map((v, i) => {
            return view === i ? !v : false;
          })
        );
      }

      if (view == 3) {
        setViewButton((prev) =>
          prev.map((v, i) => {
            return view === i ? !v : false;
          })
        );
      }

      if (view == 4) {
        setViewButton((prev) =>
          prev.map((v, i) => {
            return view === i ? !v : false;
          })
        );
      }
    },
    [currentMarker, viewButton, availableShowInfoBox]
  );

  const handleInfoButtonClick = useCallback(
    (index: number) => {
      SetAvailableShowInfoBox((prev) =>
        prev.map((v, i) => {
          console.log(i);
          return index === i ? !v : false;
        })
      );
    },
    [availableShowInfoBox]
  );

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
        <HeaderImg src={khuLogo} />
        <Feedback
          onClick={() => {
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSfAsYgKx7PS8Vq6cQ-xDPFGhT05yNDcra5lt6fo2YG_Zm-l0g/viewform'
            );
          }}
        >
          피드백
        </Feedback>
      </Header>
      <SelectorBoxWrapper>
        <BuildingWraaper>{getParticipant()}</BuildingWraaper>
      </SelectorBoxWrapper>
      <ViewButtonWrapper>
        {buildingIndex[0] == true ? (
          <>
            <ButtonWrapper>
              <ViewButton
                active={viewButton[0]}
                onClick={() => {
                  handleViewClick(0);
                }}
              >
                전체
              </ViewButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <ViewButton
                active={viewButton[1]}
                onClick={() => {
                  handleViewClick(1);
                }}
              >
                호실
              </ViewButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <ViewButton
                active={viewButton[2]}
                onClick={() => {
                  handleViewClick(2);
                }}
              >
                행정실
              </ViewButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <ViewButton
                active={viewButton[3]}
                onClick={() => {
                  handleViewClick(3);
                }}
              >
                부대시설
              </ViewButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <ViewButton
                active={viewButton[4]}
                onClick={() => {
                  handleViewClick(4);
                }}
              >
                연구실
              </ViewButton>
            </ButtonWrapper>
          </>
        ) : null}
      </ViewButtonWrapper>
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
            if (viewButton[0] == true) {
              return (
                <Marker
                  position={{ lat: item['lat'], lng: item['lng'] }}
                  icon={{
                    url: require(`../../assets/icons/${item['name']}.png`),
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
                        <span>{item['info']}</span>
                      </InfoWindow>
                    ) : null
                  }
                </Marker>
              );
            } else if (viewButton[1] == true) {
              if (item['type'] == 0) {
                return (
                  <Marker
                    position={{ lat: item['lat'], lng: item['lng'] }}
                    icon={{
                      url: require(`../../assets/icons/${item['name']}.png`),
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
                          <span>{item['info']}</span>
                        </InfoWindow>
                      ) : null
                    }
                  </Marker>
                );
              }
            } else if (viewButton[2] == true) {
              if (item['type'] == 2) {
                return (
                  <Marker
                    position={{ lat: item['lat'], lng: item['lng'] }}
                    icon={{
                      url: require(`../../assets/icons/${item['name']}.png`),
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
                          <span>{item['info']}</span>
                        </InfoWindow>
                      ) : null
                    }
                  </Marker>
                );
              }
            } else if (viewButton[3] == true) {
              if (item['type'] == 3) {
                return (
                  <Marker
                    position={{ lat: item['lat'], lng: item['lng'] }}
                    icon={{
                      url: require(`../../assets/icons/${item['name']}.png`),
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
                          <span>{item['info']}</span>
                        </InfoWindow>
                      ) : null
                    }
                  </Marker>
                );
              }
            } else if (viewButton[4] == true) {
              if (item['type'] == 1) {
                return (
                  <Marker
                    position={{ lat: item['lat'], lng: item['lng'] }}
                    icon={{
                      url: require(`../../assets/icons/${item['name']}.png`),
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
                          <span>{item['info']}</span>
                        </InfoWindow>
                      ) : null
                    }
                  </Marker>
                );
              }
            }
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
        {buildingIndex[0] == true ? (
          <>
            <FloorText>층수</FloorText>
            <ButtonWrapper>
              <FloorButton
                active={floorButton[0]}
                onClick={() => {
                  handleFloorClick(0);
                }}
              >
                1
              </FloorButton>
              <InfoButton src={info} onClick={() => handleInfoButtonClick(0)} />
              {availableShowInfoBox[0] ? InfoBox(1) : null}
            </ButtonWrapper>
            <ButtonWrapper>
              <FloorButton
                active={floorButton[1]}
                onClick={() => {
                  handleFloorClick(1);
                }}
              >
                2
              </FloorButton>
              <InfoButton src={info} onClick={() => handleInfoButtonClick(1)} />
              {availableShowInfoBox[1] ? InfoBox(2) : null}
            </ButtonWrapper>
            <ButtonWrapper>
              <FloorButton
                active={floorButton[2]}
                onClick={() => {
                  handleFloorClick(2);
                }}
              >
                3
              </FloorButton>
              <InfoButton src={info} onClick={() => handleInfoButtonClick(2)} />
              {availableShowInfoBox[3] ? InfoBox(2) : null}
            </ButtonWrapper>
          </>
        ) : (
          <FixText>지원예정</FixText>
        )}
      </FloorButtonWrapper>
      <CurrentButton src={locationImage} onClick={() => getLocation()} />
    </MainContainer>
  ) : (
    <></>
  );
};

export default Main;

/* global google */
import {
    default as React,
    Component,
  } from "react";
  
  import {
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
    Marker,
    InfoWindow,
  } from "react-google-maps";
  
  const DirectionsExampleGoogleMap = withGoogleMap(props =>{
    debugger;
    return (
      <GoogleMap
        defaultZoom={7}
        defaultCenter={props.center}
        zoom={14}
      >
     
      
      {props.markers.map((marker, index) => {
        debugger;
        return(
          <Marker
            key={index}
            position={{ lat: marker.location.lat, lng: marker.location.lng }}
            onClick={() => props.onMarkerClick(marker)}
            label={marker.userType}
            labelStyle={{color:'#fff',fontSize:'14px',background:'#fff'}}
          >
            {/*
              Show info window only if the 'showInfo' key of the marker is true.
              That is, when the Marker pin has been clicked and 'onCloseClick' has been
              Successfully fired.
            */}
            {marker.showInfo && (
              <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
                <div>
                  {marker.formatted_address}
                  {marker.distance && <div>{marker.distance}</div>}
                </div>
              
              </InfoWindow>
            )}
          </Marker>
        )})
      
      }
        {props.directions && <DirectionsRenderer directions={props.directions} options={{suppressMarkers: true}} /> }
      </GoogleMap>
    );
  })
    
  
  /*
   * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
   */
  export default class DirectionsExample extends Component {
  
    state = {
      origin: new google.maps.LatLng(37.77, -122.447),
      // destination: {
      //   lat:'',
      //   lng:''
      // },
      destination: new google.maps.LatLng(37.768, -122.511),
      directions: null,
      markers:[{
        "scheduleStatus":'PTO',
        "showInfo": false,
        "distance":null,
        "formatted_address": `3818 Sunset Blvd, Los Angeles, CA 90026, USA`,
        "userType": `TS`,
        "name": `Flore Vegan`,       
        "location": {
          "lat": 37.77,
          "lng": -122.447,
        },
      },
      {
        "scheduleStatus":'Booked',
        "showInfo": false,
        "distance":null,
        "formatted_address": `3818 Sunset Blvd, Los Angeles, CA 90026, USA`,
        "userType": `TS`,
        "name": `Flore Vegan`,       
        "location": {
          "lat": 37.77,
          "lng": -122.447,
        },
      },
      {
        "scheduleStatus":'TBA',
        "showInfo": false,
        "distance":null,
        "formatted_address": `1700 Sunset Blvd, Los Angeles, CA 90026, USA`,
        "userType": `TS`,
        "name": `Sage Plant Based Bistro and Brewery Echo Park`,
       
        "location": {
          "lat": 34.0771192,
          "lng": -118.2587199,
        },
      },
      {
        "scheduleStatus":'Available',
        "showInfo": false,
        "distance":null,
        "formatted_address": `8284 Melrose Ave, Los Angeles, CA 90046, USA`,
        "userType": `TS`,
        "name": `Sage Plant Based Bistro and Brewery Echo Park`,
       
        "location": {
          "lat": 34.083527,
          "lng": -118.370157,
        },
      },
      {
        "scheduleStatus":null,
        "showInfo": false,
        "distance":null,
        "formatted_address": `Sun Valley, Los Angeles, CA, USA`,
        "userType": `S`,
        "name": `Sun Valley`,
       
        "location": {
          "lat": 34.0544,
          "lng": -118.2439,
        },
        
      },
      {
        "scheduleStatus":null,
        "showInfo": false,
        "distance":null,
        "formatted_address": `500 South Michigan Avenue, Chicago, Illinois 60605, United States`,
        "userType": `S`,
        "name": `Placitas`,
       
        "location": {
          "lat": 41.8756,
          "lng": -87.6244,
        }
      },
      {
        "scheduleStatus":null,
        "showInfo": false,
        "distance":null,
        "formatted_address": `10070 Commerce Avenue, Tujunga, California 91042, United States`,
        "userType": `S`,
        "name": `Tujunga`,
       
        "location": {
          "lat": 34.2522,
          "lng": -118.2884,
        }
      },
      {
        "scheduleStatus":null,
        "showInfo": false,
        "distance":null,
        "formatted_address": `5542 Tampa Avenue, Tarzana, California 91356, United States`,
        "userType": `S`,
        "name": `Tarzana`,
       
        "location": {
          "lat": 34.1728,
          "lng": -118.5534,
        }
      },
      {
        "scheduleStatus":null,
        "showInfo": false,
        "distance":null,
        "formatted_address": `4272 Laurel Canyon Boulevard, Studio City, California 91604, United States`,
        "userType": `S`,
        "name": `Studio City`,
       
        "location": {
          "lat": 34.1484,
          "lng":-118.3962,
        }
      },
      {
        "scheduleStatus":null,
        "showInfo": false,
        "distance":null,
        "formatted_address": `18508 Sherman Way, Reseda, California 91335, United States`,
        "userType": `S`,
        "name": `Reseda`,
       
        "location": {
          "lat": 34.2011,
          "lng":-118.5365,
        }
      },
      {
        "scheduleStatus":null,
        "showInfo": false,
        "distance":null,
        "formatted_address": `Office of the Los Angeles Public Defender, 210 W Temple St Fl 19, Los Angeles, California 90012, United States`,
        "userType": `S`,
        "name": `Reseda`,
       
        "location": {
          "lat": 34.0544,
          "lng":-118.2439,
        }
      },
      {
        "scheduleStatus":null,
        "showInfo": false,
        "distance":null,
        "formatted_address": `Office of the Los Angeles Public Defender, 210 W Temple St Fl 19, Los Angeles, California 90012, United States`,
        "userType": `S`,
        "name": `Reseda`,
       
        "location": {
          "lat": 34.0544,
          "lng":-118.2439,
        }
      }
    ],
    }
  
   
    handleMarkerClick = this.handleMarkerClick.bind(this);
    handleMarkerClose = this.handleMarkerClose.bind(this);
   

    distanceCalculator=(meineLongitude, meineLatitude, long1, lat1)=> {
      const erdRadius = 6371;
      const distnation_lng = long1;
      const distnation_lat = lat1;

      meineLongitude = meineLongitude * (Math.PI / 180);
      meineLatitude = meineLatitude * (Math.PI / 180);
      long1 = long1 * (Math.PI / 180);
      lat1 = lat1 * (Math.PI / 180);

     let x0 = meineLongitude * erdRadius * Math.cos(meineLatitude);
     let y0 = meineLatitude * erdRadius;

      let x1 = long1 * erdRadius * Math.cos(lat1);
      let y1 = lat1 * erdRadius;

      const dx = x0 - x1;
      const dy = y0 - y1;

      const d = Math.sqrt((dx * dx) + (dy * dy));

      let nearestLocationObj ={
           "lat": distnation_lat,
           "lng": distnation_lng,
           "distance": d
      }

      // if (d < 1) {
      //     return Math.round(d * 1000) +" m"
      //     ;
      // } else {
      //     return Math.round(d * 10) / 10 +" km"
      //     ;
      // }
      return nearestLocationObj;
  };
    // Toggle to 'true' to show InfoWindow and re-renders component
    handleMarkerClick(targetMarker) {
      debugger;
      const nearestLocation=[];
      //Onclick Marker show Infobox
      this.setState({
        markers: this.state.markers.map(marker => {
          if (marker === targetMarker) {
            return {
              ...marker,
              showInfo: true,
            };
          }
          return marker;
        }),
      });
      if(targetMarker.userType === 'TS'){
        this.state.markers.map(marker =>{
          if(marker.userType !== 'TS')
          {
            nearestLocation.push(this.distanceCalculator(targetMarker.location.lng,targetMarker.location.lat, marker.location.lng, marker.location.lat));
          }
        });
        const min = Math.min.apply(null, nearestLocation.map(function(item) {
          return item.distance;
        }));
       
    
        let obj = nearestLocation.find(obj => obj.distance === min);
        let distance =null;
        this.setState({
          markers: this.state.markers.map(marker => {           
              if ((marker.location.lat && marker.location.lng) === (obj.lat && obj.lng)) {
                 if (obj.distance < 1) {
                   distance =  Math.round(obj.distance * 1000) +" m";          
                  } else {
                    distance = Math.round(obj.distance * 10) / 10 +" km";                      
                  }               
              }
              return {
                ...marker,                  
                distance:distance,
              };                     
          }),
        })


        console.log('destinationlat' + obj.lat);
        console.log('destinationlng' + obj.lng);
        console.log('orginalLat' + targetMarker.location.lat);
        console.log('orginallng' + targetMarker.location.lng);
        this.setState({destination:new google.maps.LatLng(obj.lat, obj.lng) })
      
        const DirectionsService = new google.maps.DirectionsService();
        //DirectionsService.setOptions( { suppressMarkers: true } );
        DirectionsService.route({
          origin:{lat:targetMarker.location.lat ,lng:targetMarker.location.lng},
          destination: this.state.destination,
          travelMode: google.maps.TravelMode.DRIVING,
          optimizeWaypoints: true,
        }, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        });
      }
    }
  
    handleMarkerClose(targetMarker) {
      this.setState({
        markers: this.state.markers.map(marker => {
          if (marker === targetMarker) {
            return {
              ...marker,
              showInfo: false,
            };
          }
          return marker;
        }),
      });
    }
  
    render() {
      return (
        <DirectionsExampleGoogleMap
          containerElement={
            <div style={{ height: `800px` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          center={this.state.origin}
          directions={this.state.directions}
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
        />
      );
    }
  }
  
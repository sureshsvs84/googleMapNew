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
                <div>{marker.formatted_address}</div>
              </InfoWindow>
            )}
          </Marker>
        )})
      
      }
        {props.directions && <DirectionsRenderer directions={props.directions} /> }
      </GoogleMap>
    );
  })
    
  
  /*
   * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
   */
  export default class DirectionsExample extends Component {
  
    state = {
      origin: new google.maps.LatLng(34.091158, -118.2795188),
      // destination: {
      //   lat:'',
      //   lng:''
      // },
      destination: new google.maps.LatLng(41.8525800, -87.6514100),
      directions: null,
      markers:[{
        "showInfo": false,
        "distance":null,
        "formatted_address": `3818 Sunset Blvd, Los Angeles, CA 90026, USA`,
        "userType": `TS`,
        "name": `Flore Vegan`,       
        "location": {
          "lat": 34.091158,
          "lng": -118.2795188,
        },
      },
      {
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
        "showInfo": false,
        "distance":`12`,
        "formatted_address": `8284 Melrose Ave, Los Angeles, CA 90046, USA`,
        "userType": `S`,
        "name": `Sage Plant Based Bistro and Brewery Echo Park`,
       
        "location": {
          "lat": 34.083527,
          "lng": -118.370157,
        },
      },
      {
        "showInfo": false,
        "distance":`12`,
        "formatted_address": `4319 Sunset Blvd, Los Angeles, CA 90029, USA`,
        "userType": `S`,
        "name": `Sage Plant Based Bistro and Brewery Echo Park`,
       
        "location": {
          "lat": 34.0951843,
          "lng": -118.283107,
        },
      }],
    }
  
   
    handleMarkerClick = this.handleMarkerClick.bind(this);
    handleMarkerClose = this.handleMarkerClose.bind(this);
    //distanceCalculator = this.distanceCalculator.bind(this);

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
              showInfo: false,
            };
          }
          return marker;
        }),
      });

      this.state.markers.map(marker =>{
        if(marker.userType !== 'TS')
        {
          nearestLocation.push(this.distanceCalculator(targetMarker.location.lat,targetMarker.location.lng, marker.location.lat, marker.location.lng));
        }
      });

      const min = Math.min.apply(null, nearestLocation.map(function(item) {
        return item.distance;
      }));
  
      let obj = nearestLocation.find(obj => obj.distance === min);
debugger;
      this.setState({destination:new google.maps.LatLng(obj.lng, obj.lat) })
      
      const DirectionsService = new google.maps.DirectionsService();
  
      DirectionsService.route({
        origin:{lat:targetMarker.location.lat ,lng:targetMarker.location.lng},
        destination: this.state.destination,
        travelMode: google.maps.TravelMode.DRIVING,
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
  
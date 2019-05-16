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

export const iconColor={
             Booked:'red',
             Available:'green',
             PTO:'yellow',
             TBA:'orange',
             supplier:'blue'
}
const DirectionsExampleGoogleMap = withGoogleMap(props => {
    
const iconUrl = "http://maps.google.com/mapfiles/ms/icons/"
    return (
        <GoogleMap
            defaultCenter={props.center}
            zoom={10}
        >
            <div id="floating-panel">
                <b>Technical Specialist: </b>

                <select id="start" name="start" onChange={props.handledropDownClick} value={props.selectedTS}>
                    {props.markers.map((x,i) => {
                       
                        if (x.userType === 'TS') {
                            return (
                                <option key={i} value={x.name}>{x.name}</option>
                            )
                        }
                         return null;
                    })}

                </select>
                <b>Suppliers: </b>
                <select id="end" name="end" onChange={props.handledropDownClick}  value={props.selectedSupplier}>
                    {props.markers.map((x,i) => {
                        if (x.userType !== 'TS') {
                            return (
                                <option key={i} value={x.name}>{x.name}</option>
                            )
                        }
                        return null;
                    })}
                </select>
            </div>

            {props.markers.map((marker, index) => {
                
                return (
                    <Marker
                        key={index}
                        position={{ lat: marker.location.lat, lng: marker.location.lng }}
                        onClick={() => props.onMarkerClick(marker)}
                        label={marker.userType}
                        labelStyle={{ color: '#fff', fontSize: '14px', background: '#fff' }}
                        icon={{
                              
                            url: marker.userType === 'TS' ? iconUrl+iconColor[marker.scheduleStatus]+'.png' : iconUrl+iconColor.supplier+'.png' ,
                            size: new google.maps.Size(48,40),
                            scaledSize: new google.maps.Size(48, 40)
                               
                        }}
                    >           
                        {marker.showInfo && (
                            <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
                                <div>
                        {props.directions !== null && <p>{props.directions.routes[0].legs[0].start_address}{props.directions.routes[0].legs[0].distance.text} {props.directions.routes[0].legs[0].duration.text}</p> }
                                    <p>{marker.name}  { marker.userType === 'TS' &&   <span style={{ color:iconColor[marker.scheduleStatus] , fontWeight:600}}>: {marker.scheduleStatus}</span> } </p>
                                    { marker.distance && <div  style={{fontWeight:600}}>Seleted Supplier Distance : {marker.distance}</div>}
                                </div>

                            </InfoWindow>
                        )}
                    </Marker>
                )
            })

            }
            {props.directions && <DirectionsRenderer directions={props.directions} options={{ suppressMarkers: true }} />}
        </GoogleMap>
    );
})


/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class DirectionsExample extends Component {
 constructor(props){
     super(props);
     this.state = {
        origin: new google.maps.LatLng(13.09, 80.27),
        destination: new google.maps.LatLng(13.1, 79.66667),
        parentLat:{lat:'',lng:'',name:''},
        selectedSupplier:{lat:'',lng:'',name:''},
        directions: null,
        markers: [
            {
            "scheduleStatus": 'PTO',
            "showInfo": false,
            "distance": null,
            "formatted_address": `Nehru Indoor Stadium, Chennai, Tamil Nadu, India`,
            "userType": `TS`,
            "name": `Nehru Indoor Stadium`,
            "location": {
                "lat":13.09,
                "lng":80.27,
            },
        },
        {
            "scheduleStatus": 'Booked',
            "showInfo": false,
            "distance": null,
            "formatted_address": `Ambur Railway Station, Ambur, Tamil Nadu, India`,
            "userType": `TS`,
            "name": `Ambur Railway Station`,
            "location": {
                "lat": 12.779902,
                "lng": 78.718839,
            },
        },
        {
            "scheduleStatus": 'TBA',
            "showInfo": false,
            "distance": null,
            "formatted_address": `Anaimalai, Pollachi, Coimbatore, Tamil Nadu, India`,
            "userType": `TS`,
            "name": `Anaimalai`,

            "location": {
                "lat": 10.596879,
                "lng": 76.946342,
            },
        },
        {
            "scheduleStatus": 'Available',
            "showInfo": false,
            "distance": null,
            "formatted_address": `Kilkuppam, Arakkonam, Vellore, Tamil Nadu, India`,
            "userType": `TS`,
            "name": `Kilkuppam`,

            "location": {
                "lat": 13.1,
                "lng": 79.66667,
            },
        },
        {
            "scheduleStatus": null,
            "showInfo": false,
            "distance": null,
            "formatted_address": `Arantangi, Tamil Nadu, India`,
            "userType": `S`,
            "name": `Arantangi`,

            "location": {
                "lat": 10.1631,
                "lng": 78.9962,
            },

        },
        {
            "scheduleStatus": null,
            "showInfo": false,
            "distance": null,
            "formatted_address": `Mazhayur, Arcot, Vellore, Tamil Nadu, India`,
            "userType": `S`,
            "name": `Mazhayur`,

            "location": {
                "lat": 12.760165,
                "lng": 79.368868,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,
            "distance": null,
            "formatted_address": `Attur, Tamil Nadu, India`,
            "userType": `S`,
            "name": `Attur`,

            "location": {
                "lat": 11.59934,
                "lng": 78.59775,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,
            "distance": null,
            "formatted_address": `Coimbatore, Coimbatore, Tamil Nadu, India`,
            "userType": `S`,
            "name": `Coimbatore`,

            "location": {
                "lat": 11.009075,
                "lng": 76.933337,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,
            "distance": null,
            "formatted_address": `Dharapuram, Tamil Nadu, India`,
            "userType": `S`,
            "name": `Dharapuram`,

            "location": {
                "lat": 10.73,
                "lng": 77.52,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,
            "distance": null,
            "formatted_address": `Tamilnadu Hotel, TTDC, Ajjanahalli, Tamil Nadu, India`,
            "userType": `S`,
            "name": `Ajjanahalli`,

            "location": {
                "lat": 12.117792,
                "lng": 77.779082,
            }
        }        

        ]
    }
  }
    
    handledropDownClick=(e) =>{
       // e.preventDefault();
        const selectedName = e.target.value;
        let selectedLatitude = {};
        this.state.markers.map(x => {
            if (x.name === selectedName) {
                selectedLatitude = {"location":{'lat': x.location.lat, 'lng': x.location.lng,'name':x.name }}
               }
            return null;
        });
       
        if (e.target.name === 'start') {
            this.setState({
                origin: new google.maps.LatLng(selectedLatitude.location.lat, selectedLatitude.location.lng),
                parentLat:{lat:selectedLatitude.location.lat,lng:selectedLatitude.location.lng,name:selectedLatitude.name},
            })
        }
        if (e.target.name === 'end') {
            this.setState({
                destination: new google.maps.LatLng(selectedLatitude.location.lat, selectedLatitude.location.lng),
                selectedSupplier:{lat:selectedLatitude.location.lat,lng:selectedLatitude.location.lng,name:selectedLatitude.name},
                
            })
        }
        const distance = this.distanceCalculator(this.state.parentLat.lng, this.state.parentLat.lat, selectedLatitude.location.lng, selectedLatitude.location.lat,selectedLatitude.name);
        
        if(e.target.name === 'start'){
            this.updateDistance(distance, selectedLatitude.location);
            this.getrootMapServices(selectedLatitude.location,this.state.selectedSupplier);
        }else{
            this.updateDistance(distance, this.state.parentLat);
            this.getrootMapServices(this.state.parentLat,selectedLatitude.location);
        }
     
        

    };
    // Toggle to 'true' to show InfoWindow and re-renders component
    handleMarkerClick =(targetMarker)=> {
                
        //Onclick Marker show Infobox
        this.setState({
            markers: this.state.markers.map((marker,i) => {
                if (marker === targetMarker) {
                    return {
                        ...marker,
                        showInfo: true,                        
                    };
                }
                return marker;
            })
           
        });
        if (targetMarker.userType === 'TS') {
            this.getShortestLocation(targetMarker)
        } 
        // else if(targetMarker.userType === 'S'){
        //     this.updateDistance(this.distanceCalculator(this.state.parentLat.lng, this.state.parentLat.lat, targetMarker.location.lng, targetMarker.location.lat));
        // }
    };

    handleMarkerClose=(targetMarker)=> {
        this.setState({
            markers: this.state.markers.map(marker => {
                if (marker === targetMarker) {
                    return {
                        ...marker,
                        showInfo: !marker.showInfo,
                    };
                }
                return marker;
            }),
        });
    };

    distanceCalculator = (meineLongitude, meineLatitude, long1, lat1, distnationName) => {
        const erdRadius = 6371;
        const distnation_lng = long1;
        const distnation_lat = lat1;
        const distnation_Name = distnationName;

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

        let nearestLocationObj = {
            "name":distnation_Name,
            "lat": distnation_lat,
            "lng": distnation_lng,
            "distance": d
        }
        return nearestLocationObj;
    };

    getShortestLocation=(targetMarker)=>{
        
        const nearestLocation = [];
        this.state.markers.map(marker => {
            if (marker.userType !== 'TS') {
                nearestLocation.push(this.distanceCalculator(targetMarker.location.lng, targetMarker.location.lat, marker.location.lng, marker.location.lat,marker.name));
            }
            return null;
        });
        //Find Minimum Distance Here...
        const min = Math.min.apply(null, nearestLocation.map(function (item) {
            return item.distance;
        }));
        let obj = nearestLocation.find(obj => obj.distance === min);

        this.updateDistance(obj,targetMarker);

        this.setState({
            origin: new google.maps.LatLng(targetMarker.location.lat, targetMarker.location.lng),
            destination: new google.maps.LatLng(obj.lat, obj.lng),
            parentLat:{lat:targetMarker.location.lat,lng:targetMarker.location.lng,name:targetMarker.name},
            selectedSupplier:{lat:obj.lat,lng:obj.lng,name:obj.name}
        })
        this.getrootMapServices(targetMarker.location,obj);
    };

    updateDistance=(obj,targetMarker)=> {
        debugger;
        let distance = null;
            this.setState({
                markers: this.state.markers.map(marker => {
                     if(marker.userType === 'TS'){
                        if ((marker.location.lat && marker.location.lng) === (targetMarker.lat && targetMarker.lng)) {
                            if (obj.distance < 1) {
                                distance = Math.round(obj.distance * 1000) + " m";
                            } else {
                                distance = Math.round(obj.distance * 10) / 10 + " km";
                            }
                            return {
                                ...marker,
                                distance: distance,
                                showInfo:true
                            };
                        }
                     }
                   
                    return marker;
                })
               
            })   
    };

    getrootMapServices=(originPath,destinationPath)=>{
        debugger;
        const DirectionsService = new google.maps.DirectionsService();
        DirectionsService.route({
            origin:{lat:originPath.lat,lng:originPath.lng},
            destination: {lat:destinationPath.lat,lng:destinationPath.lng},
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
    };
    componentDidMount(){
        this.setState({parentLat:{lat:13.09, lng:80.27,name:''},
                       selectedSupplier:{lat:10.1631,lng: 78.9962,name:''},})
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
                handledropDownClick={this.handledropDownClick}
                selectedTS={this.state.parentLat.name}
                selectedSupplier={this.state.selectedSupplier.name}

            />
        );
    }
}

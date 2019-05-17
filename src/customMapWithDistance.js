/* global google */
import {
    default as React,
    Component,
} from "react";
import { compose } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
    Marker,
    InfoWindow,
    withProps
} from "react-google-maps";
export const iconColor={
             Booked:'red',
             Available:'green',
             PTO:'yellow',
             TBA:'orange',
             supplier:'blue'
}
export const scheduleStatus={
    Booked:'Booked',
    Available:'Available',
    PTO:'PTO',
    TBA:'TBA',
    
}
const DirectionsExampleGoogleMap = compose(
    withScriptjs,
    withGoogleMap)(props => {
const iconUrl = "http://maps.google.com/mapfiles/ms/icons/";
    return (
        <GoogleMap
            defaultCenter={props.center}
            zoom={8}
        >
            <div id="floating-panel">
                <b>Technical Specialist: </b>

                <select id="start" name="start" onChange={props.handledropDownClick} value={props.selectedTS}>
                    {props.markers && props.markers.map((x,i) => {                       
                        if (x.scheduleStatus === scheduleStatus.Booked || x.scheduleStatus === scheduleStatus.Available || x.scheduleStatus === scheduleStatus.PTO || x.scheduleStatus === scheduleStatus.TBA) {
                            return (
                                <option key={i} value={x.name}>{x.name}</option>
                            )
                        }
                         return null;
                    })}
                </select>
                <b>Suppliers: </b>
                <select id="end" name="end" onChange={props.handledropDownClick}  value={props.selectedSupplier}>
                    {props.markers &&  props.markers.map((x,i) => {
                         if (x.scheduleStatus === null) {
                            return (
                                <option key={i} value={x.name}>{x.name}</option>
                            )
                        }
                        return null;
                    })}
                </select>
            </div>

            {props.markers.map((marker, index) => {
                debugger;
                return (
                    <Marker
                        key={index}
                        position={{ lat: marker.location.lat, lng: marker.location.lng }}
                        onClick={() => props.onMarkerClick(marker)}
                        label={marker.scheduleStatus ? 'TS' : 'S'}
                        options={{ color: '#fff', fontSize: '14px', }}
                        icon={{                              
                            url: marker.scheduleStatus !==null ? iconUrl+iconColor[marker.scheduleStatus]+'.png' : iconUrl+iconColor.supplier+'.png',
                            size: new google.maps.Size(48,40),
                            scaledSize: new google.maps.Size(48, 40)
                               
                        }}
                    >           
                        {marker.showInfo && (
                            <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
                                <div>
                                {(props.directions !== null && marker.scheduleStatus === (scheduleStatus[marker.scheduleStatus])) &&  <p>{props.distanceInfo.start_address}</p> }
                                <p>{marker.name}  { marker.scheduleStatus === (scheduleStatus[marker.scheduleStatus]) &&   <span style={{ color:iconColor[marker.scheduleStatus] , fontWeight:600}}>: {marker.scheduleStatus}</span> } </p>
                                {(props.directions !== null && marker.scheduleStatus === (scheduleStatus[marker.scheduleStatus])) &&  <div  style={{fontWeight:600}}>Seleted Supplier Distance : {props.distanceInfo.distance.text}. Travel Time : {props.distanceInfo.duration.text}</div>}
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
export default class DirectionswithDistanceExample extends Component {
 constructor(props){
     super(props);     
     this.state = {
        selectedTS:{lat:'',lng:'',name:''},
        selectedSupplier:{lat:'',lng:'',name:''},
        directions: null,
        distanceInfo:null,
        
        markers: [
            {
            "scheduleStatus": 'PTO',
            "showInfo": false,           
            "name": `Nehru Indoor Stadium`,
            "location": {
                "lat":13.09,
                "lng":80.27,
            },
        },
        {
            "scheduleStatus": 'Booked',
            "showInfo": false,           
            "name": `Ambur Railway Station`,
            "location": {
                "lat": 12.779902,
                "lng": 78.718839,
            },
        },
        {
            "scheduleStatus": 'TBA',
            "showInfo": false,
            "name": `Anaimalai`,
            "location": {
                "lat": 10.596879,
                "lng": 76.946342,
            },
        },
        {
            "scheduleStatus": 'Available',
            "showInfo": false,           
            "name": `Kilkuppam`,
            "location": {
                "lat": 13.1,
                "lng": 79.66667,
            },
        },
        {
            "scheduleStatus": null,
            "showInfo": false,
            "name": `Arantangi`,
            "location": {
                "lat": 10.1631,
                "lng": 78.9962,
            },

        },
        {
            "scheduleStatus": null,
            "showInfo": false,           
            "name": `Mazhayur`,
            "location": {
                "lat": 12.760165,
                "lng": 79.368868,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,           
            "name": `Attur`,
            "location": {
                "lat": 11.59934,
                "lng": 78.59775,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,          
            "name": `Coimbatore`,
            "location": {
                "lat": 11.009075,
                "lng": 76.933337,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,
            "name": `Dharapuram`,
            "location": {
                "lat": 10.73,
                "lng": 77.52,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,           
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
                selectedTS:{lat:selectedLatitude.location.lat,lng:selectedLatitude.location.lng,name:selectedLatitude.name},
            })
        }
        if (e.target.name === 'end') {
            this.setState({              
                selectedSupplier:{lat:selectedLatitude.location.lat,lng:selectedLatitude.location.lng,name:selectedLatitude.name},
                
            })
        }        
        if(e.target.name === 'start'){        
            this.getrootMapServices(selectedLatitude.location,this.state.selectedSupplier);
            this.showInfoBox(selectedLatitude.location);
        }else{           
            this.getrootMapServices(this.state.selectedTS,selectedLatitude.location);
            this.showInfoBox(this.state.selectedTS)
        }
    };
     // show infoBox On Dropdown selection
     showInfoBox=(targetMarker)=>{
        this.setState({
            markers: this.state.markers.map(marker => {
                 if(marker.scheduleStatus !== null){
                    if ((marker.location.lat && marker.location.lng) === (targetMarker.lat && targetMarker.lng)) {
                       
                        return {
                            ...marker,                              
                            showInfo:true
                        };
                    }
                 }
               
                return marker;
            })
           
        }) 
     }



    // Toggle to 'true' to show InfoWindow and re-renders component
    handleMarkerClick =(targetMarker)=> {                
        //Onclick Marker show Infobox
        this.setState({
            markers: this.state.markers.map((marker,i) => {
                if (marker === targetMarker) {
                    return {
                        ...marker,
                        showInfo: !marker.showInfo,                        
                    };
                }
                return marker;
            })
           
        });
        if (targetMarker.scheduleStatus !== null) {
            this.getShortestLocation(targetMarker)
        }
       
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
            if (marker.scheduleStatus == null) {
                nearestLocation.push(this.distanceCalculator(targetMarker.location.lng, targetMarker.location.lat, marker.location.lng, marker.location.lat,marker.name));
            }
            return null;
        });
        //Find Minimum Distance Here...
        const min = Math.min.apply(null, nearestLocation.map(function (item) {
            return item.distance;
        }));
        let shortestLocation = nearestLocation.find(obj => obj.distance === min);

        this.updateDistance(shortestLocation,targetMarker);

        this.setState({           
            selectedTS:{lat:targetMarker.location.lat,lng:targetMarker.location.lng,name:targetMarker.name},
            selectedSupplier:{lat:shortestLocation.lat,lng:shortestLocation.lng,name:shortestLocation.name}
        })
        this.getrootMapServices(targetMarker.location,shortestLocation);
    };

    updateDistance=(shortestLocation,targetMarker)=> {
        debugger;
        let distance = null;
            this.setState({
                markers: this.state.markers.map(marker => {
                     if(marker.userType === 'TS'){
                        if ((marker.location.lat && marker.location.lng) === (targetMarker.lat && targetMarker.lng)) {
                            if (shortestLocation.distance < 1) {
                                distance = Math.round(shortestLocation.distance * 1000) + " m";
                            } else {
                                distance = Math.round(shortestLocation.distance * 10) / 10 + " km";
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
                    distanceInfo:result.routes[0].legs[0]
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    };

    componentDidMount(){
        this.setState({selectedTS:{lat:13.09, lng:80.27,name:''},
                       selectedSupplier:{lat:10.1631,lng: 78.9962,name:''},})
    }

    render() {
        
        return (
            <DirectionsExampleGoogleMap
                googleMapURL= "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDZSVnT-Oaft2Stx72a_OG0DN8_Z-9-d48"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `800px` }} />}
                mapElement= {<div style={{ height: `100%` }} />}
                center= {{ lat: 13.09, lng:80.27}}
                directions={this.state.directions}
                distanceInfo={this.state.distanceInfo}
                markers={this.state.markers}
                onMarkerClick={this.handleMarkerClick}
                onMarkerClose={this.handleMarkerClose}
                handledropDownClick={this.handledropDownClick}
                selectedTS={this.state.selectedTS.name}
                selectedSupplier={this.state.selectedSupplier.name}

            />
        );
    }
}

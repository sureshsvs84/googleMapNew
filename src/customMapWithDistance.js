/* global google */
import {
    default as React,
    Component,
} from "react";
import { compose } from 'recompose';
//import  CustomInput  from '../../baseComponents/inputControlls';
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
             PTO:'blue',
             TBA:'orange',
             supplier:'purple'
};
export const scheduleStatus={
    Booked:'Booked',
    Available:'Available',
    PTO:'PTO',
    TBA:'TBA',    
};
const DirectionsServices = compose(
    withScriptjs,
    withGoogleMap)(props => {
const iconUrl = "http://maps.google.com/mapfiles/ms/icons/";
debugger;
const listofTechnicalSpec = props.markers.filter(x => x.scheduleStatus === scheduleStatus[x.scheduleStatus]);
const listofSupplier = props.markers.filter(x => x.scheduleStatus === null);
    return (
        <GoogleMap
            defaultCenter={props.center}
            zoom={8}
        >
            <div id="floating-panel">
                <b>Technical Specialist: </b>

                <select id="start" name="start" disabled={true} onChange={props.handledropDownClick} value={props.selectedTS}>
                    {props.markers && props.markers.map((x,i) => {                       
                        if (x.scheduleStatus === scheduleStatus.Booked || x.scheduleStatus === scheduleStatus.Available || x.scheduleStatus === scheduleStatus.PTO || x.scheduleStatus === scheduleStatus.TBA) {
                            return (
                                <option key={i} value={x.firstName}>{x.firstName}</option>
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
                                <option key={i} value={x.firstName}>{x.firstName}</option>
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
                        //place={'14553 AL-22, Maplesville, AL 36750, USA'}
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
                                <p>{marker.name}  { marker.scheduleStatus === (scheduleStatus[marker.scheduleStatus]) &&   <span style={{ color:iconColor[marker.scheduleStatus] , fontWeight:600 }}>: {marker.scheduleStatus}</span> } </p>
                                {(props.directions !== null && marker.scheduleStatus === (scheduleStatus[marker.scheduleStatus])) &&  <div  style={{ fontWeight:600 }}>Seleted Supplier Distance : {props.distanceInfo.distance.text}. Travel Time : {props.distanceInfo.duration.text}</div>}
                                </div>
                            </InfoWindow>
                        )}
                    </Marker>
                );
            })

            }
            {props.directions && <DirectionsRenderer directions={props.directions} options={{ suppressMarkers: true }} />}
        </GoogleMap>
    );
});

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class DirectionsGoogleMap extends Component {
 constructor(props){
     super(props);     
     this.state = {
        selectedTS:{ lat:'',lng:'',name:'' },
        selectedSupplier:{ lat:'',lng:'',name:'' },
        directions: null,
        distanceInfo:null,
        //markers_2 : props.quickSearchResult,
        //markers_1 : props.quickSearchResult.filter(resultArray => resultArray);
        markers_1 : props.quickSearchResult && props.quickSearchResult[0].resourceSearchTechspecInfos.map(function(el) {
            let o = Object.assign({}, el);
            o.isActive = false;
            return o;
          }),          
       
        markers: [
            {
            "scheduleStatus": 'PTO',
            "showInfo": false,           
            "name": `Alabama`,
            "address":'14553 AL-22, Maplesville, AL 36750, USA',
            "location": {
                "lat":32.806671,
                "lng":-86.791130,
            },
        },
        {
            "scheduleStatus": 'Booked',
            "showInfo": false,           
            "name": `Alaska`,
            "address":'Tyonek, Alaska 99682, United States',
            "location": {
                "lat": 61.370716,
                "lng": -152.404419,
            },
        },
        {
            "scheduleStatus": 'TBA',
            "showInfo": false,
            "name": `Arizona`,
            "address":'Cline Cabin Road, Rio Verde, Arizona 85263, United States',            
            "location": {
                "lat": 33.729759,
                "lng": -111.431221,
            },
        },
        {
            "scheduleStatus": 'Available',
            "showInfo": false,           
            "name": `Arkansas`,
            "address":'Green Lake Road, Conway, Arkansas 72032, United States',
            "location": {
                "lat": 34.969704,
                "lng": -92.373123,
            },
        },
        {
            "scheduleStatus": null,
            "showInfo": false,
            "name": `California`,
            "address":'12th Avenue, Hanford, California 93230, United States',
            "location": {
                "lat": 36.116203,
                "lng": -119.681564,
            },

        },
        {
            "scheduleStatus": null,
            "showInfo": false,           
            "name": `Colorado`,
            "address":'Forest Service Road 897, Lake George, Colorado 80827, United States',
            "location": {
                "lat": 39.059811,
                "lng": -105.311104,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,           
            "name": `Connecticut`,
            "address":'1829 Orchard Road, Berlin, Connecticut 06037, United States',
            "location": {
                "lat": 41.597782,
                "lng": -72.755371,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,          
            "name": `Delaware`,
            "addrsss":'3902 Delaware Highway 9, Smyrna, Delaware 19977, United States',
            "location": {
                "lat": 39.318523,
                "lng": -75.507141,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,
            "name": `Columbia`,
            "location": {
                "lat": 38.897438,
                "lng": -77.026817,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,           
            "name": `Florida`,
            "address":'675 Campbell Road, Fort Meade, Florida 33841, United States',
            "location": {
                "lat": 27.766279,
                "lng": -81.686783,
            }
        },
        {
            "scheduleStatus": null,
            "showInfo": false,           
            "name": `Georgia`,
            "address":'670 Five Points Road, Gray, Georgia 31032, United States',
            "location": {
                "lat": 33.040619,
                "lng": -83.643074,
            }
        } ,
       
        {
            "scheduleStatus": null,
            "showInfo": false,           
            "name": `Illinois`,
            "address":'14668 East 450 North Road, Heyworth, Illinois 61745, United States',
            "location": {
                "lat": 40.349457,
                "lng": -88.986137,
            }
        }             

        ]
    };
  }
    
    handledropDownClick=(e) =>{  
        const selectedName = e.target.value;
        let selectedLatitude = {};
        this.state.markers.map(x => {
            if (x.name === selectedName) {
                selectedLatitude = { "location":{ 'lat': x.location.lat, 'lng': x.location.lng,'name':x.name } };
               }
            return null;
        });
       
        if (e.target.name === 'start') {
            this.setState({               
                selectedTS:{ lat:selectedLatitude.location.lat,lng:selectedLatitude.location.lng,name:selectedLatitude.name },
            });
        }
        if (e.target.name === 'end') {
            this.setState({              
                selectedSupplier:{ lat:selectedLatitude.location.lat,lng:selectedLatitude.location.lng,name:selectedLatitude.name },
                
            });
        }        
        if(e.target.name === 'start'){        
            this.getrootMapServices(selectedLatitude.location,this.state.selectedSupplier);
            this.showInfoBox(selectedLatitude.location);
        }else{           
            this.getrootMapServices(this.state.selectedTS,selectedLatitude.location);
            this.showInfoBox(this.state.selectedTS);
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
           
        }); 
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
            this.getShortestLocation(targetMarker);
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

        const x0 = meineLongitude * erdRadius * Math.cos(meineLatitude);
        const y0 = meineLatitude * erdRadius;

        const x1 = long1 * erdRadius * Math.cos(lat1);
        const y1 = lat1 * erdRadius;

        const dx = x0 - x1;
        const dy = y0 - y1;

        const d = Math.sqrt((dx * dx) + (dy * dy));

        const nearestLocationObj = {
            "name":distnation_Name,
            "lat": distnation_lat,
            "lng": distnation_lng,
            "distance": d
        };
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
        const shortestLocation = nearestLocation.find(obj => obj.distance === min);

        this.updateDistance(shortestLocation,targetMarker);

        this.setState({           
            selectedTS:{ lat:targetMarker.location.lat,lng:targetMarker.location.lng,name:targetMarker.name },
            selectedSupplier:{ lat:shortestLocation.lat,lng:shortestLocation.lng,name:shortestLocation.name }
        });
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
               
            });   
    };

    getrootMapServices=(originPath,destinationPath)=>{
        debugger;
        const DirectionsService = new google.maps.DirectionsService();
        DirectionsService.route({
            origin:{ lat:originPath.lat,lng:originPath.lng },
            destination: { lat:destinationPath.lat,lng:destinationPath.lng },
            travelMode: google.maps.TravelMode.DRIVING,
            optimizeWaypoints: true,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                    directions: result,
                    distanceInfo:result.routes[0].legs[0]
                });
            } else {
                console.error(`error fetching directions ${ result }`);
            }
        });
    };

    componentDidMount(){
        this.setState({ selectedTS:{ lat:32.806671,lng: -86.791130,name:'' },
                       selectedSupplier:{ lat:32.806671,lng: -86.791130,name:'' }, });
    }

    render() {
        debugger;
        console.log( this.state.markers_1 );
        return (
            <DirectionsServices
                googleMapURL= "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDZSVnT-Oaft2Stx72a_OG0DN8_Z-9-d48"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `800px` }} />}
                mapElement= {<div style={{ height: `100%` }} />}
                center= {{ lat: 32.806671, lng:-86.791130 }}
                directions={this.state.directions}
                distanceInfo={this.state.distanceInfo}
                markers={this.state.markers_1}
                onMarkerClick={this.handleMarkerClick}
                onMarkerClose={this.handleMarkerClose}
                handledropDownClick={this.handledropDownClick}
                selectedTS={this.state.selectedTS.name}
                selectedSupplier={this.state.selectedSupplier.name}

            />
        );
    }
}

/* global google */
import {
    default as React,
    Component,
} from "react";
import { compose } from 'recompose';
//import  CustomInput  from '../../baseComponents/inputControlls';
//import { RemoveDuplicateArray }  from '../../../utils/commonUtils';
import _ from 'lodash';

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
    return (
        <GoogleMap
            defaultCenter={props.center}
            zoom={6}
        >
            {/* <div className="row" id="floating-panel">             
                <CustomInput
                    hasLabel={true}
                    name="chCompanyCode"
                    id="chCompanyCodeId"
                    colSize='s6 pl-0'
                    label={'Technical Specialist'}
                    optionsList={props.listofTechnicalSpec}
                    labelClass="customLabel"
                    optionName='firstName'
                    optionValue="firstName"
                    disabled={false}
                    type='select'
                    inputClass="customInputs"
                    defaultValue={props.selectedTS}
                    onSelectChange={props.handledropDownChange} />                
                 <CustomInput
                    hasLabel={true}
                    name="supplier"
                    id="supplierId"
                    colSize='s6'
                    label={'Suppliers'}
                    optionsList={props.listofSupplier}
                    labelClass="customLabel"
                    optionName='supplierName'
                    optionValue="supplierName"
                    disabled={false}
                    type='select'
                    inputClass="customInputs"
                    defaultValue={props.selectedSupplier}
                    onSelectChange={props.handledropDownChange} />             
            </div> */}
             <div id="floating-panel">
                <b>Technical Specialist: </b>

                <select id="start" name="start" disabled={false} onChange={props.handledropDownChange} value={props.selectedTS}>
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
                <select id="end" name="end" onChange={props.handledropDownChange}  value={props.selectedSupplier}>
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
        markers:[],
        listofTechnicalSpec:[],
        listofSupplier:[],
        center:{lat:'',lng:''} 
    };
  }
    
    handledropDownChange=(e) =>{ 
        debugger; 
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

        //this.updateDistance(shortestLocation,targetMarker);

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
        const techSpecData =[];
        const supplierData =[];
        const markersData=[];
        let customObj={};
        let supplierObj={};
        let o;
        this.props.mapData.map((x,i) => { 
                if(x.supplierInfo.length > 0){
                    x.supplierInfo.map((obj,index)=>{                                            
                        supplierObj={
                            "supplierName":obj.supplierName,
                            "supplierType":obj.supplierType,
                            "supplierGeoLocation":{
                                "longitude":x.supplierGeoLocation.longitude,
                                "latitude":x.supplierGeoLocation.latitude
                             }                            
                        };
                        supplierData.push(supplierObj);
                    });
                }            
                if(x.resourceSearchTechspecInfos.length > 0){                 
                    x.resourceSearchTechspecInfos.map((obj,index)=>{
                        techSpecData.push(obj);
                    });
                }  
         });
         //const techSpecdata = RemoveDuplicateArray(techSpecData,'epin');
         //const supplierdata = RemoveDuplicateArray(supplierData,'supplierName');
         const techSpecdata = _.uniqBy(techSpecData,'epin');
         const supplierdata = _.uniqBy(supplierData,'supplierName');

         const finalData = [ ...techSpecdata,  ...supplierdata ];  

         finalData.map((x,i)=>{
               if(x.supplierType === 'Supplier' || x.supplierType === 'SubSupplier' ){
                customObj={
                    "scheduleStatus": null,
                    "showInfo": false,
                    "name": x.supplierName,
                    "distanceFromVenderInKm":null,
                    "distanceFromVenderInMile":null,
                    "location": {
                        "lat": x.supplierGeoLocation.latitude,
                        "lng": x.supplierGeoLocation.longitude,
                    }
                };
            }else{
                 customObj={
                    "scheduleStatus": x.scheduleStatus,
                    "showInfo": false,
                    "name": x.firstName +' '+ x.lastName,
                    "distanceFromVenderInKm":x.distanceFromVenderInKm,
                    "distanceFromVenderInMile":x.distanceFromVenderInMile,
                    "location": {
                        "lat": x.techSpecGeoLocation.latitude,
                        "lng": x.techSpecGeoLocation.longitude,
                    }
                };
             }
             markersData.push(customObj);
             
         });        

        this.setState({ selectedTS:{ lat:markersData[0].location.lat, lng:markersData[0].location.lng, name:'' },
                       //selectedSupplier:{ lat:32.806671,lng: -86.791130,name:'' }, 
                       listofTechnicalSpec:techSpecdata,
                       listofSupplier:supplierdata,
                       markers:markersData,
                       center:{lat: markersData[0].location.lat, lng:markersData[0].location.lng }
                    });
    }

    render() {
        
        return (
            <DirectionsServices
                googleMapURL= "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDZSVnT-Oaft2Stx72a_OG0DN8_Z-9-d48"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `850px` }} />}
                mapElement= {<div style={{ height: `100%` }} />}
                center= {this.state.center}
                directions={this.state.directions}
                distanceInfo={this.state.distanceInfo}
                markers={this.state.markers}
                onMarkerClick={this.handleMarkerClick}
                onMarkerClose={this.handleMarkerClose}
                handledropDownChange={this.handledropDownChange}
                selectedTS={this.state.selectedTS.name}
                selectedSupplier={this.state.selectedSupplier.name}
                listofTechnicalSpec={this.state.listofTechnicalSpec}
                listofSupplier={this.state.listofSupplier}

            />
        );
    }
}

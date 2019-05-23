import React from 'react';
import logo from './logo.svg';
import './App.css';
import './mapStyle.css';
//import DirectionsExample from './customMap';
import DirectionsGoogleMap from './customMapLive';
export const techSpecListresult=[
  {
    "location": "Aberdeen, Aberdeen, United Kingdom",
    "supplierGeoLocation": {
      "longitude": -2.094278,
      "latitude": 57.149717
    },
    "resourceSearchTechspecInfos": [
      {
        "employmentTypePrecedence": 1,
        "employmentType": "FT Employee",
        "scheduleStatusPrecedence": 1,
        "scheduleStatus": "Available",
        "distanceFromVenderInKm": "1 m",
        "distanceFromVenderInMile": 0,
        "isSupplier": false,
        "mobileNumber": "123654789",
        "email": "test@test.com",
        "subDivision": "AIM",
        "googleAddress": "Aberdeen, Aberdeen, United Kingdom",
        "epin": 43957,
        "lastName": "test",
        "firstName": "netserv",
        "profileStatus": "Active",
        "city": "Aberdeen",
        "state": "Aberdeen",
        "country": "United Kingdom",
        "zip": null,
        "techSpecGeoLocation": {
          "longitude": 0.121817,
          "latitude":52.205338
        }
      },
      {
        "employmentTypePrecedence": 1,
        "employmentType": "FT Employee",
        "scheduleStatusPrecedence": 1,
        "scheduleStatus": "Available",
        "distanceFromVenderInKm": "1 m",
        "distanceFromVenderInMile": 0,
        "isSupplier": false,
        "mobileNumber": "4455784858",
        "email": "sandhya@gmail.com",
        "subDivision": "Audit",
        "googleAddress": "Aberdeen, Aberdeen, United Kingdom",
        "epin": 45039,
        "lastName": "v",
        "firstName": "sandhya",
        "profileStatus": "Active",
        "city": "Aberdeen",
        "state": "Aberdeen",
        "country": "United Kingdom",
        "zip": null,
        "techSpecGeoLocation": {
          "longitude": -0.871817,
          "latitude":52.205338
        }
      }
    ],
    "supplierInfo": [
      {
        "supplierType": "Supplier",
        "supplierName": "testSupplier"
      }
    ]
  },
  {
    "location": "Bath",
    "supplierGeoLocation": {
      "longitude": -2.3590167,
      "latitude": 51.3810641
    },
    "resourceSearchTechspecInfos": [
      {
        "employmentTypePrecedence": 1,
        "employmentType": "FT Employee",
        "scheduleStatusPrecedence": 1,
        "scheduleStatus": "Available",
        "distanceFromVenderInKm": "831 ",
        "distanceFromVenderInMile": 517,
        "isSupplier": false,
        "mobileNumber": "123654789",
        "email": "test@test.com",
        "subDivision": "AIM",
        "googleAddress": "Aberdeen, Aberdeen, United Kingdom",
        "epin": 43957,
        "lastName": "test",
        "firstName": "netserv",
        "profileStatus": "Active",
        "city": "Aberdeen",
        "state": "Aberdeen",
        "country": "United Kingdom",
        "zip": null,
        "techSpecGeoLocation": {
          "longitude": 0.121817,
          "latitude":52.205338
        }
      },
      {
        "employmentTypePrecedence": 1,
        "employmentType": "FT Employee",
        "scheduleStatusPrecedence": 1,
        "scheduleStatus": "Available",
        "distanceFromVenderInKm": "831 ",
        "distanceFromVenderInMile": 517,
        "isSupplier": false,
        "mobileNumber": "4455784858",
        "email": "sandhya@gmail.com",
        "subDivision": "Audit",
        "googleAddress": "Aberdeen, Aberdeen, United Kingdom",
        "epin": 45039,
        "lastName": "v",
        "firstName": "sandhya",
        "profileStatus": "Active",
        "city": "Aberdeen",
        "state": "Aberdeen",
        "country": "United Kingdom",
        "zip": null,
        "techSpecGeoLocation": {
          "longitude": 0.121817,
          "latitude":52.205338
        }
      }
    ],
    "supplierInfo": [
      {
        "supplierType": "SubSupplier",
        "supplierName": "test7"
      }
    ]
  },
  {
    "location": "United Kingdom",
    "supplierGeoLocation": {
      "longitude": -3.435973,
      "latitude": 55.378051
    },
    "resourceSearchTechspecInfos": [
      {
        "employmentTypePrecedence": 1,
        "employmentType": "FT Employee",
        "scheduleStatusPrecedence": 1,
        "scheduleStatus": "Available",
        "distanceFromVenderInKm": "315 ",
        "distanceFromVenderInMile": 196,
        "isSupplier": false,
        "mobileNumber": "123654789",
        "email": "test@test.com",
        "subDivision": "AIM",
        "googleAddress": "Aberdeen, Aberdeen, United Kingdom",
        "epin": 43957,
        "lastName": "test",
        "firstName": "netserv",
        "profileStatus": "Active",
        "city": "Aberdeen",
        "state": "Aberdeen",
        "country": "United Kingdom",
        "zip": null,
        "techSpecGeoLocation": {
          "longitude": 0.121817,
          "latitude":52.205338
        }
      },
      {
        "employmentTypePrecedence": 1,
        "employmentType": "FT Employee",
        "scheduleStatusPrecedence": 1,
        "scheduleStatus": "Available",
        "distanceFromVenderInKm": "315 ",
        "distanceFromVenderInMile": 196,
        "isSupplier": false,
        "mobileNumber": "4455784858",
        "email": "sandhya@gmail.com",
        "subDivision": "Audit",
        "googleAddress": "Aberdeen, Aberdeen, United Kingdom",
        "epin": 45039,
        "lastName": "v",
        "firstName": "sandhya",
        "profileStatus": "Active",
        "city": "Aberdeen",
        "state": "Aberdeen",
        "country": "United Kingdom",
        "zip": null,
        "techSpecGeoLocation": {
          "longitude": 0.121817,
          "latitude":52.205338
        }
      }
    ],
    "supplierInfo": [
      {
        "supplierType": "SubSupplier",
        "supplierName": "test6"
      }
    ]
  }
]
;

function App() {
  return (
    <div className="App">
     <DirectionsGoogleMap mapData={techSpecListresult}/>
    </div>
  );
}

export default App;

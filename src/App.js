import React from 'react';
import logo from './logo.svg';
import './App.css';
import './mapStyle.css';
//import DirectionsExample from './customMap';
import DirectionswithDistanceExample from './customMapWithDistance';
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
          "longitude": -2.094278,
          "latitude": 57.149717
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
          "longitude": -2.094278,
          "latitude": 57.149717
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
          "longitude": -2.094278,
          "latitude": 57.149717
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
          "longitude": -2.094278,
          "latitude": 57.149717
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
          "longitude": -2.094278,
          "latitude": 57.149717
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
          "longitude": -2.094278,
          "latitude": 57.149717
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
export const quickSearchResult=[{
  "location": "uk",
  "supplierType": "Supplier",
  "resourceSearchTechspecInfos": [
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": "07825 318 084",
      "email": "james.rayner@intertek.com",
      "subDivision": "Vendor Inspection",
      "epin": 143,
      "lastName": "Rayner",
      "firstName": "James",
      "profileStatus": "Active",
      "location": {
        "lat":32.806671,
        "lng":-86.791130,
      },
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": "1234567890",
      "email": "muthu@igo.eu",
      "subDivision": "Vendor Inspection",
      "epin": 1298,
      "lastName": "Temple",
      "firstName": "Colin",
      "profileStatus": "Pre-qualification",
      "location": {
        "lat": 61.370716,
        "lng": -152.404419,
      }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": "07813 103035",
      "email": "john.x.waddell@intertek.com",
      "subDivision": "Vendor Inspection",
      "epin": 1528,
      "lastName": "Waddell",
      "firstName": "John",
      "profileStatus": "Active",
      "location": {
        "lat": 33.729759,
        "lng": -111.431221,
      }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": "07425 624 403",
      "email": "william.mcartney@intertek.com",
      "subDivision": "Vendor Inspection",
      "epin": 12597,
      "lastName": "McArtney",
      "firstName": "William",
      "profileStatus": "Active",
      "location": {
        "lat": 33.729759,
        "lng": -111.431221,
      }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": "44 (0)7776 164 425",
      "email": "james.hosie@intertek.com",
      "subDivision": "Vendor Inspection",
      "epin": 20794,
      "lastName": "Hosie (Jnr)",
      "firstName": "James",
      "profileStatus": "Active",
      "location": {
        "lat": 34.969704,
        "lng": -92.373123,
        }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": "07483 178 029",
      "email": "william.bisset@intertek.com",
      "subDivision": "Vendor Inspection",
      "epin": 35624,
      "lastName": "Bisset",
      "firstName": "William",
      "profileStatus": "Active",
      "location": {
        "lat": 36.116203,
        "lng": -119.681564,
      }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": null,
      "email": null,
      "subDivision": "Audit",
      "epin": 43883,
      "lastName": "S",
      "firstName": "Siva Priya",
      "profileStatus": "Pending TMR",
      "location": {
        "lat": 39.059811,
        "lng": -105.311104,
    }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": null,
      "email": null,
      "subDivision": "Pipe",
      "epin": 43887,
      "lastName": "wefff",
      "firstName": "tsete",
      "profileStatus": "Pre-qualification",
      "location": {
        "lat": 41.597782,
        "lng": -72.755371,
    }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": null,
      "email": null,
      "subDivision": "Audit",
      "epin": 43890,
      "lastName": "VP",
      "firstName": "Thiru",
      "profileStatus": "Pending TMR",
      "location": {
        "lat": 39.318523,
        "lng": -75.507141,
    }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": "044",
      "email": "m@m.com",
      "subDivision": "Vendor Inspection",
      "epin": 43954,
      "lastName": "N",
      "firstName": "TestProfile",
      "profileStatus": "Active",
      "location": {
        "lat": 38.897438,
        "lng": -77.026817,
    }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": "088",
      "email": "w@w.com",
      "subDivision": "Audit",
      "epin": 43955,
      "lastName": "T",
      "firstName": "NewT",
      "profileStatus": "Active",
      "location": {
        "lat": 27.766279,
        "lng": -81.686783,
    }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": "7485965896",
      "email": "test@gmail.com",
      "subDivision": "Pipe",
      "epin": 43956,
      "lastName": "s",
      "firstName": "shruthi",
      "profileStatus": "Active",
      "location": {
        "lat": 33.040619,
        "lng": -83.643074,
    }
    },
    {
      "employmentTypePrecedence": 1,
      "employmentType": "FT Employee",
      "scheduleStatusPrecedence": 0,
      "scheduleStatus": "Available",
      "distanceFromVenderInKM": null,
      "distanceFromVenderInMile": null,
      "isSupplier": false,
      "mobileNumber": "123654789",
      "email": "test@test.com",
      "subDivision": "AIM",
      "epin": 43957,
      "lastName": "test",
      "firstName": "netserv",
      "profileStatus": "Active",
      "location": {
        "lat": 40.349457,
        "lng": -88.986137,
    }
    }    
  ]
}]
function App() {
  return (
    <div className="App">
     <DirectionswithDistanceExample quickSearchResult={quickSearchResult}/>
    </div>
  );
}

export default App;

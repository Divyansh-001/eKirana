// import React, { useState } from 'react';

// const LocationComponent = () => {
//     const [location, setLocation] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');

//     const fetchLocation = () => {
//         setIsLoading(true);
//         setError('');

//         navigator.geolocation.getCurrentPosition(
//             async (position) => {
//                 const latitude = position.coords.latitude;
//                 const longitude = position.coords.longitude;
//                 setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
//                 setIsLoading(false);

//                 try {
//                     const response = await fetch('https://api.example.com/submitLocation', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify({
//                             latitude: latitude,
//                             longitude: longitude,
//                         }),
//                     });

//                     if (!response.ok) {
//                         throw new Error('Error sending location data');
//                     }
//                 } catch (error) {
//                     setError('Error sending location data');
//                 }
//             },
//             (error) => {
//                 setError('Error fetching location');
//                 setIsLoading(false);
//             }
//         );
//     };

//     return (
//         <div>
//             <h1>Location Component</h1>
//             <button onClick={fetchLocation} disabled={isLoading}>
//                 {isLoading ? 'Fetching...' : 'Fetch Location and Send'}
//             </button>
//             {location && <p>Location: {location}</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// export default LocationComponent;

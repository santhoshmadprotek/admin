// import React, { useState, useEffect } from 'react';

// function ProfileDetailsPage() {
//   // const [profileData, setProfileData] = useState(null);

//   // useEffect(() => {
//   //   // Fetch profile data from backend API
//   //   fetch('/api/profile')
//   //     .then(response => response.json())
//   //     .then(data => setProfileData(data))
//   //     .catch(error => console.error('Error fetching profile data:', error));
//   // }, []);

//   // if (!profileData) {
//   //   return null;
//   // }

//   return (
//     <div>
//       <h1>Profile Details</h1>
//       <div>
//         {/* <p>Name: {profileData.name}</p>
//         <p>Email: {profileData.email}</p>
//         <p>Phone: {profileData.phone}</p> */}
//         {/* Add more profile details here */}
//       </div>
//     </div>
//   );
// }

// export default ProfileDetailsPage;



import React from 'react';
import ProfileDetailView from './profileDetailView';

function App() {
  // Sample profile data
  const profile = {
    name: 'santos',
    email: 'santos@example.com',
    location: 'bangalore',
    age: 30,
    interests: ['Reading', 'Traveling', 'Cooking'],
    about: 'about the'
  };

  return (
    <div>
      <ProfileDetailView profile={profile} />
    </div>
  );
}

export default App;


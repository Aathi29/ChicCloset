// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ImageDisplay = ({ imageName }) => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await axios.get(`/api/images/${imageName}`);
//         setImageUrl(response.data.publicUrl);
//       } catch (error) {
//         console.error('Error fetching image:', error);
//       }
//     };

//     fetchImage();
//   }, [imageName]);

//   return (
//     <div>
//       {imageUrl ? <img src={imageUrl} alt={imageName} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default ImageDisplay;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = ({ imageName }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`/api/images/${imageName}`);
        setImageUrl(response.data.publicUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [imageName]);

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt={imageName} /> : <p>Loading...</p>}
    </div>
  );
};

export default ImageDisplay;


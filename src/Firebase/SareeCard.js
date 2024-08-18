// import React, { useEffect, useState } from 'react';

// const SareeCard = () => {
//   const [sareeImages, setSareeImages] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/sarees')
//       .then(response => response.json())
      
//       .then(data =>  {
//         console.log(data);  // Log the URLs
//         setSareeImages(data);
//       })  
//       .catch(error => console.error('Error fetching saree images:', error));
//   }, []);

//   return (
//     <div>
//      {sareeImages.map((url, index) => (
//       <img key={index} src={url} alt={`Saree ${index + 1}`} />
//     ))}
//     </div>
//   );
// };

// export default SareeCard;

// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick'; // You can use a library like react-slick for the slider
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SareeCard = () => {
//   const [sareeData, setSareeData] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/banarasisilk'); // Adjust endpoint as needed
//         console.log('API response:', response.data);
//         setSareeData(response.data || []);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="image-gallery">
//       {Array.isArray(sareeData) && sareeData.length > 0 ? (
//         sareeData.map((saree, index) => (
//           <div key={index} className="saree-group">
//             <h3>{saree.sareeName}</h3>
//             <div className="image-container">
//               {saree.images.map((url, imgIndex) => (
//                 <img key={imgIndex} src={url} alt={`Saree ${index}-${imgIndex}`} />
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No images available</p>
//       )}
//     </div>
//   );
// };

// export default SareeCard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SareeCard = () => {
  const [sareeData, setSareeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/banarasisilk');
        console.log('API response:', response.data);
        setSareeData(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Paginate the saree data
  const indexOfLastSaree = currentPage * itemsPerPage;
  const indexOfFirstSaree = indexOfLastSaree - itemsPerPage;
  const currentSareeData = sareeData.slice(indexOfFirstSaree, indexOfLastSaree);

  // Slider settings for displaying 3 images at a time
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 image at a time on smaller screens
        },
      },
    ],
  };

  return (
    <div className="image-gallery">
      {Array.isArray(currentSareeData) && currentSareeData.length > 0 ? (
        currentSareeData.map((saree, index) => (
          <div key={index} className="saree-group">
            <h3>{saree.sareeName}</h3>
            <Slider {...sliderSettings}>
              {saree.images.map((url, imgIndex) => (
                <div key={imgIndex} className="image-container">
                  <img src={url} alt={`Saree ${index}-${imgIndex}`} />
                </div>
              ))}
            </Slider>
          </div>
        ))
      ) : (
        <p>No images available</p>
      )}
      
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(prev => (prev * itemsPerPage < sareeData.length ? prev + 1 : prev))}
          disabled={currentPage * itemsPerPage >= sareeData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SareeCard;







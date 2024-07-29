// import React, { useState, useEffect } from 'react';
// import './App.css'; // Import CSS file

// const ProductDetails = ({ productCode }) => {
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3001/product/${productCode}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setProduct(data);
//             } catch (error) {
//                 console.error('Error fetching product:', error);
//             }
//         };

//         fetchProduct();
//     }, [productCode]);

//     return (
//         <div className="product-details">
//             {product ? (
//                 <div>
//                     <h1 className="product-name">{product.product_name}</h1>
//                     <p className="product-description">{product.product_description}</p>
//                     <div className="product-images">
//                         {product.image1 && <img className="product-image" src={`data:image/jpeg;base64,${product.image1}`} alt="Image 1" />}
//                         {product.image2 && <img className="product-image" src={`data:image/jpeg;base64,${product.image2}`} alt="Image 2" />}
//                         {product.image3 && <img className="product-image" src={`data:image/jpeg;base64,${product.image3}`} alt="Image 3" />}
//                         {product.image4 && <img className="product-image" src={`data:image/jpeg;base64,${product.image4}`} alt="Image 4" />}
//                     </div>
//                 </div>
//             ) : (
//                 <p className="loading">Loading...</p>
//             )}
//         </div>
//     );
// };

// export default ProductDetails;

// SareeDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Product ({ sareeId }) {
    const [saree, setSaree] = useState(null);

    useEffect(() => {
        const fetchSaree = async () => {
            try {
                const response = await axios.get(`/api/sarees/${sareeId}`);
                setSaree(response.data);
            } catch (error) {
                console.error('Error fetching saree:', error);
            }
        };

        fetchSaree();
    }, [sareeId]);

    return (
        <div>
            {saree && (
                <div>
                    <h2>{saree.name}</h2>
                    <p>{saree.description}</p>
                    {saree.image && <img src={`data:image/jpeg;base64,${Buffer.from(saree.image.data).toString('base64')}`} alt="Saree" />}
                </div>
            )}
        </div>
    );
};



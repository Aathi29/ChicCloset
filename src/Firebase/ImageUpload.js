import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      console.log("File selected: ", e.target.files[0]);
      setImage(e.target.files[0]);
    }
  };
  

  const handleUpload = () => {
    if (!image) {
      console.log("No image selected.");
      return;
    }
  
    console.log("Starting upload for: ", image.name);
  
    const storageRef = ref(storage, `sarees/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
  
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(`Upload is ${progress}% done`);
        setProgress(progress);
      },
      (error) => {
        console.error("Upload failed: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          console.log("File available at: ", downloadURL);
        });
      }
    );
  };
  

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <progress value={progress} max="100" />
      {url && <img src={url} alt="Uploaded" style={{ width: '100px' }} />}
    </div>
  );
};

export default ImageUpload;

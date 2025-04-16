import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import enhancedImageAPI from "../utils/enhancedImageAPI"; // Import your API function

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      // call the API to enhance the image
      // code which may produce error

      const enhancedURL=await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL.image);
      setLoading(false);
    } catch (error) {
      // code to handle the error and show message
      console.log(error);
      alert("Error: " + error.message);
      
    }
  };

  //console.log("Hi",enhancedImage);
  

  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;

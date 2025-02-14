import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

// Initialize Cloudinary with your cloud name
const cld = new Cloudinary({
  cloud: {
    cloudName: "your-cloud-name", // Replace with your Cloudinary cloud name
  },
});

const MyCloudinaryImage = () => {
  const myImage = cld.image("sample"); // 'sample' is the public ID of the image

  return <AdvancedImage cldImg={myImage} />;
};

export default MyCloudinaryImage;

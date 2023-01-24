import React from "react";
import { getImageUrl } from "../../api/imageUpload";
import BecomeAHostForm from "../../Components/Form/BecomeAHostForm";

const BecomeAHost = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];

    // image host url
    getImageUrl(image).then((data) => {
      const hostData = {
        location: location,
        image: data,
      };
      console.log(hostData);
    });
  };
  return <BecomeAHostForm handleSubmit={handleSubmit} />;
};

export default BecomeAHost;

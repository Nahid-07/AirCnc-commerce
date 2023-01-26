import React from "react";
import { useContext } from "react";
import { getImageUrl } from "../../api/imageUpload";
import BecomeAHostForm from "../../Components/Form/BecomeAHostForm";
import { AuthContext } from "../../contexts/AuthProvider";

const BecomeAHost = () => {
  const {user} = useContext(AuthContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];

    // image host url
    getImageUrl(image).then((data) => {
      const hostData = {
        location: location,
        documentImg: data,
        role: "requested",
        email: user?.email
      };
      console.log(hostData);
    });
  };
  return <BecomeAHostForm handleSubmit={handleSubmit} />;
};

export default BecomeAHost;

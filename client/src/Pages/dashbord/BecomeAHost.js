import React from 'react';
import BecomeAHostForm from '../../Components/Form/BecomeAHostForm';

const BecomeAHost = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const location = event.target.location.value;
        const image = event.target.image.file[0];
        const hostData = {
            location: location,
            image: image
        }
    }
    return (
        <BecomeAHostForm handleSubmit={handleSubmit} />
    );
};

export default BecomeAHost;
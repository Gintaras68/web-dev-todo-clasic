import React from 'react';
import { useParams } from 'react-router-dom';

function Service({ services }) {
  const { serviceId } = useParams();
  const serviceData = services.find((object) => object.serviceId === serviceId);

  if (!serviceData) {
    return (
      <div className="service">
        <h1>No such service ...</h1>
      </div>
    );
  }

  return (
    <div className="service">
      <h1>{serviceData.title}</h1>
      <p><b>Coast:</b> {serviceData.price} Eur</p>
      <p><b>Description:</b> {serviceData.descr}</p>
    </div>
  );
}

export default Service;

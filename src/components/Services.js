import React from 'react';

const Services = ({ services, addToCartPrice }) => {
  return (
    <div className='serviceWrapp'>
      <h2>Servicios</h2>
      {services.map((service, index) => {
        return (
          <div key={index} className='service'>
            <p>{service.name}</p>
            <p>${service.price}</p>
            <button className='btn' onClick={() => addToCartPrice(service.id)}>
              +
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Services;

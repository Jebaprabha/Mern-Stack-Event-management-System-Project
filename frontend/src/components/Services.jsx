import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/bdayyyy.jpg",
      title: "Birthday Celebration",
    },
    {
      id: 2,
      url: "/farewell.jpg",
      title: "Farewall Celebration",
    },
    {
      id: 3,
      url: "/holiday.jpg",
      title: "Holiday planning",
    },
    {
      id: 4,
      url: "/product.jpg",
      title: "Product Launching",
    },
    {
      id: 5,
      url: "/office event.jpg",
      title: "Office Awards",
    },
    {
      id: 6,
      url: "/food night.jpg",
      title: "FoodNight",
    },
  ];
  return (
    <>
    <div className="services container">
        <h2 align="center">OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default Services;
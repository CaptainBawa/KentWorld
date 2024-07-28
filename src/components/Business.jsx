import { useState } from 'react';
import businessData from './BusinessData';

const Business = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="businesses-container">
      {businessData.map((business) => (
        <div className="businesses-sub-container" key={business.id}>
          <img src={business.image} alt={business.business_name} />
          <div className="content">
            <span>{business.business_name}</span>
            <span>
              <img id="loc" src="https://img.icons8.com/ultraviolet/40/marker.png" alt="marker" />
              {business.location}
            </span>
            <p>
              {expanded[business.id]
                ? business.business_description
                : `${business.business_description.slice(0, 100)}...`}
              <button onClick={() => handleToggle(business.id)}>
                {expanded[business.id] ? 'See less' : 'See more'}
              </button>
            </p>
            <a href={`tel:${business.contact}`}>Call us</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Business;

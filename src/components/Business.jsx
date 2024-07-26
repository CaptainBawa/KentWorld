import businessData from './BusinessData';

const Business = () => {
  const businesses = businessData;

  return (
    <section className="businesses-container">
      {businesses.map((business) => (
        <div className="businesses-sub-container" key={business.id}>
          <img src={business.image} alt={business.business_name} />
          <div className="content">
            <span>
              {business.business_name}
            </span>
            <span>
              <img id="loc" src="https://img.icons8.com/ultraviolet/40/marker.png" alt="marker" />
              {business.location}
            </span>
            <p>{business.business_description}</p>
            <a href={`tel:${business.contact}`}>Call us</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Business;

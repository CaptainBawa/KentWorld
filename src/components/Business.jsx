import { useState } from 'react';
import businessData from './BusinessData';

const Business = () => {
  const [expanded, setExpanded] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleToggle = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleImageClick = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage('');
  };

  return (
    <section className="businesses-container">
      {businessData.map((business) => (
        <div className="businesses-sub-container" key={business.id}>
          <img
            src={business.image}
            alt={business.business_name}
            onClick={() => handleImageClick(business.image)}
          />
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

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Full Size" />
        </div>
      )}
    </section>
  );
};

export default Business;

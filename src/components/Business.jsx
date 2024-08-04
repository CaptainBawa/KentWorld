import { useState } from 'react';
import { Link } from 'react-router-dom';
import businessData from './BusinessData';

const Business = () => {
  const [expanded, setExpanded] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const uniqueCategories = ['All', ...new Set(businessData.map(business => business.category))];

  const filteredBusinesses = selectedCategory === 'All'
    ? businessData
    : businessData.filter(business => business.category === selectedCategory);

    return (
    <section className="main-container">
      <h2>Select category</h2>
      <div className="category-buttons">
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <h2>All categories</h2>
    <div className="businesses-container">
      {filteredBusinesses.map((business) => (
        <div className="businesses-sub-container" key={business.id}>
          <img
            src={business.images[0]}
            alt={business.business_name}
            onClick={() => handleImageClick(business.images[0])}
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
            <div className="cont-dels">
              <a href={`tel:${business.contact}`}>Call us</a>
              <Link to={`/business/${business.contact}`}>Find more</Link>
            </div>
          </div>
        </div>
      ))}

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Full Size" />
        </div>
      )}
    </div>
    </section>
  );
};

export default Business;

import business from '../assets/business.png';

const Hero = () => (
  <section className="hero-container">
    <div>
      <p>
        We empower entrepreneurs with a dynamic platform
        to showcase their businesses, connect with customers,
        and drive growth through meaningful engagement and support.
      </p>
      <img src={business} alt={business} />
    </div>
  </section>
);

export default Hero;

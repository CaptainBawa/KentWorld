import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import businessData from './BusinessData';

const BusinessDetails = () => {
    const { contact } = useParams();
    const business = businessData.find(b => b.contact === contact);

    if (!business) {
        return <div>Business not found</div>;
    }

    return (
        <div className="details-container">
            <Link className="back" to="/"><img src="https://img.icons8.com/flat-round/64/back--v1.png" alt="back--v1"/></Link>
            <Carousel showThumbs={false} showArrows infiniteLoop autoPlay interval={5000}>
                {business.images.map((image) => (
                    <div key={business.id}>
                        <img src={image} alt={`${business.business_name}`} />
                    </div>
                ))}
            </Carousel>
            <h2>{business.business_name}</h2>
            <p>{business.business_description}</p>
            <a href={`tel:${business.contact}`}>Call us</a>
        </div>
    );
};

export default BusinessDetails;

import Business from './Business';
import NavBar from './NavBar';
import Hero from './Hero';
import AboutAddBiz from './AboutAddBuz';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => (
  <main>
    <div className="bg-hero-container">
      <NavBar />
      <Hero />
    </div>
    <Business />
    <AboutAddBiz />
    <div className="for-space">
      <Contact />
    </div>
    <Footer />
  </main>
);

export default LandingPage;

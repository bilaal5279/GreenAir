import MenuItems from './components/MenuItems'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <NavBar />
      <MenuItems />
    <Hero/>
    <WhyUs/>
    <Testimonials/>
    <ContactSection/>
    </>
  );
}

export default App

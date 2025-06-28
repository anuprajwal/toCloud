import DoctorsBenefits from './components/DoctorsBenefits';
import Footer from './components/Footer';
import ForPatients from './components/ForPatients';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TeamListCard from './components/TeamlistCard';
import About from './pages/About';
import Features from './pages/Features';
import Testimonials from './pages/Testimonials';

const App = () => {
  return (
    <div className='main-div'>
      <Navbar />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="patients">
          <ForPatients />
        </section>

         <section id="doctors">
          <DoctorsBenefits />
        </section>

        <section id="features">
          <Features />
        </section>

        {/* <section id="testimonials">
          <Testimonials />
        </section> */}

        <section id="about">
          <About />
        </section>

        <section id="team">
          <TeamListCard />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

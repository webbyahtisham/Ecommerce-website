import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NewArrival from '../Components/NewArrival';
import TopSelling from '../Components/TopSelling';
import Subscribe from '../Components/Subscribe';
import Button from '../Components/Button';
import { NavLink } from 'react-router-dom';

// Register ScrollTrigger once (outside component)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomePage = () => {
  const comp = useRef(); // Create a ref for the component root

  useLayoutEffect(() => {
    // Create a GSAP context for all animations
    const ctx = gsap.context(() => {
      // Set initial styles to prevent flash of unstyled content
      gsap.set([
        '.hero-1-h1-1',
        '.hero-1-p-1',
        '.hero-1 button',
        '.hero-2 img',
        '.brands-container img',
        '.dress-style-item',
        '.new-arrival-section',
        '.top-selling-section',
        '.dress-style-section'
      ], { 
        opacity: 0,
        y: 20 
      });

      // Hero animations (non-scroll triggered)
      const heroTl = gsap.timeline();
      heroTl
        .to('.hero-1-h1-1', {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        })
        .to('.hero-1-p-1', {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        }, 0.3)
        .to('.hero-1 button', {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }, 0.6)
        .to('.hero-2 img', {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        }, 0.5);

      // Brands animation
      gsap.to('.brands-container img', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: 'power2.out'
      });

      // Scroll-triggered animations
      const setupScrollTriggers = () => {
        // Dress style items
        gsap.to('.dress-style-item', {
          scrollTrigger: {
            trigger: '.dress-style-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        });

        // Sections
        const sections = [
          '.new-arrival-section',
          '.top-selling-section',
          '.dress-style-section'
        ];

        sections.forEach(section => {
          gsap.to(section, {
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            },
            y: 0,
            opacity: 1,
            duration: 1
          });
        });

        
        ScrollTrigger.refresh();
      };

   
      setTimeout(setupScrollTriggers, 0);
    }, comp); 

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <main ref={comp}>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-1">
            <h1 className='hero-1-h1-1'>Find cloths <br /> that matches <br /> your style</h1>
            <p className='hero-1-p-1'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Button name="Shop Now" link="/shop" />
          </div>
          <div className="hero-2">
            <img src="/Images/Hero.png" alt="heroimg" />
          </div>
        </div>
        <section className="brands">
          <div className="brands-container">
            <img src="/Images/versace.png" alt="Versace" />
            <img src="/Images/zara.png" alt="Zara" />
            <img src="/Images/gucci.png" alt="Gucci" />
            <img src="/Images/prada.png" alt="Prada" />
            <img src="/Images/Ck.png" alt="CK" />
          </div>
        </section>
      </section>

      <div className="new-arrival-section">
        <NewArrival h1={"New arrival"} />
      </div>

      <div className="top-selling-section">
        <TopSelling h1={"Top selling"} />
      </div>

      <section className="dress-style-section">
        <div className="dress-style-container1">
          <div className="dress-style-container2">
            <NavLink to="/shop" className="dress-style-item">
              <img src="/Images/image 15.png" alt="Casual" />
              <span>Casual</span>
            </NavLink>
            <NavLink to="/shop" className="dress-style-item">
              <img src="/Images/image 16.png" alt="Formal" />
              <span>Formal</span>
            </NavLink>
            <NavLink to="/shop" className="dress-style-item">
              <img src="/Images/image 17.png" alt="Party" />
              <span>Party</span>
            </NavLink>
            <NavLink to="/shop" className="dress-style-item">
              <img src="/Images/image 18.png" alt="Gym" />
              <span>Gym</span>
            </NavLink>
          </div>
        </div>
      </section>

      <Subscribe />
    </main>
  )
}

export default HomePage;
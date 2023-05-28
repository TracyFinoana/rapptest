import React, { useEffect } from 'react';
import HowItWorkImage from '../Assets/Images/how-it-works-desktop.jpg';
import OurMissionImage from '../Assets/Images/our-mission.jpg';
import LumiDesignForImage from '../Assets/Images/lumi-designed-for.jpg';
import { useTrail , animated} from '@react-spring/web';

const Body = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const HowItWorks = () => {
    return (
      <section className='body-container  hidden'>
        <div className="image-container">
        <img src={HowItWorkImage} alt='How it Works' className="responsive-image"  />
        </div >
        <div className='child-container'>
          <h1>How it works</h1>
         <div className='HowItWorks-child'>
         <h4>Lumi's A B Cs, to better Zzzzs</h4>
            <p>
              <span className='Alphabet'>A.</span> 
              <span className='subtitle'>We coach.</span>
              <span  className='text'>Our Pediatric sleep experts will take you step-by-step to sleep success</span>
            </p>
            <p>
              <span className='Alphabet'>B.</span> 
              <span  className='subtitle'>You log.</span> 
              <span  className='text'>record your baby's sleeps directly within the app</span>
            </p>
            <p>
              <span className='Alphabet'>C.</span> 
              <span  className='subtitle'>We analyze.</span>
              <span  className='text'>Dayly and weekly sleep insight reports measure your baby's progress</span>
            </p>
          <p className='resume'>Zzzzs your baby sleeps</p>
         </div>
         <a href='#' className={`GetStarted-link animate`}>GET STARTED</a>
        </div>
             
      </section>
    );
  };

  const OurMission = () => {
    return ( 
      <section className=' body-container OurMission-container hidden'>
        <div className='child-container'>
            <h1>Our mission</h1>
            <div className='OurMission-child'>
                <p>
                    <span className='subtitle'>We're on mission,  to make it easy for every family to sleep better.</span>
                    <span  className='text'>We apply state-of-art technology to science-based sleep understanding so that we can make 
                      quality, credible sleep support accesible to everyone - because every baby and their family deserve better sleep!
                    </span>
                </p>
            </div>
            <a href='#' className={`GetStarted-link animate`}>UNLOCK BETTER SLEEP</a>
        </div>
        <div className="image-container">
          <img src={OurMissionImage} alt='Our mission'  className="responsive-image"  />
        </div>
      </section>
    );
  };

  const LumiDesignFor = () => {
    return (
      <section className='body-container hidden'>
          <div className="image-container">
            <img src={LumiDesignForImage} alt='Lumi' className="responsive-image"  />
          </div>
          <div className='child-container'>
            <h1>Lumi's is designed for</h1>
            <div  className='LumiDesignFor-child'>
                <p>
                  <span className='subtitle'>Every parents who wants their baby to fall asleep, stay asleep, and wake up hapy in the morning.</span>
                  <span  className='text'>Wether you're strubling with sleep or simply making sure you're doying what's better for your family, we have you covered </span>
                </p>
            </div>
            <a href='#' className={`GetStarted-link animate`}>GET STARTED</a>
          </div>
      </section>
    );
  };
  return (
    <div>
      <HowItWorks />
      <OurMission />
      <LumiDesignFor />
    </div>
  );
};

export default Body;

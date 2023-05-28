import { useSpring, animated } from '@react-spring/web';
import React, { useState, useEffect,useRef } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const Questions = () => {
  const Accordion = ({ question, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [shouldanimate, setshouldanimate] = useState(true);
    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    const accordionRef = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      });

      if (accordionRef.current) {
        observer.observe(accordionRef.current);
      }

      return () => {
        if (accordionRef.current) {
          observer.unobserve(accordionRef.current);
        }
      };
    }, []);
    const spring = useSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
      delay: index * 100,
    });

    return (
      <animated.div className="accordion" style={spring} ref={accordionRef}>
        <a className="accordion-toggle" onClick={handleClick}>
          <p>{question.Q}</p>
          <FiChevronUp
            className={isOpen ? 'arrowOpened' : 'arrowClosed'}
            size={23}
          />
        </a>
        <div className={isOpen ? 'accordion-details-opened' : 'accordion-details-closed'}>
          <p>{question.A}</p>
        </div>
      </animated.div>
    );
  };

  const questionsAndAnswerArray=[{Q:'what is baby sleep trainning?',A:'Lorem ipsum...'}, 
  {Q:'Does Lumi Smart Sleep Coach app works?',A:'Lorem ipsum...'},
  {Q:"I don't have time to track manually, is there an alternative?",A:'Lorem ipsum...'},
  {Q:'Is sleep trainning safe for baby?',A:'Lorem ipsum...'},
  {Q:'Are there multiple sleep trainning methods to choose from?',A:'Lorem ipsum...'},
  {Q:"How long does it take for my baby's sleep to improve?",A:'Lorem ipsum...'},
  {Q:'When can i start my baby to sleep with the Lumi Start sleep Coach?',A:'Lorem ipsum...'},
  {Q:'Can i grant access for other people who cares for my baby?',A:'Lorem ipsum...'},
  {Q:'Is it too late to sleep train my baby?',A:'Lorem ipsum...'},
  {Q:'How long i have access?',A:'Lorem ipsum...'},
  {Q:'Can i cancel my plan?',A:'Lorem ipsum...'}]
  return (
    <div className="Questions-div">
      <h3>Where to answer your questions?</h3>
      {questionsAndAnswerArray.map((question, i) => (
        <Accordion question={question} index={i} key={i} />
      ))}
      <a href="#" className="GetStarted-link" style={{ marginTop: '15px' }}>
        GET STARTED
      </a>
    </div>
  );
};

export default Questions;

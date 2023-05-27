import React , {useState} from 'react';
import Logo from '../Assets/Icons/Logo.svg'
import CartIcon from '../Assets/Icons/Cart-icon.svg'
import { Sling as Hamburger } from "hamburger-react"
import { useSpring , animated} from '@react-spring/web'
import '../../src/App.css';
const Header = () => {


    // Navbar
    const Navbar = () => {
        return (
          <nav>
            
            <img src={Logo} alt='Logo'/>
            <div className='navbar-links'>
                <a href="#" className="nav-link">SMART SLEEP COACH</a>
                <a href="#" className="nav-link">UPGRADE TO PRO</a>
                <a href="#" className="nav-link">SLEEP PLANS</a>
                <a href="#" className="nav-link">REVIEWS</a>
                <a href="#" className="nav-link">FAQs</a>
            </div>
            <a href="#" className="nav-link signin-link">
            SIGN IN or REGISTER <img src={CartIcon} alt="Cart Icon" />
            </a>
          </nav>
        );
      };
      // Humberger
      const Humberger = () => {
        const [toggle1, setToggle1] = useState(false);
        return (
          <div className='container-Hamburger'>
            <div className='hamburger-header'>
          <div className='Hamburger'>
          <Hamburger
                size={30}
                color="#fff"
                rounded
                toggled={toggle1}
                toggle={() => { setToggle1(!toggle1) }}
                duration={0.8}
              />
          </div>
              <div className='ham-logo-container'>
                <img src={Logo} alt='Logo' />
              </div>
            </div>
            <div className={toggle1 ? 'open' : 'closed'}>
              <div className="ham-nav-links">
                <a href="#" className="nav-link" onClick={()=>{setToggle1(false)}}>SMART SLEEP COACH</a>
                <a href="#" className="nav-link"  onClick={()=>{setToggle1(false)}}>UPGRADE TO PRO</a>
                <a href="#" className="nav-link"  onClick={()=>{setToggle1(false)}}>SLEEP PLANS</a>
                <a href="#" className="nav-link"  onClick={()=>{setToggle1(false)}}>REVIEWS</a>
                <a href="#" className="nav-link"  onClick={()=>{setToggle1(false)}}>FAQs</a>
              </div>
              <div className='ham-signin-link'>
                <a href="#" className="nav-link signin-link"  onClick={()=>{setToggle1(false)}}>
                  SIGN IN or REGISTER <img src={CartIcon} alt="Cart Icon" />
                </a>
              </div>
            </div>
          </div>
        );
      }     
    // LandingPage
    const LandingPage =()=>{
      const [showAnimation, setShowAnimation] = React.useState(false);

      React.useEffect(() => {
        setShowAnimation(true);
      }, []);
      
      const h2Spring = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(20px)' },
        delay: 500, // Délai avant le début de l'animation (en millisecondes)
      });
    
      const pSpring = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(20px)' },
        delay: 1000, // Délai avant le début de l'animation (en millisecondes)
      });
      return(
        <section className={`main-landing ${showAnimation ? 'animate' : ''}`}>
          <div className={`landing-container ${showAnimation ? 'animate' : ''}`}>
            <div className='glace'>
            <animated.h2 style={h2Spring} className={showAnimation ? 'animate' : ''}>Your baby can be a super sleeper</animated.h2>
            <animated.p style={pSpring} className={showAnimation ? 'animate' : ''}>Lumi's bases sleep coaching and tranking tools will have your baby sleeping better in just 7 days</animated.p>
            </div>
            <a href='#' className={`GetStarted-link ${showAnimation ? 'animate' : ''}`}>GET STARTED</a>
          </div>
        </section>
      )
    }
  return (
    <header>
        <Navbar/>
        <Humberger/>
        <LandingPage/>
    </header>
  );
}

export default Header;

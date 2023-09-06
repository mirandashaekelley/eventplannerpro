import '../styling/Footer.css'
import location from '../assets/location.png'
import mail from '../assets/mail.png'
import mobile from '../assets/mobile.png'
export default function Footer () {
    return (
    <div className='footer'>
        <div className='footer-column-majority'>
            <div className='footer-title'>Eventplanner Pro</div>
            <div className='footer-subtext'>Welcome to a gateway that provides expert guidence and resources for seamless event planning and execution, offering a world of event exellence.</div>
        
        </div>
        <div className='footer-column'>
            <div className='footer-title'>Stay in Touch</div>
            <div className='footer-subtext'>
                <div className='footer-row'>
                    <img className="footer-img" src={location} alt='white location'></img>
                     7842 West Jordan Ln. Farmington, UT 83293
                </div>
                <div className='footer-row'>
                    <img className="footer-img" src={mail} alt='white location'></img>
                     <a className='links'>info@eventplannerpro.com</a>
                </div>
                <div className='footer-row'>
                    <img className="footer-img" src={mobile} alt='white location'></img>
                     385 923 0239
                </div>
            </div>
        
        </div>
        <div className='footer-column'>
            <div className='footer-title'>Services</div>
            <div className='footer-subtext'>
                <ul className='footerul'>
                    <li>Consultations</li>
                    <li>Management Tools</li>
                    <li>Venue Sourcing</li>
                    <li>Catering</li>
                    <li>Marketing</li>
                    <li>Logistics</li>
                </ul>
            </div>
        </div>
        <div className='footer-column'>
            <div className='footer-title'>Company</div>
            <div className='footer-subtext'>
                <ul className='footerul'>
                    <li>Services</li>
                    <li>Features</li>
                    <li>Our Team</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        
        </div>
    </div>
    );
    
}
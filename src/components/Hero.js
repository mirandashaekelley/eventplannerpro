import '../styling/Hero.css'
import '../App.css'
import hero from '../assets/hero-image.png'


export default function Hero() {
    return (
        <div className="hero">
            <div className='left-hero'>
                <div class="hero-title">Create <span className='green-text'>Unforgettable</span> Events with EventPlanner Pro's Seamless Management!</div>
                <div class="hero-subtext">Elevate your event planning with EventPlanner Pro, your comprehensive solution for orchestrating flawless events.</div>
                <div class="row-button">
                    <div className='button'>Get Started</div>
                    <div className='button-white'>Request a Demo</div>
                </div>
                
            </div>
            <div className='right-hero'>
                <img className='hero-img' src={hero} alt="woman using eventplanner pro on her ipad"></img>
            </div>
        </div>
    );    
}
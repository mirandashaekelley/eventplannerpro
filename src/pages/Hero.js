import '../styling/Hero.css'
import hero from '../assets/hero-image.png'


export default function Hero() {
    return (
        <div className="hero">
            <div className='left-hero'>
                <div class="hero-title">Create Unforgettable Events with EventPlanner Pro's Seamless Management!</div>
                <div class="hero-subtext">Elevate your event planning with EventPlanner Pro, your comprehensive solution for orchestrating flawless events.</div>
                <div class="row">Get Started</div>
                
            </div>
            <div className='right-hero'>
                <img className='hero-img' src={hero} alt="woman using eventplanner pro on her ipad"></img>
            </div>
        </div>
    );    
}
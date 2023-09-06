import '../styling/Navigation.css'
import logo from '../assets/logo.png'

export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="left-section">
                <img className='logo' src={logo} alt='EP in white enclosed in a blue square'></img>
                EventPlanner Pro
            </div>
            <div className="right-section">
                <ul>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Testimonials</a></li>
                    <li><a href="/">Resources</a></li>
                </ul>
            </div>
        </nav>
    );
}
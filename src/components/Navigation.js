import '../styling/Navigation.css'

export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="left-section">
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
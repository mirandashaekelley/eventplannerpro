import '../styling/Features.css'
import React from 'react';
import{ useState } from 'react';
export default function Features () {
    const [openColumn, setOpenColumn] = useState(1);

    const handleToggle = (column) => {
        setOpenColumn((prevOpenColumn) => (prevOpenColumn === column ? null : column));
    }
    return (
        <div className="features">
            <div className="row">
                <div className="left-column">
                    <div className='green-background'>
                        <div className="column-title">Organize, Manage, and
                        Fulfill</div>
                        <div className="column-subtext">  Surpass your events and marketing objectives with a revolutionary platform that empowers you to implement
                        personalized experiences on a 
                        grand scale.</div> 
                    </div>
                   
                </div>
                <div className="right-column">
                    <div className='toggle-container'>
                        <Column title="Organize" isOpen={openColumn === 1} onToggle={() => handleToggle(1)} content={"Enhance event efficiency through robust registration processes, calls for paper, and event marketing initiatives."} />
                        <Column title="Manage" isOpen={openColumn === 2} onToggle={() => handleToggle(2)} content={"Enhance event efficiency through robust registration processes, calls for paper, and event marketing initiatives."} />
                        <Column title="Fulfill" isOpen={openColumn === 3} onToggle={() => handleToggle(3)} content={"Enhance event efficiency through robust registration processes, calls for paper, and event marketing initiatives."} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='left-img'>placeholder</div>
                <div className="right-column">
                    <div className="column-title">Streamline Event Coordination</div>
                    <div className="column-subtext">Bring your distinct event vision
                    to life while minimizing effort and optimizing your operations.</div>
                </div>
            </div>
            <div className="row"></div>
            <div className="row"></div>
        </div>
    );
}

function Column ({title, isOpen, onToggle, content}) {
    return (
        <div className='column'>
            <div className='dropdown-title'>
                {title}
                <button className='toggle-btn' onClick={onToggle}>
                Toggle
                </button>
            </div>
            
            {isOpen && <div className='column-content'>{content}</div>}
        </div>
    );
}
import '../styling/Features.css'
import React from 'react';
import{ useState } from 'react';
import arrowicon from '../assets/Arrow.svg'
import features1 from '../assets/features1.png'
import features2 from '../assets/features2.png'
import features3 from '../assets/features3.png'
export default function Features () {
    const [openColumn, setOpenColumn] = useState(1);

    const handleToggle = (column) => {
        setOpenColumn((prevOpenColumn) => (prevOpenColumn === column ? prevOpenColumn : column));
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
            <div className="row-reverse">
                <div className='left-img'>
                    <img src={features1} alt="streamline event coordination"/>
                </div>
                <div className="text-column">
                    <div className="column-title">Streamline Event Coordination</div>
                    <div className="column-subtext">Bring your distinct event vision
                    to life while minimizing effort and optimizing your operations.</div>
                </div>
            </div>
            <div className="row"> 
                <div className="left-text-column">
                    <div className="column-title">Integrate Event Initiatives</div>
                    <div className="column-subtext">Link experience throughout your event lineup to enable widespread personalization.</div>
                </div>
                <div className='left-img'>
                <img src={features2} alt="integrate event inititatives"/>
                </div>
               
            </div>
            <div className="row-reverse">
                <div className='left-img'>
                    <img src={features3} alt="enhance cross channel"/>
                </div>
                <div className="text-column">
                    <div className="column-title">Enhance Cross-Channel Promotion</div>
                    <div className="column-subtext">Elevate campaign effectiveness and accelerate event-driven demand with precision.</div>
                </div>
            </div>
        </div>
    );
}

function Column ({title, isOpen, onToggle, content}) {
    return (
        <div className='column'>
            <div className='dropdown-title' onClick={onToggle}>
                {title}
                <div className='toggle-btn'>
                <img src={arrowicon} alt='white icon arrow'></img>
                </div>
            </div>
            
            {isOpen && <div className='column-content'>{content}</div>}
        </div>
    );
}
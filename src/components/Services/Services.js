import React, { useState, useEffect } from 'react';
import './Services.scss';
import '../ComponentHeader/ComponentHeader';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import axios from 'axios';

function Services() {
    const [serviceList, setServices] =useState([]);
    const [selectedService, setSelectedService] = useState({});
    const [showDescription, setShowDescription] = useState(true);
    
    useEffect(()=>{
      axios.get('./assets/configs/services.json').then((dt)=>{
        setServices(dt.data);
        setSelectedService(dt.data[0]);       
      })
    }, [])

    return (
        <div className="services-wrapper">
            <ComponentHeader
                thumbnail="https://assets.website-files.com/5bdc4010e035e2c083512543/5c02566942e49e5ceb0c16af_%5B25%5Dico_services.svg"
                title="Our services" />
            <div className="services-content">
                <div className={`service-description ${showDescription ? 'show-description' : 'hide-description'}`}>
                    <div className="service-description-title">
                        {selectedService.title}
                    </div>
                    <div className="service-description-description">
                        {selectedService.description}
                    </div>
                </div>
                <div className="service-list">
                    <ul>
                        {serviceList.map(service => <li key={Math.floor(Math.random() * 4000)} className={service.title === selectedService.title ? 'selected' : ''} onClick={() => {
                            setShowDescription(false);
                            setSelectedService(service);
                            setTimeout(() => {
                                setShowDescription(true);
                            }, 1)
                        }
                        }>
                            <div className="circle-wrapper">
                                <div className="circle">
                                </div>
                            </div>
                            <div className="service-name">
                                {service.title}
                            </div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;
import React, {useEffect, useState} from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import Testimonial from './Testimonial';
import './TestimonialList.scss';
import axios from 'axios';

function TestimonialList() {

    const [testimonialList, setTestimonialList] = useState([])

    useEffect(()=>{
        axios.get('./assets/configs/testimonials.json').then((dt)=>{
           setTestimonialList(dt.data);
        })
      }, [])

    return (
        <div>
            <ComponentHeader
                thumbnail="https://assets.website-files.com/5bdc4010e035e2c083512543/5c025c80758853757c06e0ce_%5B26%5Dico_testimonials.svg"
                title="Testimonials"
            ></ComponentHeader>

            <div className="testimonial-list">
                {testimonialList.map(testimonial => <Testimonial key={Math.floor(Math.random() * 4000)} {...testimonial}></Testimonial>)}
            </div>
        </div>
    )
}

export default TestimonialList;
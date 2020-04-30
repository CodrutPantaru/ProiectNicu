import React from 'react';
import './Card.scss';
import { useInView } from 'react-intersection-observer'


function Card(props) {

    const [ref, inView] = useInView({
        threshold: 0,
      })

    // useEffect(() => {
    //     axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=n').then(val => {
    //         setImgSrc(val.data.drinks[Math.floor(Math.random() * 20)].strDrinkThumb);
    //     })
    // },[])

    return (
        
        <div ref={ref} className={`card-wrapper${inView ? ' is-shown' : ''}`} id={props.id} style={{ height: `${Math.random(0, 1) * 200 + 300}px` }} >
            <div className="card-image">
                <img src={props.image} alt="" style={{width: '100%', height: '100%', opacity: '0.4'}}></img>
            </div>
            <div className="card-description">
                <div className="project-category">
                    {props.category}
                </div>
                <div className="project-name">
                    {props.name}
                </div>
            </div>
        </div>
    )
}

export default Card;
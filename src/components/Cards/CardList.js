import React, { useEffect, useState } from 'react';
import Card from './Card';
import './CardList.scss';
import axios from 'axios';

function CardList() {
    const [projects, setProjects] =useState({projectsDescription: '', projectsList: []})
    useEffect(()=>{
      axios.get('./assets/configs/projects.json').then((dt)=>{
        setProjects(dt.data);
      })
    }, [])
    return (
        <div className="projects" id="projects">
            <div className="projects-description">
                {projects.projectsDescription}
            </div>
            <div className="card-columns">
                <div className="card-list-even">
                    {projects.projectsList.filter((item, index) => index % 2 === 0).map((card) => <Card key={card.id} {...card}></Card>)}
                </div>
                <div className="card-list-odd">
                    {projects.projectsList.filter((item, index) => index % 2 === 1).map((card) => <Card key={card.id} {...card}></Card>)}
                </div>
            </div>
        </div>
    )
}

export default CardList;
import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
    return (
        <div className="heroCard animate__animated animate__fadeIn" >
            <img src={`./assets/heroesIMG/${id}.jpg`} alt={superhero}/>
            <div className="card-info">
                <h1>{superhero}</h1>
                <p>{alter_ego}</p>
                <p>{publisher}</p>
                <p>{first_appearance}</p>
                <Link to={`./hero/${id}`}>
                    Mas...
                </Link>
            </div>
        </div>
    )
}

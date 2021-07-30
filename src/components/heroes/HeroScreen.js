import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const heroScreen = ({history}) => {

    const {heroeId} = useParams();
    
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    if(!hero){
        return <Redirect to="/" />
    }

    const {superhero, characters, publisher, alter_ego, first_appearance} = hero

    const handleReturn = () => {
        if(history.length > 2){
            history.goBack();
        }else{
            history.push('/');
        }
    }

    return (
        <div className='hero-screen'>
            <img src={`../assets/heroesIMG/${heroeId}.jpg`} alt={superhero}/>
            <div className="hero-screen__info">
                <div>
                    <h1>{superhero}</h1>
                    <hr />
                    <h6>Alter ego: {alter_ego}</h6>
                    <hr />
                    <h6>Publisher: {publisher}</h6>
                    <hr />
                    <h6>Characters: {characters}</h6>
                    <hr />
                    <h6>First appearance: {first_appearance}</h6>
                </div>
                <button className="btn btn-primary" onClick={handleReturn}>Regresar</button>
            </div>
        </div>
    )
}

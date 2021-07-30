import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useFilterHeroes } from '../../hooks/useFilterHeroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard'
import queryString from 'query-string'

export const SearchScreen = ({history}) => {

    const {search} = useLocation();

    const {q = ""} = queryString.parse(search)

    const [values, handleInputChange] = useForm({searchInput: `${q}`})

    const {searchInput} = values;

    const heroesFilters = useMemo(() => useFilterHeroes(q), [q])

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`?q=${searchInput}`)
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={searchInput} onChange={handleInputChange} name="searchInput"/>
                <button type="submit" className="btn m-1 btn-block btn-outline-primary">Buscar</button>
            </form>
            <div className="heroList">
                {
                    heroesFilters.length > 0 ?
                    heroesFilters.map( hero => (
                        <HeroCard key={hero.id} {...hero} />
                    ))
                    : <p className="alert alert-info mt-3" >No se encontraron resultados</p>
                }
            </div>
        </div>
    )
}

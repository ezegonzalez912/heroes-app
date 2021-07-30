import { heroes } from "../data/heroes"

export const useFilterHeroes = (value) => {

    const valueLower = value.toLowerCase()

    const heroesFilters = heroes.filter( hero => hero.superhero.toLowerCase().includes(valueLower))
    
    return heroesFilters;
}

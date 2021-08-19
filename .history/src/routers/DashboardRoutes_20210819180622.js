import React, { Fragment } from 'react'
import { Redirect, Switch , Route} from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { heroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScren'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = ({history}) => {
    return (
        <Fragment>
          <Navbar history={history}/>
          <div className="container mt-5">
            <Switch>
                <Route exact path="/marvel" component={ MarvelScreen } />
                <Route exact path="/hero/:heroeId" component={ heroScreen } />
                <Route exact path="/dc" component={ DcScreen } />
                <Route exact path="/search" component={ SearchScreen } />
                <Redirect to="/marvel" />
            </Switch>
          </div>  
        </Fragment>
    )
}

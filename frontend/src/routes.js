import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Routes(){
    return (
        /**ROTAS
         * O BrowserRouter precisa está por volta de tudo para funcionar
         * O Switch serve para garantir que apenas uma rota seja chamada por momento (mesmo que o caminho seja semelhante) 
         */

         /**
          * Propriedade exact
          * 
          * Serve para acabar com um problema na rota.
          * A rota raiz "/" está contida na "/register" por exemplo.
          * e por isso o react entende que deve cair na primeira rota ("/")
          * mesmo acessando o "/resgister", então colocamos o "exact" para dizer
          * que a rota precisa ser exatamente igual para cair no caminho "/"
          */
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}
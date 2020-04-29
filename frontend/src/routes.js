import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Login from './pages/Login'
import Registrar from './pages/Registrar';
import Home from './pages/Home';
import Participantes from './pages/Participantes';
import NotFound from './assets/components/Notfound';
import MinhasMensagens from './pages/MensagensUsuario';

const Permissao = ({ component : Component}) => (
    <Route
            render={props => localStorage.getItem("token") ? (
                <Component {...props} />
            ) 
            : 
            (
                <Redirect to={{ pathname: "/" }} />
            )
        }
    />
)

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route exact path="/registrar" component={Registrar}/>
                    <Permissao exact path="/home" component={Home}/>
                    <Permissao exact path="/participantes" component={Participantes}/>
                    <Permissao exact path="/minhasMensagens" component={MinhasMensagens}/>
                    <Permissao component={NotFound}/>

            </Switch>        
        </BrowserRouter>
    );
};
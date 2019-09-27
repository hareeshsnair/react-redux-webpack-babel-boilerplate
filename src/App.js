import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import './app.css';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
    componentDidMount() {
        this.props.dispatch({type:"LOGIN_SUCCESS"})
    }
    
    render() {
        return(
            <BrowserRouter>
				<Suspense fallback={loading()}>
					<Switch>
						<Route path="/" name="Home" render={()=><div>React Boilerplate</div>} />
					</Switch>
				</Suspense>
			</BrowserRouter>
        )
    }
}

export default connect()(App);
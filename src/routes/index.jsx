import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/home';
import Todo from 'pages/todo';
import About from 'pages/about';

const Routes = () => (
	<Router>
		<div>
			<Route exact path="/" component={Todo}/>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
		</div>
	</Router>
)

export default Routes;
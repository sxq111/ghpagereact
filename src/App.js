import React, { Component } from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store, { updateReducer } from './store'
import reducers from './Action';
import LoginContainer from './Containers/LoginContainer'
import Auth from './Containers/Auth'
import { BrowserRouter, Route, NavLink, Switch, Redirect,Link} from 'react-router-dom';
import { Button, Input } from 'antd';
import DrawBoard from './Containers/DrawBoard'
import Nav from './Components/Nav'

class App extends Component {
	constructor(props) {
		super(props);
	}
	async  componentDidMount() {
		// let arr = [1,2,5];//学习下reduce
		// arr.reduce((p,c)=>{
		// 	console.log(p,c)
		// 	return p+c;
		// },7);
		Object.keys(reducers).forEach(name=>{
			console.log(reducers)
			updateReducer(name,reducers[name]);
		});
	}
	render() {
		console.log('app render');
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div style={{ width: '100%', background: '#345' }}>
						<Nav />
						<Switch>
						
							<Route path='/home' render={() => {
								return (<h1>HOME</h1>);
							}} />
							<Route path='/page2' component = {DrawBoard} />
							<Route path='/login' component={LoginContainer} />
							<Route path='/page404' render={() => {
								return (<h1>404 not found</h1>);
							}} />
							<Redirect from='/' to='/page404' />
						</Switch>
						{
							//先禁用登陆验证
							//  <Route path='/' component={Auth} /> 
						}
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;

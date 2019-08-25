import React             from 'react';
import ReactDOM          from 'react-dom';
import { StoreProvider } from './Store';
import { Router }        from '@reach/router';
import App               from './App';
import HomePage          from './components/HomePage';
import FavPage           from './components/FavPage';
import './index.css';

ReactDOM.render(
   <StoreProvider>
	  <Router>
		 <App path={ '/' }>
			<HomePage path={ '/' } />
			<FavPage path={ '/faves' } />
		 </App>
	  </Router>
   </StoreProvider>,
   document.getElementById('root'));


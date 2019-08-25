import React, { Fragment, useContext } from 'react';
import { Link }                        from '@reach/router';
import { Store }                       from './Store';
import './index.css';


const App = (props) => {
   const { state } = useContext(Store);

   return (
	  <Fragment>
		 <header className={ 'header' }>
			<div>
			   <h1>Rick and Morty</h1>
			   <p>Pick your favorite episodes</p>
			</div>
			<div>
			   <Link to={ '/' }>Home</Link> { ' | ' }
			   <Link to={ '/faves' }>Favorite(s) { state.favourites.length }</Link>
			</div>
		 </header>
		 { props.children }
	  </Fragment>
   );
};

export default App;

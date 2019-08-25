import React, {
   Suspense,
   lazy,
   useEffect,
   useContext,
   Fragment,
}                from 'react';
import { Store } from '../Store';
import axios     from 'axios';


const EpisodesList = lazy(() => import('./EpisodesList'));

const HomePage = () => {
   const { state, dispatch } = useContext(Store);

   useEffect(() => {
	  state.episodes.length === 0 && fetchDataAction();
   });

   const fetchDataAction = async () => {
	  const { data } = await axios('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');

	  return dispatch({
		 type: 'FETCH_DATA',
		 payload: data._embedded.episodes,
	  });
   };

   const toggleFavAction = (episode) => {
	  const isEpisodeInFavourites = state.favourites.includes(episode);
	  let dispatchObj = {
		 type: 'ADD_FAV',
		 payload: episode,
	  };
	  if (isEpisodeInFavourites) {
		 const favouritesWithoutEpisode = state.favourites.filter(fav => fav.id !== episode.id);
		 dispatchObj = {
			type: 'REMOVE_FAV',
			payload: favouritesWithoutEpisode,
		 };
	  }
	  return dispatch(dispatchObj);
   };

   const props = {
	  episodes: state.episodes,
	  toggleFavAction,
	  favourites: state.favourites,
   };


   return (
	  <Fragment>
		 <Suspense fallback={ <div>Loading...</div> }>
			<section className={ 'episode-layout' }>
			   <EpisodesList { ...props } />
			</section>
		 </Suspense>
	  </Fragment>
   );
};

export default HomePage;

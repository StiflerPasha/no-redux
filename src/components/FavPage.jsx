import React, { Suspense, useContext, lazy } from 'react';
import { Store }                             from '../Store';

const EpisodesList = lazy(() => import('./EpisodesList'));

const FavPage = () => {
   const { state, dispatch } = useContext(Store);

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
	  episodes: state.favourites,
	  toggleFavAction,
	  favourites: state.favourites,
   };
   return (
	  <Suspense fallback={ <div>Loading...</div> }>
		 <div className="episode-layout">
			<EpisodesList { ...props } />
		 </div>
	  </Suspense>
   );
};

export default FavPage;

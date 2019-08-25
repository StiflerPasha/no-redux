import React from 'react';

const EpisodeList = (props) => {
   const { episodes, toggleFavAction, favourites } = props;

   return (
	  episodes.map(episode => (
		 <section key={ episode.id }
				  className={ 'episode-box' }>
			<img src={ episode.image.medium }
				 alt={ `Rick and Morty ${ episode.name }` } />
			<div>{ episode.name }</div>
			<section style={ { display: 'flex', justifyContent: 'space-between' } }>
			   <div>
				  Season: { episode.season } || Number: { episode.number }
			   </div>
			   <button onClick={ () => toggleFavAction(episode) }
			   >{ favourites.includes(episode) ? 'Unfav' : 'Fav' }
			   </button>
			</section>
		 </section>
	  ))
   );
};

export default EpisodeList;

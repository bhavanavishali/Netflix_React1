import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

function TitleCards({ title ,category}) {
  // State to store movie data from the API
  const [movies, setMovies] = useState([]);

  // Reference for scrolling the movie cards
  const cardsRef = useRef();

  // API options with authorization token
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWQzYjU1NGFjOWIyYjNmZmNjNTc5OTRmMTg4Yzg1OCIsIm5iZiI6MTczNzYzOTQxMi40NjU5OTk4LCJzdWIiOiI2NzkyNDVmNDIxMDQ4ZTlmNThmYTdlNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cIdIkuXeD_AUWM-m8OzXO5IkB07lKU-RQrTa781ZRZI'
    }
  };

  // Function to handle horizontal scrolling with the mouse wheel
  const handleScroll = (event) => {
    event.preventDefault();             //prevents the default scroll behavior
    if (cardsRef.current) {              
      cardsRef.current.scrollLeft += event.deltaY;  //allows scrolling horizontally instead of vertically.
    }
  };

  // Fetch movie data when the component loads,This effect will run once, as indicated by the empty dependency array [].
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category ? category:"now_playing"}?language=en-US&page=1`, 
          options
        );
        const data = await response.json();
        setMovies(data.results || []); // Update state with movie data or empty if no results
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();

    // Add scroll event listener to the movie card list
    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleScroll);
    }

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <div className='title-cards'>
      {/* Display provided title or default text */}
      <h2>{title || "Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {movies.length ? (
          movies.map((movie, index) => (
            <Link to={`/player/${movie.id}`} className="card" key={index}>
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.original_title} 
              />
              <p>{movie.original_title}</p>
            </Link>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
}

export default TitleCards;

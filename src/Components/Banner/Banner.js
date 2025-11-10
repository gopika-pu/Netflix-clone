import React, { useEffect, useState } from 'react';
import './Banner.css';
import { API_KEY, imageUrl } from '../../Constants/Constants';
import axios from '../../axios';
import YouTube from 'react-youtube';
 
function Banner() {
    const [movie, setMovie] = useState(null);
    const [urlId, setUrlId] = useState(null);
 
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                const movies = response.data.results;
                if (movies.length > 0) {
                    const randomMovie = movies[Math.floor(Math.random() * movies.length)]; // Select a random movie
                    console.log(randomMovie);
                    setMovie(randomMovie);
                }
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    }, []);
 
    const handlePlay = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                if (response.data.results.length !== 0) {
                    setUrlId(response.data.results[0].key);
                } else {
                    console.log("No video found");
                }
            })
            .catch((error) => console.error("Error fetching video:", error));
    };
 
    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className='relative banner'>
            <div className='content grid grid-cols-12 gap-4 p-4'>
                <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                    <h1 className='title heading-font-h'>{movie ? (movie.title || movie.name) : ""}</h1>
                    <div className='banner_buttons'>
                        <button className='button' onClick={() => handlePlay(movie.id)}>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <p className='description'>{movie ? movie.overview : ""}</p>
                </div>
            </div>
            <div className='fade_bottom'></div>
            {urlId && (
                <div className='youtube-container absolute -top-0'>
                    <button onClick={() => setUrlId('')} className="absolute -top-0 -right-0 z-10 bg-black text-white rounded-full px-3 py-1 text-sm hover:bg-red-600 transition">
                        ✖
                    </button>
                    <YouTube
                        videoId={urlId}
                        opts={{ height: '600px', width: '100%', playerVars: { autoplay: 1 } }}
                    />
                </div>
            )}
        </div>
    );
}
 
export default Banner;
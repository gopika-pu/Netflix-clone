import React, { useEffect, useState, useRef } from 'react';
import { imageUrl, API_KEY } from '../../Constants/Constants';
import axios from '../../axios';
import './RowPost.css';
import YouTube from 'react-youtube';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [UrlId, setUrlId] = useState('');
    const sliderRef = useRef(null);

    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, [props.url]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: { autoplay: 1 },
    };

    const handleMovie = (id) => {
        if (UrlId && UrlId.id === id) {
            setUrlId('');
            return;
        }
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                if (response.data.results.length !== 0) {
                    setUrlId({ id, key: response.data.results[0].key });
                } else {
                    console.log('No video found');
                }
            })
            .catch(error => console.error('Error fetching video:', error));
    };

    // ✅ Allows only horizontal scrolling inside the slider, but blocks page scrolling while hovering
    const handleScroll = (event) => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += event.deltaY * 2; // Scroll horizontally
        }
    };


    return (
        <div className='row grid grid-cols-10 gap-2 p-1'>
            <div className='col-span-12 md:col-span-10 lg:col-span-12 p-4' style={{ backgroundColor: '#050508', borderRadius: '10px' }}>
                <h2 className='paragraph-font-p text-2xl'>{props.title}</h2>

                <div
                    className='posters-container'
                >
                    <div className='posters auto-scroll' ref={sliderRef} onWheel={handleScroll}>
                        {[...movies, ...movies].map(obj => (
                            <img
                                key={Math.random()}
                                onClick={() => handleMovie(obj.id)}
                                className={props.isSmall ? 'SmallPoster' : 'poster'}
                                alt='poster'
                                src={`${imageUrl + obj.backdrop_path}`}
                            />
                        ))}
                    </div>
                </div>

                {/* YouTube video with close button */}
                {UrlId && (
                    <div className="relative mt-4">
                        <button
                            onClick={() => setUrlId('')}
                            className="absolute -top-3 -right-3 z-10 bg-black text-white rounded-full px-3 py-1 text-sm hover:bg-red-600 transition"
                        >
                            ✖
                        </button>
                        <YouTube videoId={UrlId.key} opts={opts} />
                    </div>
                )}
            </div>
        </div>

    );
}

export default RowPost;
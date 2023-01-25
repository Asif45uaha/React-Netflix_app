import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie';


const Rows = ({ title, fetchUrl, rowID }) => {
    const [movies, setMovies] = useState([]);
    const [like, setLike] = useState(false);
    useEffect(() => {
        axios.get(fetchUrl).then((res) => {
            setMovies(res.data.results);
        })
    }, [fetchUrl])
    //console.log(movies);
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opaacity-100 cursor-pointer z-10 hidden group-hover:block' />
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item}/>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opaacity-100 cursor-pointer z-10 hidden group-hover:block' />
            </div>
        </>
    )
}

export default Rows
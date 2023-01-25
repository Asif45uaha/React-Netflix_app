import React,{useState} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movie = ({ item }) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth();
    const MovieId = doc(db, 'users', `${user?.email}`);
    const SavedShow = async () => {
        if (user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(MovieId, {
                SavedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
        }
        else{
            alert('Please Login to save a movie');
        }
    }
    return (
        <div className='w-[160px] sm:[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex  justify-center items-center h-full'>{item?.title}</p>
                <p onClick={SavedShow}>
                    {like ? <FaHeart className='absolute top-4 left-6 text-gary-300' /> : <FaRegHeart className='absolute top-4 left-6 text-gary-300' />}
                </p>
            </div>
        </div>
    )
}

export default Movie
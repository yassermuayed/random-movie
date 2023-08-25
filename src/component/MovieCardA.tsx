import React from 'react'
import { Movie } from '../lib/tmdb'
import { Link } from 'react-router-dom'

export default function MovieCardA({ movie }: { movie: Movie }) {
    return (
        <div className='  mt-8 outline outline-white w-48 flex flex-col items-center p-2 rounded-xl hover:bg-slate-800'>
            <p>Movie Card A</p>
            <p>Title: {movie.title}
            </p>
            <Link to={`/view/movie/${movie.id}`}>
                {
                    movie.poster_path ?

                        <img className=' w-24' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" />
                        :
                        <p className=' bg-red-500 w-24 min-h-48'>No Poster | Press for more</p>
                }
            </Link>

        </div>
    )
}

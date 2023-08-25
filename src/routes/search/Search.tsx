import React from 'react'
import RootLayout from '../../component/RootLayout'
import { tmdbAPI } from '../..';
import MovieCardA from '../../component/MovieCardA';

export default function Search() {
    const [searchTerm, setSearchTerm] = React.useState('')
    const [moviesToShow, setMoviesToShow] = React.useState([])
    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        tmdbAPI.searchMovies(searchTerm).then((res) => {
            setMoviesToShow(res)
        })
    }
    return (
        <div>
            <h1 className=' text-secondary text-center'>Search Page</h1>
            <form onSubmit={(e) => handleSearch(e)}>
                <div className="join">
                    <div>
                        <div>
                            <input onChange={(e) => setSearchTerm(e.target.value)} className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>
                    <select defaultValue={0} className="select select-bordered join-item">
                        <option >Filter</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">new</span>
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
            </form>
            <div>
                <h1>Search Results</h1>
                {
                    moviesToShow.map((movie) => {
                        return <MovieCardA key={Math.random() * 10000} movie={movie} />
                    })
                }
            </div>
        </div>
    )
}

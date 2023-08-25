import React, { useEffect } from 'react'

import { tmdbAPI } from '../..'
import MovieCardA from '../../component/MovieCardA'
import SectionA from '../../component/SectionA'

export default function Home() {
    const [nowPlaying, setNowPlaying] = React.useState([])
    const [popular, setPopular] = React.useState([])
    const [topRated, setTopRated] = React.useState([])
    const [upcoming, setUpcoming] = React.useState([])

    useEffect(() => {
        tmdbAPI.movieLists("top_rated").then(res => {
            setTopRated(res.results)
        })
        tmdbAPI.movieLists("upcoming").then(res => {
            setUpcoming(res.results)
        })
        tmdbAPI.movieLists("popular").then(res => {
            setPopular(res.results)
        })
        tmdbAPI.movieLists("now_playing").then(res => {
            setNowPlaying(res.results)
        })

    }, [])
    return (
        <div>
            <h1 className=' text-secondary text-center'>Home Page</h1>

            <SectionA title='Now Playing' >
                {
                    nowPlaying.map((movie) => {
                        return <MovieCardA key={Math.random() * 10000} movie={movie} />
                    })
                }
            </SectionA>
            <SectionA title='Popular' >
                {
                    popular.map((movie) => {
                        return <MovieCardA key={Math.random() * 10000} movie={movie} />
                    })
                }
            </SectionA>
            <SectionA title='Top Rated' >
                {
                    topRated.map((movie) => {
                        return <MovieCardA key={Math.random() * 10000} movie={movie} />
                    })
                }
            </SectionA>

            <SectionA title='Upcoming' >
                {
                    upcoming.map((movie) => {
                        return <MovieCardA key={Math.random() * 10000} movie={movie} />
                    })
                }
            </SectionA>
        </div>
    )
}

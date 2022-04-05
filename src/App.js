import { useEffect, useState } from 'react';


import {
  Routes,
  Route,
  useNavigate,
  useParams,

} from "react-router-dom";


import './App.css';
import Controls from './components/Controls';
import Home from './components/Home';
import Movie from './components/Movie';

// 809676 secret cops

export default function App() {


  const [movieData, setMovieData] = useState(mm)

  let navigate = useNavigate()


  async function openLink(link_id) {
    console.log("shroud open movie by its id", link_id)
    navigate('/movie')
    let link_movie = await fetchApi(link_id)
    console.log('link movie', link_movie)
    if (link_movie.success !== false) {
      setMovieData(link_movie)
    }
    else {
      navigate('/home')
    }

  }

  async function randomMovie() {
    const movie_id = Math.ceil(Math.random() * 950000)
    const newMovie = await fetchApi(movie_id)


    if (newMovie.poster_path && !newMovie.adult) {
      console.log("poster OK", newMovie.id)
      setMovieData(newMovie)

    }
    else {
      console.log("no poster running randomMovie() again", newMovie.id)
      randomMovie()
    }

  }

  function copyToShare() {
    console.log(movieData.id)
    navigator.clipboard.writeText(`https://random-movie-nine.vercel.app/${movieData.id}`)
  }
  
  return (

    <div>

      <Routes>
        <Route path='/home' element={<Home />} />

        <Route path={`:linkId`} element={<Movie movieData={movieData} fm={randomMovie} openLink={openLink} />} />
      </Routes>




      <Controls fm={randomMovie} copyToShare={copyToShare} />

    </div >

  )
}

const mm = {
  "adult": false,
  "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
  "belongs_to_collection": {
    "id": 531241,
    "name": "Spider-Man (Avengers) Collection",
    "poster_path": "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg",
    "backdrop_path": "/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg"
  },
  "budget": 200000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    }
  ],
  "homepage": "https://www.spidermannowayhome.movie",
  "id": 634649,
  "imdb_id": "tt10872600",
  "original_language": "en",
  "original_title": "Spider-Man: No Way Home",
  "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
  "popularity": 5743.837,
  "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  "production_companies": [
    {
      "id": 420,
      "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
      "name": "Marvel Studios",
      "origin_country": "US"
    },
    {
      "id": 84041,
      "logo_path": "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
      "name": "Pascal Pictures",
      "origin_country": "US"
    },
    {
      "id": 5,
      "logo_path": "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
      "name": "Columbia Pictures",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2021-12-15",
  "revenue": 1888000000,
  "runtime": 148,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    },
    {
      "english_name": "Tagalog",
      "iso_639_1": "tl",
      "name": ""
    }
  ],
  "status": "Released",
  "tagline": "The Multiverse unleashed.",
  "title": "Spider-Man: No Way Home",
  "video": false,
  "vote_average": 8.2,
  "vote_count": 10809
}



async function fetchApi(movie_id) {
  console.log("fetch form API is running")
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_RPG_COLORS}&language=en-US`)
  var data = await response.json()
  return data
}
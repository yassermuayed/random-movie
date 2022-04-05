import { useEffect, useState } from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";


import './App.css';
import Controls from './components/Controls';
import Home from './components/Home';
import Movie from './components/Movie';

export default function App() {


  const [movieData, setMovieData] = useState(mm)
  

  async function fetchMovie(movie_id) {
    
    console.log(movie_id)
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_RPG_COLORS}&language=en-US`)
    const data = await response.json()
    if (data.poster_path && !data.adult) {
      console.log("poster OK" , data.id)
      setMovieData(data)
      
    } else {
      console.log("no poster running fetchmovie() agiaen")
      const new_id = Math.ceil(Math.random() * 950000) 
      fetchMovie(new_id)
    }

  }


  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie' element={<Movie movieData={movieData} /> } />
          <Route path={`:linkId`} element={<Movie movieData={movieData} fm={fetchMovie} /> } />
        </Routes>
      
      {/* <NavBar /> */}

      {/* 
      <Home />



      <Movie movieData={movieData} /> */}




      <Controls fm={fetchMovie} />
      </BrowserRouter>
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
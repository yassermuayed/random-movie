
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../App.css';

export default function Movie({ movieData , openLink}) {
  // console.log(movieData)
  // const [ppath, setPPath] = useState(movieData.poster_path)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)

  }, [movieData.poster_path])

  let params = useParams()

  console.log(params)

  if(params.linkId !== 'movie'){
    openLink(params.linkId)
  }


  return (
    <div className='movie'>

      {loading ?
        <div className='loading'>
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        : null}
      <img onLoad={() => setLoading(false)} className="poster" src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt="" srcset="" />

      <div className='info'>
        <div id='title'>
          {movieData.title}
        </div>

        <div>
          {movieData.english_name}
        </div>

        <div>

          {movieData.original_title === movieData.title ? "" : "Original Title(" + movieData.original_language + "):  " + movieData.original_title}
        </div>


        <div>
          {movieData.origin_country}
        </div>

        <div>
          {movieData.status} {movieData.release_date}
        </div>

        <div>
          {movieData.runtime !== 0 ? "Run time " + movieData.runtime + " Minutes" : null}
        </div>
        <div id='rating'>
          Ratings {movieData.vote_average}  ({movieData.vote_count} votes)
        </div>

        <div id='languages'>
          {movieData.spoken_languages.length > 0 ? "Language " + movieData.spoken_languages.map(one => one.name) : null}
        </div>



        <div id='tagline'>
          {movieData.tagline}
        </div>

        <div id='overview'>
          {movieData.overview}
        </div>

        <div id='genres'>
          {movieData.genres.length > 0 ? movieData.genres.map(one => <div className='genre'>{one.name}</div>) : null}
        </div>


        <div id='homepage'>
          {movieData.homepage && movieData.homepage !== "" ?
            <a href={movieData.homepage} target='blank'> Home page</a>
            : ""}
        </div>



        {/* <div>
        {movieData.popularity}
      </div> */}

        <div className='last-section'>

          <div id='production'>
            {movieData.production_companies.length > 0 ? movieData.production_companies.map(one => <img className='productionlogo' src={`https://image.tmdb.org/t/p/original${one.logo_path}`} alt={one.name} />) : ""}
          </div>




          <div className='numbers'>
            <div>
              {movieData.production_countries.length > 0 ? movieData.production_countries.map(one => <div>Country of Origin: <br /> {one.name}</div>) : ""}
            </div>
            <div>

              {movieData.budget !== 0 ? "Budget: " + movieData.budget / 1000000 + " M$" : null}
            </div>

            <div>

              {movieData.revenue !== 0 ? "Revenue:" + movieData.revenue / 1000000 + " M$" : null}
            </div>
          </div>

        </div>

        <div className='bootommargin'> ________ </div>



        {/* <div>
          {movieData.video ? "video available" : "No video available"}
        </div> */}
      </div>
      {/* <div id='imbdID'>
        imbd ID:
        {movieData.imdb_id}
      </div> */}


    </div>
  )
}

const example = {
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

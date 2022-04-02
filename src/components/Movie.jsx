
import '../App.css';

export default function Movie({ movieData }) {
  // console.log(movieData)
  return (
    <div className='movie'>
      <img className="poster" src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt="" srcset="" />

      <div>
        {movieData.title}
      </div>

      <div>
        {movieData.english_name}
      </div>

      <div>
        original title
        {movieData.original_title}
      </div>

      <div>
        {movieData.original_language}
      </div>

      <div>
        {movieData.origin_country}
      </div>

      <div>
        {movieData.tagline}
      </div>

      <div>
        {movieData.overview}
      </div>

      <div>
        {movieData.genres.length > 0 ? movieData.genres.map(one => <h1>{one.name}</h1>) :" no geners"}
      </div>

      <div>
        {movieData.homepage}
      </div>

      <div>
        {movieData.imdb_id}
      </div>

      <div>
        {movieData.popularity}
      </div>

      <div>
        {movieData.vote_average}
      </div>

      <div>
        {movieData.vote_count}
      </div>

      <div>
        {movieData.production_companies.length > 0 ? movieData.production_companies.map(one => <h1>{one.name}</h1>) : "No production companies"}
      </div>

      <div>
        {movieData.production_countries.length > 0 ? movieData.production_countries.map(one => <h1>{one.name}</h1>) : "No production countireies"}
      </div>

      <div>
        {movieData.status}
      </div>

      <div>
        {movieData.release_date}
      </div>

      <div>
        {movieData.budget}
      </div>

      <div>
        {movieData.revenue}
      </div>

      <div>
        {movieData.runtime}
      </div>

      <div>
      {movieData.spoken_languages.length > 0 ? movieData.spoken_languages.map(one => <h1>{one.name}</h1>) : "No production countireies"}
      </div>

      <div>
        {movieData.video ? "video available" : "No video available"}
      </div>

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

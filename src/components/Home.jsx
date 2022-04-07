import React from 'react'
import '../App.css'
export default function Home() {
  return (
    <div className='home'>
      <h1 className='logo'>RM9</h1>

      Welcome to Random Movie 9.<br /><br />
      The sole Business of this app is to suggest movies that you will not find at every movies website.
      <br /><br />
      You will be surprised at how much good movies are there that you didn't know excites.
      <br /><br />
      Start by pressing the (
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="31.041" height="21.771" viewBox="0 0 31.041 21.771">
          <g id="Layer_2" data-name="Layer 2" opacity="0.84">
            <g id="Layer_1" data-name="Layer 1">
              <path id="Path_3" data-name="Path 3" d="M73.948,0H53.622A.818.818,0,0,0,52.8.814L47.28,20.957a.808.808,0,0,0,.24.575.824.824,0,0,0,.581.238h20.39a.825.825,0,0,0,.581-.238.809.809,0,0,0,.241-.575L74.77.814A.818.818,0,0,0,73.948,0ZM51.46,19.978a.442.442,0,0,1-.444.44l-1.861.039a.441.441,0,0,1-.443-.435l.467-1.906a.437.437,0,0,1,.129-.311.445.445,0,0,1,.314-.129h1.844a.445.445,0,0,1,.314.129.437.437,0,0,1,.129.311ZM59.279,1.894a.437.437,0,0,1,.13-.311.445.445,0,0,1,.314-.128h1.843a.445.445,0,0,1,.314.128.437.437,0,0,1,.13.311l-.451,1.865a.437.437,0,0,1-.128.311.445.445,0,0,1-.313.13l-1.859.038a.442.442,0,0,1-.444-.44ZM53.236,3.8,53.7,1.894a.441.441,0,0,1,.443-.439H55.99a.441.441,0,0,1,.443.439l-.451,1.865a.437.437,0,0,1-.128.311.445.445,0,0,1-.313.13l-1.861.04a.445.445,0,0,1-.314-.129A.437.437,0,0,1,53.236,3.8Zm3.938,16.178a.437.437,0,0,1-.129.311.445.445,0,0,1-.314.129l-1.861.039a.441.441,0,0,1-.443-.439l.467-1.906a.437.437,0,0,1,.129-.311.445.445,0,0,1,.314-.129h1.846a.445.445,0,0,1,.314.129.437.437,0,0,1,.129.311Zm5.561,0a.437.437,0,0,1-.129.311.445.445,0,0,1-.314.129l-1.861.039a.441.441,0,0,1-.443-.439l.467-1.906a.437.437,0,0,1,.129-.311.445.445,0,0,1,.314-.129h1.844a.445.445,0,0,1,.314.129.437.437,0,0,1,.129.311Zm.632-8.522s-3.948,3.149-5.144,4.112c-1.221.635-1.131-.506-1.131-.506l2.243-8.2c.465-1.157,1.277-.487,1.277-.487s2.028,2.632,2.949,3.894c.661.929-.2,1.187-.2,1.187ZM64.324,3.8l.467-1.906a.441.441,0,0,1,.443-.439h1.84a.441.441,0,0,1,.443.439l-.451,1.865a.437.437,0,0,1-.128.311.445.445,0,0,1-.313.13l-1.861.038a.445.445,0,0,1-.314-.129A.437.437,0,0,1,64.32,3.8Zm3.915,16.178a.442.442,0,0,1-.444.44l-1.86.039a.445.445,0,0,1-.316-.125.437.437,0,0,1-.133-.31l.467-1.906a.442.442,0,0,1,.444-.44h1.843a.442.442,0,0,1,.444.44ZM72.69,3.759a.438.438,0,0,1-.129.312.446.446,0,0,1-.315.129l-1.86.04a.442.442,0,0,1-.444-.44L70.408,1.9a.437.437,0,0,1,.13-.311.445.445,0,0,1,.314-.128H72.7a.445.445,0,0,1,.314.128.437.437,0,0,1,.13.311Z" transform="translate(-43.729 0)" />
              <rect id="Rectangle_4" data-name="Rectangle 4" width="4.544" height="1.169" rx="0.585" transform="translate(0.403 4.303)" />
              <rect id="Rectangle_5" data-name="Rectangle 5" width="3.813" height="1.169" rx="0.585" transform="translate(0.058 8.301)" />
              <rect id="Rectangle_6" data-name="Rectangle 6" width="3.132" height="1.169" rx="0.585" transform="translate(0.374 12.3)" />
              <rect id="Rectangle_7" data-name="Rectangle 7" width="2.202" height="1.169" rx="0.585" transform="translate(0 16.298)" />
            </g>
          </g>
        </svg>

      </span>
      ) Icon in the app bar below and the website will do the rest.

        <div className='githubb'>
          This website is open source. Contribute on <a href='https://github.com/yassermuayed/random-movie'>Github</a>.
        </div>
      <div className='input' >
        <input type="checkbox" /> Include adult results.
      </div>

    

      <div className='copyrights'>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="" srcset="" />
        <p>"This product uses the TMDB API but is not endorsed or certified by TMDB."</p>
      </div>

    </div>
  )
}

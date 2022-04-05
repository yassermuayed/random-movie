import React from 'react'
import '../App.css'
export default function Home() {
  return (
    <div>

      <p>
        Welcome to Random Movie 9
      </p>
      <p>
        Get started by pressing the (
        <span id='icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="35.186" viewBox="0 0 44 35.186">
            <g id="Layer_2" data-name="Layer 2" opacity="0.84">
              <g id="Layer_1" data-name="Layer 1">
                <path id="Path_3" data-name="Path 3" d="M83.338,0H55.855a1.227,1.227,0,0,0-1.112,1.316L47.28,33.872a1.445,1.445,0,0,0,.325.93,1.03,1.03,0,0,0,.786.385H75.96a1.031,1.031,0,0,0,.786-.385,1.446,1.446,0,0,0,.326-.93L84.45,1.316A1.227,1.227,0,0,0,83.338,0ZM52.932,32.288a.663.663,0,0,1-.6.711l-2.516.064a.66.66,0,0,1-.6-.7l.631-3.08a.781.781,0,0,1,.175-.5.556.556,0,0,1,.424-.208H52.94a.556.556,0,0,1,.424.208.781.781,0,0,1,.175.5ZM63.5,3.061a.78.78,0,0,1,.176-.5.556.556,0,0,1,.424-.207H66.6a.556.556,0,0,1,.424.207.78.78,0,0,1,.176.5l-.61,3.015a.782.782,0,0,1-.173.5.557.557,0,0,1-.423.21l-2.514.062a.663.663,0,0,1-.6-.711Zm-8.17,3.08.631-3.08a.661.661,0,0,1,.6-.709h2.493a.661.661,0,0,1,.6.709l-.61,3.015a.782.782,0,0,1-.173.5.557.557,0,0,1-.423.21l-2.516.065a.557.557,0,0,1-.425-.209A.782.782,0,0,1,55.334,6.141Zm5.324,26.147a.781.781,0,0,1-.175.5.556.556,0,0,1-.424.208l-2.516.064a.661.661,0,0,1-.6-.709l.631-3.08a.781.781,0,0,1,.175-.5.556.556,0,0,1,.424-.208h2.5a.556.556,0,0,1,.424.208.781.781,0,0,1,.175.5Zm7.519,0a.781.781,0,0,1-.175.5.556.556,0,0,1-.424.208l-2.516.064a.661.661,0,0,1-.6-.709l.631-3.08a.781.781,0,0,1,.175-.5.556.556,0,0,1,.424-.208h2.493a.556.556,0,0,1,.424.208.781.781,0,0,1,.175.5Zm.854-13.773s-5.339,5.089-6.956,6.645c-1.651,1.027-1.529-.818-1.529-.818L63.579,11.09c.628-1.869,1.727-.787,1.727-.787s2.742,4.254,3.988,6.294c.893,1.5-.267,1.918-.267,1.918ZM70.325,6.141l.631-3.08a.661.661,0,0,1,.6-.709h2.488a.661.661,0,0,1,.6.709l-.61,3.015a.782.782,0,0,1-.173.5.557.557,0,0,1-.423.21l-2.516.062a.556.556,0,0,1-.424-.208.781.781,0,0,1-.175-.5Zm5.294,26.147a.663.663,0,0,1-.6.711l-2.515.064a.554.554,0,0,1-.427-.2.778.778,0,0,1-.18-.5l.631-3.08a.663.663,0,0,1,.6-.711h2.492a.663.663,0,0,1,.6.711ZM81.637,6.076a.783.783,0,0,1-.175.5.558.558,0,0,1-.425.209l-2.515.065a.663.663,0,0,1-.6-.711l.631-3.08a.78.78,0,0,1,.176-.5.556.556,0,0,1,.424-.207h2.492a.556.556,0,0,1,.424.207.78.78,0,0,1,.176.5Z" transform="translate(-40.45)" fill="#fff" />
                <rect id="Rectangle_4" data-name="Rectangle 4" width="8.741" height="2.249" rx="1.125" transform="translate(0.774 6.879)" fill="#fff" />
                <rect id="Rectangle_5" data-name="Rectangle 5" width="7.334" height="2.249" rx="1.125" transform="translate(0.111 13.272)" fill="#fff" />
                <rect id="Rectangle_6" data-name="Rectangle 6" width="6.024" height="2.249" rx="1.125" transform="translate(0.719 19.665)" fill="#fff" />
                <rect id="Rectangle_7" data-name="Rectangle 7" width="4.236" height="2.249" rx="1.125" transform="translate(0 26.058)" fill="#fff" />
              </g>
            </g>
          </svg>
        </span>
        ) Icon. In the app bar below.
      </p>
      <p>
        The sole purpose of this app is to give suggestion for movies that are not well know.
      </p>
      <p>You will be surprised of how many good movies are their that you never heard of.</p>

      <div>
        <input type="checkbox" /> Include adult results.
      </div>

      <div>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="" srcset="" />
        <p>"This product uses the TMDB API but is not endorsed or certified by TMDB."</p>
      </div>
    </div>
  )
}

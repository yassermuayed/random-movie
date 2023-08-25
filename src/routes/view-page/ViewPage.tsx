import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { tmdbAPI } from '../..'
import { MovieData, MovieVideo } from '../../lib/tmdb'
import { useSessionDataStore } from '../../hooks/session-data-store'



export default function ViewPage() {
    const params = useParams()
    let setMediaId = useSessionDataStore((state) => state.setMediaID)
    setMediaId(params.id as string)
    const mediaID = useSessionDataStore((state) => state.mediaID)

    const [mediaData, setMediaData] = React.useState({} as MovieData)
    const [mediaVideos, setMediaVideos] = React.useState([] as Array<MovieVideo>)
    useEffect(() => {

        tmdbAPI.movieDetails(mediaID as string).then(res => {
            setMediaData(res)
        })
        tmdbAPI.movieVideos(mediaID as string, "videos").then(res => {
            setMediaVideos(res.results)
        })
    }, [params.id])



    return (
        <div>
            mediaType : {params.mediaType}
            id : {params.id}
            {
                mediaData.id ?
                    <div className='mt-12 max-w-screen '>
                        <div>
                            <img className=' w-screen' src={`https://image.tmdb.org/t/p/w500${mediaData.poster_path}`} alt="Movie Poster" />
                            {/* backdrop */}
                            <img className=' w-screen' alt='mobie' src={`https://image.tmdb.org/t/p/w500${mediaData.backdrop_path}`} />
                        </div>

                        <h1 className=' text-secondary text-2xl '>{mediaData.title}</h1>
                        <h2 className=' text-secondary '>{mediaData.tagline}</h2>
                        <p>{mediaData.overview}</p>
                        <p>{
                            mediaData.video ? "Yes" : "No"
                        }</p>
                        <div className=' mt-4 flex overflow-x-scroll'>
                            {  mediaVideos?.length > 0 ?
                                mediaVideos.map(video => {
                                    return <iframe title='video' key={video.id} width="420" height="315"
                                        src={`https://www.youtube.com/embed/${video.key}`}>
                                    </iframe>
                                }): "no videos"
                            }


                        </div>
                    </div>
                    :
                    "No Poster | Press for more"
            }
        </div>
    )
}

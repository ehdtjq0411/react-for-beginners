import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Movie from '../components/Movie';

function Detail(){
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        setDetail(json.data.movie);
        setLoading(false);
    }

    useEffect(()=>{
        getMovie();
    }, []);

    return (
        <div>
            {
                loading ? 
                <h1>Loading...</h1> :
                <div>
                    <Movie 
                        key={detail.id}
                        id={detail.id}
                        coverImg={detail.medium_cover_image}
                        title={detail.title}
                        summary={detail.summary}
                        genres={detail.genres}
                    />
                </div>
            }
        </div>

        // <Movie 
        //     key={detail.id}
        //     id={detail.id}
        //     coverImg={detail.medium_cover_image}
        //     title={detail.title}
        //     summary={detail.summary}
        //     genres={detail.genres}
        // />
    );
}

export default Detail;
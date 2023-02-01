import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { IMovie } from '../../interfaces/movie';
import { IOnlyMovie } from '../../interfaces/onlyMovie';


const imageUrl = import.meta.env.VITE_IMG;

interface Props {
    movie: IMovie | IOnlyMovie
    showLink?: boolean
}

const MovieCard = ({movie, showLink = true}: Props) => {
    return (
        <div className='movie-card'>
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default MovieCard
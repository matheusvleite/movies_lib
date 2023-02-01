import { Link, useParams } from 'react-router-dom';
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs';
import './Movie.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Movie = () => {
  const { id } = useParams();

  const { document: movie, loading, error } = useFetchDocument(id)

  const formatCurrency = (number: number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: "USD",
    })
  }

  return (
    <div className='movie-page'>
      <div className="loading">
        <Link to="/">Voltar</Link>
        {loading && <p>Carregando...</p>}
      </div>
      {movie && <>
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3>
            <BsWallet2 /> Orçamento:
          </h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="info">
          <h3>
            <BsGraphUp /> Receita:
          </h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
          <h3>
            <BsHourglassSplit /> Duração:
          </h3>
          <p>{movie.runtime} minutos</p>
        </div>
        <div className="info description">
          <h3>
            <BsFillFileEarmarkTextFill /> Descrição:
          </h3>
          <p>{movie.overview}</p>
        </div>
      </>}
    </div>
  )
}

export default Movie
import { Link, useSearchParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import '../Grid.css';
import { useFetchQuery } from '../../hooks/useFetchQuery';

const Search = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { documents: movie, loading, error } = useFetchQuery(query)

  return (
    <div className='container'>
      <h2 className='title'>Resultados para: <span className="query-text">{query}</span></h2>
      <div className="loading">
        <Link to="/">Início</Link>
        {loading && <p>Carregando...</p>}
      </div>
      <div className="movies-container">
        {movie && movie.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
        {movie && !loading && movie.length === 0 && (
          <h2>Não encontramos nada relacionado a sua pesquisa :(</h2>
        )}
      </div>
    </div>
  )
}

export default Search
import MovieCard from '../../components/MovieCard/MovieCard';
import '../Grid.css';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';


const Home = () => {

  const { documents: movies, loading, error } = useFetchDocuments();

  return (
    <div className='container'>
      <h2 className='title'>Melhores filmes:</h2>
      <div className="movies-container">
        {error && <p>{error}</p> }
        {loading && <p>Carregando...</p>}
        {movies && movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
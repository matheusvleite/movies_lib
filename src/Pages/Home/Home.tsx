import MovieCard from '../../components/MovieCard/MovieCard';
import '../Grid.css';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import Loading from '../../components/Loading/Loading';


const Home = () => {

  const { documents: movies, loading, error } = useFetchDocuments();

  return (
    <div className='container'>
      <h2 className='title'>Melhores filmes:</h2>
      <div className="loading">
        {loading && <Loading />}
      </div>
      <div className="movies-container">
        {movies && movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
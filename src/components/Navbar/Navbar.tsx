import {FormEvent, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!search) return 
        navigate(`/search?q=${search}`);
        setSearch('');
    }

    return (
        <header className='Header'>
            <nav>
                <h2>
                    <Link to="/">
                        <BiCameraMovie />MoviesLib
                    </Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder='Busque um filme' 
                    onChange={e => setSearch(e.target.value)} 
                    value={search}
                    />
                    <button type='submit'>
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
        </header>
    )
}

export default Navbar
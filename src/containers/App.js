import React, {useState, useEffect} from 'react';
//import { robots_data } from '../robots';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary'

function App(){
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, []);


    const onSearchChange = (e) => {
        setSearchField(e.currentTarget.value);
    }

    const filteredRobots = robots.filter(r => {
        return r.name.toLowerCase().includes(searchField.toLowerCase())
    });


  return !robots.length ? <h1>Loading</h1> :
    (
    
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
        
    )
    

}

export default App;
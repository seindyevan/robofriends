//import React, {useState, useEffect} from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { robots_data } from '../robots';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary'
import { requestRobots, setSearchField } from '../actions'


const mapStateToProps = (state) =>{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

//function App(props){
class App extends Component {
    componentDidMount(){
        this.props.onRequestRobots();
    }

    //const [robots, setRobots] = useState([]);
 
    // const [searchField, setSearchField] = useState('');

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => setRobots(users))
    // }, []);

    
    // const onSearchChange = (e) => {
    //     setSearchField(e.currentTarget.value);
    // }

    // const filteredRobots = robots.filter(r => {
    //     return r.name.toLowerCase().includes(searchField.toLowerCase())
    // });


  

    render() {
        const { searchField, onSearchChange, robots, isPending} = this.props;

        const filteredRobots = robots.filter(r => {
            return r.name.toLowerCase().includes(searchField.toLowerCase())
        });

        
        //return !robots.length ? <h1>Loading</h1> :
        return isPending ? <h1>Loading</h1> :
        (

            <div className='tc'>
                {/* <h1>RoboFriends</h1> */}
                <Header/>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            
        )
    }
  

}

//higher order componentt
export default connect(mapStateToProps, mapDispatchToProps)(App);
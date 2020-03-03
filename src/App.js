import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ""
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(respose => respose.json())
            .then(users => this.setState({monsters: users}));

    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLocaleString()))


        return (
            <div className="App">
                <SearchBox placeholder={"Search Monster"} handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }

}

export default App;


/*      <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <button className="App-header" onClick={() => this.setState({string: this.state.string2})}> Swith
                        text bitch
                    </button>
                    <h2>{this.state.string}</h2>
                    <h3>{this.state.string2}</h3>
                </header>*/
import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import {ButtonTest} from "./components/buttonTest/buttonTest.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
            lidisAge: 12
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
    chemer = () =>{
       this.setState( {lidisAge : this.state.lidisAge + 1});
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLocaleString()))


        return (
            <div className="App">
                <h1>Yohannes Begashaw is the real MONSTER here</h1>
                <h2>NO One! Absolutely NO ONE! Wants to be like him!!!!!</h2>
                <h1>{this.state.lidisAge}</h1>
               <ButtonTest name="chemer fekes chemer" chemer={this.chemer}/>
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
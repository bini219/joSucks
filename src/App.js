import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";

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

    render() {
        return (
            <div className="App">
                <input type="search" placeholder="Input search parameter" onChange={e => {
                    this.setState({searchField: e.target.value}, () =>console.log(this.state));
                    /*console.log(this,this.state.monsters.map(monst=> monst.name) + this.state.searchField)*/
                }}/>
                <CardList monsters={this.state.monsters}/>
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
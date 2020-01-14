import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
      isLoading: true, 
      results: [] 
      
    }
  }

  componentDidMount() { 
    this.fetchData(); 
  }

  fetchData() {
    fetch ('https://randomuser.me/api?results=25') 
    .then(response => response.json()) 
    .then(parsedJSON => parsedJSON.results.map(results=> ({ 
      name: `${results.name.first} ${results.name.last}`,
      picture: `${results.picture.thumbnail}`
     })))
    .then(results=> this.setState({
      results,
      isLoading: false 
    }))
    .catch(error => console.log("parsing failed", error)) 
}

render() {
  const {isLoading, results} = this.state;
  return (
    <div className="body">
      <header>Address List</header>
    
     <div className={`content ${isLoading ? 'is-loading' : ''}`}> {}
        <div className="results-info">
          {
           
            !isLoading && results.length > 0 ? results.map(result => { 
              const {name, picture} = result; 
              return <div key={results} title={name}> {}
                <p className="name-line">{name} <button className="like-button">Details</button></p>
                <img src={picture}/>
            
                <br></br>
                </div>
            }) : null 
          }
        </div>
      </div>
    </div>
  )
}
}








export default App;

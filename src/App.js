import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';

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
      Name: `${results.name.first} ${results.name.last}`,
      Picture: `${results.picture.thumbnail}`,
      CityandState: `${results.location.city} ${results.location.state}`,
      Address: `${results.location.street.number} ${results.location.street.name}`,
      Email: `${results.email}`,
      Username: `${results.login.username}`,
      Password: `${results.login.password}`,
      DOB: `${results.dob.date}`,
      Age: `${results.dob.age}`,
      Cell: `${results.cell}`
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
      <header>Contact List</header>
    
     <div className={`content ${isLoading ? 'is-loading' : ''}`}> {}
        <div className="results-info">
          {
           
            !isLoading && results.length > 0 ? results.map(result => { 
              const {Name, Picture, Email} = result; 
              return <div key={results} title={Name}> {}
                <li className="Name">{Name}</li>
               <img src={Picture}/>
               <Toggle>
               <li className="Email">{Email}</li>

               </Toggle>
               
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

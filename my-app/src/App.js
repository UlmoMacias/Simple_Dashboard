import { Component } from 'react'
import './App.css';
import Navigation from './components/Navigation';
import Tareas from './components/Tareas';
import { todos } from './todos.json';


class App extends Component {
  constructor(){
    super();
    this.state={
      title : 'Tablero tareas',
      ntareas : 10,
      todos
    }
  }

  




  render(){

    return (
    <div className="App">
      <header className="App-header">
        <Navigation title={this.state.title} ntareas={todos.length}/>
        
        

        <Tareas/>
      
        <div className="card-footer">
          <p>
            Facultad de Ciencias.
          </p>
      
        </div>

      </header>
    </div>
    
  );

  }
  
}

export default App;

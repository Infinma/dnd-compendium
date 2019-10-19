import React from 'react';
import './App.css';
import SpellContainer from './components/SpellComponent/SpellContainer/SpellContainer';

class App extends React.Component {

  render() {
    return (
      <div className="app-container" >
        <SpellContainer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SpellContainer from './components/SpellComponent/SpellContainer/SpellContainer';
import ItemContainer from './components/ItemComponent/ItemContainer/ItemContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spells: true,
      items: false
    };
    this.displayContainer = this.displayContainer.bind(this);
  }

  displayContainer(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <div>
          <Header displayContainer={ this.displayContainer } />
        </div>
        <div className="module-container" >
          <div className={ this.state.spells ? '' : 'disabled-container' }>
            <SpellContainer />
          </div>
          <div className={ this.state.items ? '' : 'disabled-container' }>
            <ItemContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

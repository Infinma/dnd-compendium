import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      spells: true,
      items: false
    };
    this.activePage = this.activePage.bind(this);
  }

  activePage(code) {
    let active = {
      spells: code === 'SPELLS',
      items: code === 'ITEMS'
    }
    this.setState(active);
    this.props.displayContainer(active);
  }

  render() {
    return (    
      <header className="header-container">
        <h1>DnD Compendium</h1>
        <nav className="header-nav">
          <ul>
            <li
              onClick={ () => this.activePage('SPELLS') }
              className={ this.state.spells ? 'active' : '' }
            >SPELLS</li>
            <li
              onClick={ () => this.activePage('ITEMS') }
              className={ this.state.items ? 'active' : '' }
            >ITEMS</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

import React from 'react';
import './SpellList.css';
import Spell from '../Spell/Spell';

class SpellList extends React.Component {

  render() {
    let spellDivs = this.props.spellList.map((spell) => {
      return (
        <Spell 
          key={ spell.id }
          spell={ spell }
          displaySpell={ this.props.displaySpell } 
        />
      );
    });
    return (
      <div>
        <div className="spell-list-header">
          <ul>
            <li>Level</li>
            <li>Spell</li>
          </ul>
        </div>
        { spellDivs }
      </div>
    );
  }
}

export default SpellList;

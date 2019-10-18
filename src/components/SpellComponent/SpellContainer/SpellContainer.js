import React from 'react';
import { SpellData } from '../../../lib/DataLoader';
import SpellList from '../SpellList/SpellList';
import SpellForm from '../SpellForm/SpellForm';

class SpellContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      fullSpellList: SpellData(),
      spellList: SpellData()
    };
    this.displaySpell = this.displaySpell.bind(this);
    this.filterSpell = this.filterSpell.bind(this);
  }

  filterSpell(form) {
    this.setState(() => {
      let filteredSpellList = this.state.fullSpellList.filter((spell) => {
        let spellName = spell.name.toLowerCase();
        return spellName.includes(form.name.toLowerCase());
      })
      return {
        spellList: filteredSpellList
      };
    })
  }

  displaySpell(id) {
    this.setState((prevState) => {
      let displayedSpellList = prevState.spellList.map((spell) => {
        if (id === spell.id) {
          spell.display = !spell.display
        }
        return spell;
      });
      return {
        spellList: displayedSpellList
      }
    });
  }

  render() {
    return (
      <div className="spell-master-container">
        <SpellForm filterSpell={ this.filterSpell } />
        <SpellList spellList={ this.state.spellList } displaySpell={ this.displaySpell } />
      </div>
    );
  }
}

export default SpellContainer;

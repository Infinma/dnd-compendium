import React from 'react';
import { SpellData } from '../../../lib/DataLoader';
import { SpellKey } from '../../../lib/KeyLoader';
import { SortByLevel, SortByName } from '../../../lib/Utils';
import SpellList from '../SpellList/SpellList';
import SpellForm from '../SpellForm/SpellForm';

class SpellContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      fullSpellList: SortByName(SpellData()),
      spellList: SortByName(SpellData()),
      sort: {
        spell: true,
        level: false
      }
    };
    this.displaySpell = this.displaySpell.bind(this);
    this.filterSpell = this.filterSpell.bind(this);
    this.sortSpell = this.sortSpell.bind(this);
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

  sortSpell(method) {
    this.setState((prevState) => {
      if ((prevState.sort.spell && method === SpellKey.SPELL) ||
      (prevState.sort.level && method === SpellKey.LEVEL)) {
        let fullSpellList = [...prevState.fullSpellList];
        let spellList = [...prevState.spellList];
        return {
          fullSpellList: fullSpellList.reverse(),
          spellList: spellList.reverse(),
          sort: {
            spell: method === SpellKey.SPELL,
            level: method === SpellKey.LEVEL
          }
        };
      } else if (method === SpellKey.SPELL || method === SpellKey.LEVEL) {
        let SortMethod = method === SpellKey.SPELL ? SortByName : SortByLevel;
        return {
          fullSpellList: SortMethod(prevState.fullSpellList),
          spellList: SortMethod(prevState.spellList),
          sort: {
            spell: method === SpellKey.SPELL,
            level: method === SpellKey.LEVEL
          }
        };
      }
      return {};
    });
  }

  render() {
    return (
      <div className="spell-master-container">
        <SpellForm filterSpell={ this.filterSpell } />
        <SpellList
          spellList={ this.state.spellList }
          displaySpell={ this.displaySpell }
          sortSpell={ this.sortSpell }
        />
      </div>
    );
  }
}

export default SpellContainer;

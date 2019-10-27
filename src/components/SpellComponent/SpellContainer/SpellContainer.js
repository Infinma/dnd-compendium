import React from 'react';
import { SpellData } from '../../../lib/DataLoader';
import { SpellKey } from '../../../lib/KeyLoader';
import { SortByLevel, SortByName, FilterHelper } from '../../../lib/Utils';
import SpellList from '../SpellList/SpellList';
import SpellForm from '../SpellForm/SpellForm';

class SpellContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      fullSpellList: SortByName(SpellData()),
      filteredSpellList: SortByName(SpellData()),
      spellList: SortByName(SpellData()),
      sort: {
        spell: true,
        level: false
      },
      name: ''
    };
    this.displaySpell = this.displaySpell.bind(this);
    this.filterSpell = this.filterSpell.bind(this);
    this.searchSpell = this.searchSpell.bind(this);
    this.sortSpell = this.sortSpell.bind(this);
    this.resetSpell = this.resetSpell.bind(this);
  }

  filterSpell(form) {
    this.setState(() => {
      let filteredSpellList = this.state.fullSpellList.filter((spell) => {
        let criteria = true;
        if (form.active[SpellKey.LEVEL]) {
          criteria = criteria && form[SpellKey.LEVEL][spell.level];
        }
        if (form.active[SpellKey.SCHOOL]) {
          criteria = criteria && form[SpellKey.SCHOOL][spell.school];
        }
        if (form.active[SpellKey.CLASS]) {
          let validClass = false;
          let classArr = spell.classes.split(', ');
          for (let i in classArr) {
            if (form[SpellKey.CLASS][classArr[i]]) {
              validClass = true;
              break;
            }
          }
          criteria = criteria && validClass;
        }
        if (form.active[SpellKey.SOURCE]) {
          criteria = criteria && form[SpellKey.SOURCE][spell.origin];
        }
        if (form.active[SpellKey.RITUAL]) {
          criteria = criteria && spell.ritual;
        }
        return criteria;
      });
      return {
        filteredSpellList:  filteredSpellList,
        spellList: FilterHelper(filteredSpellList, 'name', this.state.name),
      };
    });
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

  searchSpell(form) {
    this.setState(() => {
      return {
        spellList: FilterHelper(this.state.filteredSpellList, 'name', form.name),
        name: form.name
      };
    });
  }

  sortSpell(method) {
    this.setState((prevState) => {
      if ((prevState.sort.spell && method === SpellKey.SPELL) ||
      (prevState.sort.level && method === SpellKey.LEVEL)) {
        let fullSpellList = [...prevState.fullSpellList];
        let filteredSpellList = [...prevState.filteredSpellList];
        let spellList = [...prevState.spellList];
        return {
          fullSpellList: fullSpellList.reverse(),
          filteredSpellList: filteredSpellList.reverse(),
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
          filteredSpellList: SortMethod(prevState.filteredSpellList),
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

  resetSpell() {
    this.setState((prevState) => {
      return {
        filteredSpellList: prevState.fullSpellList,
        spellList: FilterHelper(prevState.fullSpellList, 'name', this.state.name),
      };
    });
  }

  render() {
    return (
      <div className="spell-master-container">
        <SpellForm 
          filterSpell={ this.filterSpell }
          searchSpell={ this.searchSpell }
          resetSpell={ this.resetSpell }
        />
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

import React from 'react';
import './SpellFormAdvanced.css';
import { SpellKey, SpellLevels, SpellSchools, SpellClasses } from '../../../../lib/KeyLoader';
import { ObjectContains } from '../../../../lib/Utils';

class SpellFormAdvanced extends React.Component {
  constructor() {
    super();
    this.state = {
      active: {
        [SpellKey.LEVEL]: false,
        [SpellKey.SCHOOL]: false,
        [SpellKey.CLASS]: false
      },
      [SpellKey.LEVEL]: {
        Cantrip: false,
        '1st-level': false,
        '2nd-level': false,
        '3rd-level': false,
        '4th-level': false,
        '5th-level': false,
        '6th-level': false,
        '7th-level': false,
        '8th-level': false,
        '9th-level': false
      },
      [SpellKey.SCHOOL]: {
        Abjuration: false,
        Conjuration: false,
        Divination: false,
        Enchantment: false,
        Evocation: false,
        Illusion: false,
        Necromancy: false,
        Transmutation: false
      },
      [SpellKey.CLASS]: {
        Bard: false,
        Cleric: false,
        Druid: false,
        Paladin: false,
        Ranger: false,
        Sorcerer: false,
        Warlock: false,
        Wizard: false
      }
    };
    this.createCheckboxArray = this.createCheckboxArray.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.submitFilter = this.submitFilter.bind(this);
  }

  createCheckboxArray(arr, type) {
    let checkboxList = arr.map((info, i) => {
      return (
        <label key={i}>
          <input
            type="checkbox"
            name={info}
            onChange={ this.updateCheckbox }
            checked={ this.state[type][info] }
          />
          {` ${info}`}
        </label>
      );
    });
    return checkboxList;
  }

  updateCheckbox(e) {
    const { name, checked } = e.target;
    let type;
    if (SpellClasses.includes(name)) { 
      type = SpellKey.CLASS; 
    } else if (SpellLevels.includes(name)) {
      type = SpellKey.LEVEL;
    } else {
      type = SpellKey.SCHOOL;
    }
    this.setState((prevState) => {
      let newState = { ...prevState[type] };
      newState[name] = checked;
      if (!checked) {
        if (ObjectContains(newState, true)) {
          return {
            [type]: newState
          };
        }
      }
      let active = { ...prevState.active }
      active[type] = checked;
      return {
        [type]: newState,
        active: active
      };
    })
  }

  submitFilter(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  render() {
    let checkboxLevel = this.createCheckboxArray(SpellLevels, SpellKey.LEVEL);
    let checkboxSchool = this.createCheckboxArray(SpellSchools, SpellKey.SCHOOL);
    let checkboxClass = this.createCheckboxArray(SpellClasses, SpellKey.CLASS);
    return (
      <form className="adv-filter" onSubmit={ this.submitFilter }>
        <ul>
          <li className={ this.state.active.level ? 'active' : '' } >
            <p>LEVEL</p>
            { checkboxLevel }
          </li>
          <li className={ this.state.active.school ? 'active' : '' } >
            <p>SCHOOL</p>
            { checkboxSchool }
          </li>
          <li className={ this.state.active.class ? 'active' : '' } >
            <p>CLASS</p>
            { checkboxClass }
          </li>
        </ul>
        <button>APPLY</button>
      </form>
    );
  }
}

export default SpellFormAdvanced;

import React from 'react';
import './SpellFormAdvanced.css';
import { SpellKey, SpellLevels, SpellSchools, SpellClasses, 
  SpellSources } from '../../../../lib/KeyLoader';
import { ObjectContains } from '../../../../lib/Utils';

class SpellFormAdvanced extends React.Component {
  constructor() {
    super();
    this.state = {
      active: {
        [SpellKey.LEVEL]: false,
        [SpellKey.SCHOOL]: false,
        [SpellKey.CLASS]: false,
        [SpellKey.SOURCE]: false,
        [SpellKey.RITUAL]: false
      },
      [SpellKey.LEVEL]: {
        [SpellLevels[0]]: false,
        [SpellLevels[1]]: false,
        [SpellLevels[2]]: false,
        [SpellLevels[3]]: false,
        [SpellLevels[4]]: false,
        [SpellLevels[5]]: false,
        [SpellLevels[6]]: false,
        [SpellLevels[7]]: false,
        [SpellLevels[8]]: false,
        [SpellLevels[9]]: false
      },
      [SpellKey.SCHOOL]: {
        [SpellSchools[0]]: false,
        [SpellSchools[1]]: false,
        [SpellSchools[2]]: false,
        [SpellSchools[3]]: false,
        [SpellSchools[4]]: false,
        [SpellSchools[5]]: false,
        [SpellSchools[6]]: false,
        [SpellSchools[7]]: false
      },
      [SpellKey.CLASS]: {
        [SpellClasses[0]]: false,
        [SpellClasses[1]]: false,
        [SpellClasses[2]]: false,
        [SpellClasses[3]]: false,
        [SpellClasses[4]]: false,
        [SpellClasses[5]]: false,
        [SpellClasses[6]]: false,
        [SpellClasses[7]]: false
      },
      [SpellKey.SOURCE]: {
        [SpellSources[0]]: false,
        [SpellSources[1]]: false,
        [SpellSources[2]]: false,
        [SpellSources[3]]: false
      }
    };
    this.createCheckboxArray = this.createCheckboxArray.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.submitFilter = this.submitFilter.bind(this);
    this.updateActive = this.updateActive.bind(this);
  }

  createCheckboxArray(arr, type) {
    let checkboxList = arr.map((label, i) => {
      return (
        <label key={i}>
          <input
            type="checkbox"
            name={label}
            onChange={ this.updateCheckbox }
            checked={ this.state[type][label] }
          />
          {` ${label}`}
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
    } else if (SpellSchools.includes(name)) {
      type = SpellKey.SCHOOL;
    } else if (SpellSources.includes(name)) {
      type = SpellKey.SOURCE;
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
      let active = { ...prevState.active };
      active[type] = checked;
      return {
        [type]: newState,
        active: active
      };
    })
  }

  /** 
   * For the case where we only update active (Ex. Ritual)
  */
  updateActive(e) {
    const { name, checked } = e.target;
    this.setState((prevState) => {
      let active = {...prevState.active};
      active[name] = checked;
      return {
        active: active
      };
    });
  }

  submitFilter(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  render() {
    let checkboxLevel = this.createCheckboxArray(SpellLevels, SpellKey.LEVEL);
    let checkboxSchool = this.createCheckboxArray(SpellSchools, SpellKey.SCHOOL);
    let checkboxClass = this.createCheckboxArray(SpellClasses, SpellKey.CLASS);
    let checkboxSource = this.createCheckboxArray(SpellSources, SpellKey.SOURCE);
    return (
      <form className="adv-filter" onSubmit={ this.submitFilter }>
        <div className="check-filter">
          <div className={ this.state.active[SpellKey.LEVEL] ? 'active' : '' } >
            <p>LEVEL</p>
            { checkboxLevel }
          </div>
          <div className={ this.state.active[SpellKey.SCHOOL] ? 'active' : '' } >
            <p>SCHOOL</p>
            { checkboxSchool }
          </div>
          <div className={ this.state.active[SpellKey.CLASS] ? 'active' : '' } >
            <p>CLASS</p>
            { checkboxClass }
          </div >
          <div className={ this.state.active[SpellKey.SOURCE] ? 'active' : '' } >
            <p>SOURCE</p>
            { checkboxSource }
          </div>
          <div className={ this.state.active[SpellKey.RITUAL] ? 'active' : '' } >
            <p>RITUAL</p>
            <label>
              <input
                type="checkbox"
                name={ SpellKey.RITUAL }
                onChange={ this.updateActive }
                checked={ this.state.active[SpellKey.RITUAL] }
              />
              {` Is Ritual`}
            </label>
          </div>
        </div>
        <button>APPLY</button>
      </form>
    );
  }
}

export default SpellFormAdvanced;

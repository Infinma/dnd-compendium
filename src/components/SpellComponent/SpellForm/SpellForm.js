import React from 'react';
import './SpellForm.css';
import SpellFormAdvanced from './SpellFormAdvanced/SpellFormAdvanced';

class SpellForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      advancedFilter: false
    }
    this.updateForm = this.updateForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.showAdvancedFilter = this.showAdvancedFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  updateForm(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    this.props.searchSpell({name: value});
  }

  submitForm(filter) {
    this.props.filterSpell(filter);
  }

  showAdvancedFilter() {
    this.setState((prevState) => {
      return {
        advancedFilter: !prevState.advancedFilter
      };
    });
  }

  resetFilter() {
    this.props.resetSpell();
    this.showAdvancedFilter();
  }

  render() {
    return (
      <div className="spell-form" >
        <form>
          <input
            type="text"
            name="name"
            value={ this.state.name }
            placeholder="SPELL"
            onChange={ this.updateForm }
          />
          <br />
        </form>
        <p 
          className="spell-show-filter" 
          onClick={ this.state.advancedFilter ? this.resetFilter : this.showAdvancedFilter }
        >
          {this.state.advancedFilter ? 'DISABLE ' : '' }ADVANCED FILTER
        </p>
        <div className={ this.state.advancedFilter ? 
          'spell-adv-filter' : 'disable-filter' } >
            <SpellFormAdvanced submitForm={ this.submitForm } />
        </div>
      </div>
    );
  }
}

export default SpellForm;

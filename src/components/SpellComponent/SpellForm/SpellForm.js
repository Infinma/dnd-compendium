import React from 'react';
import './SpellForm.css';

class SpellForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.updateForm = this.updateForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateForm(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    this.props.filterSpell({name: value});
  }

  submitForm(e) {
    e.preventDefault();
    this.props.filterSpell(this.state);
  }

  render() {
    return (
      <div className="spell-form" >
        <form onSubmit={ this.submitForm }>
          <input
            type="text"
            name="name"
            value={ this.state.name }
            placeholder="Spell"
            onChange={ this.updateForm }
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SpellForm;

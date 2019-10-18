import React from 'react';
import './Spell.css';

class Spell extends React.Component {
  constructor() {
    super();
    this.formatClass = this.formatClass.bind(this);
    this.formatDescription = this.formatDescription.bind(this);
  }

  formatClass(classes) {
    let classList = '';
    for (let i in classes) {
      classList += classes[i][0].toUpperCase() + classes[i].slice(1).toLowerCase();
      if (i < classes.length - 1) {
        classList += ', ';
      }
    }
    return classList;
  }

  formatDescription(description) {
    let descArr = description.split('\n');
    let descTags = descArr.map((text, i) => {
      if (i === 0) {
        return <p key={ i }><span className="descriptor">Description:</span> { text }<br/></p>;
      }
      return <p key={ i }>{ text }<br/></p>;
    })
    return descTags;
  }

  render() {
    let { id, name, type, casting_time, range, components, display,
      duration, classes, description, level } = this.props.spell;
    let classList = this.formatClass(classes);
    let descTags = this.formatDescription(description);
    return (
      <div className="spell-container">
        <div className="spell-header" onClick={ () => this.props.displaySpell(id) }>
          <ul>
            <li className="spell-header-level">{ level }</li>
            <li>{ name }</li>
          </ul>
          <p className="toggle">{ display ? '-' : '+' }</p>
        </div>
        <div className={ display ? 'spell-desc' : 'hidden' } >
          <h1 className="main">{ name }</h1>
          <p className="type">{ type }</p>
          <p><span className="descriptor">Casting Time:</span> { casting_time }</p>
          <p><span className="descriptor">Range:</span> { range }</p>
          <p><span className="descriptor">Components:</span> { components.raw }</p>
          <p><span className="descriptor">Duration:</span> { duration }</p>
          <p><span className="descriptor">Classes:</span> { classList }</p>
          <br />
          { descTags }
        </div>
      </div>
    );
  }
}

export default Spell;

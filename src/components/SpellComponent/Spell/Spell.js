import React from 'react';
import './Spell.css';

class Spell extends React.Component {
  constructor() {
    super();
    this.formatDescription = this.formatDescription.bind(this);
  }

  formatDescription(desc) {
    let descArr = desc.split('\n');
    descArr = descArr.filter((text) => {
      if (text !== '') {
        return true;
      }
      return false;
    });
    let descTags = descArr.map((text, i) => {
      if (i === 0) {
        return <p key={ i }><span className="descriptor">Description:</span> { text }</p>;
      }
      return <p key={ i }><br/>{ text }</p>;
    })
    return descTags;
  }

  render() {
    let { id, name, casting_time, range, components, material, display, concentration,
      duration, classes, desc, level, school, ritual, higher_level, origin } = this.props.spell;
    
    let type = ritual ? `${level} ${school} (Ritual)` : `${level} ${school}`;
    let durationCon = concentration ? `Concentration, ${duration}` : duration;
    let materialComp = typeof material !== 'undefined' ? `${components} (${material})` : components;
    let description = this.formatDescription(desc);

    return (
      <div className="spell-container">
        <div className="spell-header" onClick={ () => this.props.displaySpell(id) }>
          <ul>
            <li className="spell-header-level">{ level }</li>
            <li className="spell-header-name">{ name }</li>
            <li className="toggle">{ display ? '-' : '+' }</li>
          </ul>
        </div>
        <div className={ display ? 'spell-desc' : 'hidden' } >
          <h1 className="main">{ name }</h1>
          <p className="type">{ type }</p>
          <p><span className="descriptor">Casting Time:</span> { casting_time }</p>
          <p><span className="descriptor">Range:</span> { range }</p>
          <p><span className="descriptor">Components:</span> { materialComp }</p>
          <p><span className="descriptor">Duration:</span> { durationCon }</p>
          <p><span className="descriptor">Classes:</span> { classes }</p>
          <br />
          { description }
          { typeof higher_level !== 'undefined' ? 
            <p><br/><span className="descriptor">At Higher Levels:</span> { higher_level }</p> :
            null
          }
          <p><br/><span className="descriptor">Source:</span> { origin }</p>
        </div>
      </div>
    );
  }
}

export default Spell;

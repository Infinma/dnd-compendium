import React from "react";
import "./Spell.css";

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
        return <p><span class="descriptor">Description:</span> { text }<br/></p>;
      }
      return <p>{ text }<br/></p>;
    })
    return descTags;
  }

  render() {
    let display = this.props.display;
    let { name, type, casting_time, range, components, 
      duration, classes, description, level } = this.props.spell;
    let classList = this.formatClass(classes);
    let descTags = this.formatDescription(description);
    return (
      <div>
        <div class="spell-header">
          <ul>
            <li>{ level }</li>
            <li>{ name }</li>
          </ul>
          <p class="toggle">{ display ? '-' : '+' }</p>
        </div>
        <div className={ display ? '' : 'hidden' } class="spell-desc">
          <h1 class="main">{ name }</h1>
          <p class="type">{ type }</p>
          <p><span class="descriptor">Casting Time:</span> { casting_time }</p>
          <p><span class="descriptor">Range:</span> { range }</p>
          <p><span class="descriptor">Components:</span> { components.raw }</p>
          <p><span class="descriptor">Duration:</span> { duration }</p>
          <p><span class="descriptor">Classes:</span> { classList }</p>
          { descTags }
        </div>
      </div>
    );
  }
}

export default Spell;

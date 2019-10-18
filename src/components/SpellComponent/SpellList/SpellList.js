import React from 'react';
import './SpellList.css';
import Spell from '../Spell/Spell';

class SpellList extends React.Component {
  constructor() {
    super();
    this.state = {
      spellList: [
        {
          "casting_time": "1 action",
          "classes": [
              "sorcerer",
              "wizard"
          ],
          "components": {
              "material": false,
              "raw": "V, S",
              "somatic": true,
              "verbal": true
          },
          "description": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\n\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
          "duration": "Instantaneous",
          "level": "cantrip",
          "name": "Acid Splash",
          "range": "60 feet",
          "ritual": false,
          "school": "conjuration",
          "tags": [
              "sorcerer",
              "wizard",
              "cantrip"
          ],
          "type": "Conjuration cantrip",
          "id": 0,
          "display": false
      },
      {
          "casting_time": "1 action",
          "classes": [
              "ranger",
              "wizard"
          ],
          "components": {
              "material": true,
              "materials_needed": [
                  "a tiny bell and a piece of fine silver wire"
              ],
              "raw": "V, S, M (a tiny bell and a piece of fine silver wire)",
              "somatic": true,
              "verbal": true
          },
          "description": "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.\n\nA mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.\n\nAn audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
          "duration": "8 hours",
          "level": "1",
          "name": "Alarm",
          "range": "30 feet",
          "ritual": true,
          "school": "abjuration",
          "tags": [
              "ranger",
              "wizard",
              "level1"
          ],
          "type": "1st-level abjuration (ritual)",
          "id": 1,
          "display": false
      },
      {
          "casting_time": "1 action",
          "classes": [
              "bard",
              "druid",
              "ranger"
          ],
          "components": {
              "material": true,
              "materials_needed": [
                  "a morsel of food"
              ],
              "raw": "V, S, M (a morsel of food)",
              "somatic": true,
              "verbal": true
          },
          "description": "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends.",
          "duration": "24 hours",
          "higher_levels": "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.",
          "level": "1",
          "name": "Animal Friendship",
          "range": "30 feet",
          "ritual": false,
          "school": "enchantment",
          "tags": [
              "bard",
              "druid",
              "ranger",
              "level1"
          ],
          "type": "1st-level enchantment",
          "id": 2,
          "display": false
        }
      ]
    };
    this.displaySpell = this.displaySpell.bind(this);
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
    let spellDivs = this.state.spellList.map((spell) => {
      return (
        <div class="spell-list">
          <Spell 
            key={ spell.id }
            spell={ spell }
            displaySpell={ this.displaySpell } 
          />
        </div>
      );
    });
    return (
      <div>
        <div class="spell-list-header">
          <ul>
            <li>Level</li>
            <li>Spell</li>
          </ul>
        </div>
        { spellDivs }
      </div>
    );
  }
}

export default SpellList;

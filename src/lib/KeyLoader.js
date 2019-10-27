export const SpellKey = {
  SPELL: 'spell',
  LEVEL: 'level',
  CANTRIP: 'Cantrip',
  CLASS: 'class',
  SCHOOL: 'school',
  SOURCE: 'source',
  RITUAL: 'ritual'
};
export const SpellLevels = [
  SpellKey.CANTRIP,
  '1st-level',
  '2nd-level',
  '3rd-level',
  '4th-level',
  '5th-level',
  '6th-level',
  '7th-level',
  '8th-level',
  '9th-level'
];
export const SpellSchools = [
  'Abjuration',
  'Conjuration',
  'Divination',
  'Enchantment',
  'Evocation',
  'Illusion',
  'Necromancy',
  'Transmutation'
];
export const SpellClasses = [
  'Bard',
  'Cleric',
  'Druid',
  'Paladin',
  'Ranger',
  'Sorcerer',
  'Warlock',
  'Wizard'
];
export const SpellSources = [
  "Player's Handbook",
  "Sword Coast Adventurer's Guide",
  "Elemental Evil Player's Companion",
  "Xanathar's Guide to Everything"
];
export const SpellSourceMap = {
  [SpellSources[0]]: "Player's Handbook",
  [SpellSources[1]]: "Sword Coast Adventurer's Guide",
  [SpellSources[2]]: "Elemental Evil Player's Companion",
  [SpellSources[3]]: "Xanathar's Guide to Everything"
};

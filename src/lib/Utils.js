import { SpellKey } from './KeyLoader';

function nameCompare(x, y) {
  if (x.name < y.name) {
    return -1;
  } else if (x.name > y.name) {
    return 1;
  }
  return 0;
};

function levelCompare(x, y) {
  if (x.level < y.level) {
    return -1;
  } else if (x.level > y.level) {
    return 1;
  } else {
    return nameCompare(x, y);
  }
};

export function SortByLevel(spellList) {
  let cantripList = spellList.filter((spell) => {
    return spell.level === SpellKey.CANTRIP;
  });
  let levelList = spellList.filter((spell) => {
    return spell.level !== SpellKey.CANTRIP;
  });
  return cantripList.sort(nameCompare).concat(levelList.sort(levelCompare));
}

export function SortByName(spellList) {
  return spellList.sort(nameCompare);
}

export function FilterHelper(arr, category, comparison) {
  let filteredList = arr.filter((element) => {
    let el = element[category].toLowerCase();
    return el.includes(comparison.toLowerCase());
  })
  return filteredList;
}

export function ObjectContains(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

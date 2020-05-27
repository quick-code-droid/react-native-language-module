import {EN, CH} from '../actions/languageAction';
const initialLangState = {
  lang: 'en',
  message: require('../../language/english.json'), // default language
};

const languageReducer = (state = initialLangState, action) => {
  switch (action.type) {
    case EN:
      let newState = {...state};
      newState.lang = action.lang;
      newState.message = require(`../../language/english.json`);
      return {...newState};
    case CH:
      newState = {...state};
      newState.lang = action.lang;
      newState.message = require(`../../language/chinese.json`);
      return {...newState};
    default:
      state;
  }
  return {...state};
};

export default languageReducer;

export const EN = 'en';
export const CH = 'ch';
import AsyncStorage from '@react-native-community/async-storage';

/*
Action for changing language
*/
export const changeLanguage = lang => {
  return async dispatch => {
    try {
      //storing to local storage
      await AsyncStorage.setItem('lang', lang);
      dispatch({type: lang, lang: lang.toLowerCase()});
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadDefaultlangauge = () => {
  return async dispatch => {
    try {
      //fetching from local storage
      let result = await AsyncStorage.getItem('lang');
      if (!result) {
        return;
      }
      return dispatch({type: result, lang: result.toLocaleLowerCase()});
    } catch (error) {
      console.log(error);
    }
  };
};

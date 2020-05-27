import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import languageReducer from './src/store/reducers/languageReducer';
import Navigation from './src/Navigation/Navigation';
import ReduxThunk from 'redux-thunk';
enableScreens();
export const App = () => {
  const rootReducer = combineReducers({
    language: languageReducer,
  });
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return (
    <>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </>
  );
};

export default App;

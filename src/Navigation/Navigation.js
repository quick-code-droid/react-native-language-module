import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const stack = createStackNavigator();

// importing screens
import Home from '../components/Home';
import About from '../components/About';

import {useSelector} from 'react-redux';
import {loadDefaultlangauge} from '../store/actions/languageAction';

//stack navivators for home and about screen
function HomeStackNavigator() {
  return (
    <stack.Navigator keyboardHandlingEnabled={false}>
      <stack.Screen
        name="home"
        component={Home}
        options={{
          title: null,
          headerTintColor: '#000',
          headerTitleAlign: 'center',
        }}
      />
    </stack.Navigator>
  );
}

function AboutStackNavigator() {
  return (
    <stack.Navigator keyboardHandlingEnabled={false}>
      <stack.Screen
        name="initialLoader"
        component={About}
        options={{
          title: null,
          headerTintColor: '#000',
          headerTitleAlign: 'center', //
        }}
      />
    </stack.Navigator>
  );
}

//Drawer navigator
const Navigation = () => {
  const [lang, setLang] = useState({});
  const availableLanguage = useSelector(state => {
    return state.language;
  });

  const loadLanguage = async () => {
    try {
      dispatch(loadDefaultlangauge());
    } catch (error) {}
  };

  useEffect(() => {
    loadLanguage();
  }, []);

  useEffect(() => {
    setLang(availableLanguage.message);
  }, [availableLanguage]);

  return (
    <>
      <Drawer.Navigator
        drawerType="slide"
        drawerContentOptions={{
          activeTintColor: '#ED7B04',
          inactiveTintColor: '#000',
          inactiveBackgroundColor: '#fff',
          labelStyle: {
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          name="home"
          component={HomeStackNavigator}
          options={{
            title: lang['home'],
          }}
        />
        <Drawer.Screen
          name="about"
          component={AboutStackNavigator}
          options={{
            title: lang['about'],
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default Navigation;

import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
const About = props => {
  const [lang, setLang] = useState({});
  const availableLanguage = useSelector(state => {
    return state.language;
  });

  useEffect(
    params => {
      setLang(availableLanguage.message);
    },
    [availableLanguage],
  );

  props.navigation.setOptions({
    title: lang['about'],
  });

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{lang['this is about page']}</Text>
      </View>
    </>
  );
};

export default About;

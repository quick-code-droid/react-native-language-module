import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {changeLanguage} from '../store/actions/languageAction';
import {useSelector, useDispatch} from 'react-redux';
const Home = props => {
  const dispatch = useDispatch();
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

  const onChangeLanguage = lang => {
    dispatch(changeLanguage(lang));
  };

  props.navigation.setOptions({
    title: lang['home'],
  });
  return (
    <>
      <View style={styles.container}>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 16}}>{lang['translation']}</Text>
          <Text style={{fontSize: 16}}>
            {lang['the translation working correctly']}
          </Text>
          <Text style={{fontSize: 16}}>{lang['quick code droid']}</Text>
        </View>
        <View
          style={{
            ...styles.btnContainer,
            backgroundColor: 'red',
          }}>
          <TouchableOpacity
            onPress={() => {
              onChangeLanguage('ch');
            }}>
            <Text style={styles.btnText}>{lang['chinese']}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.btnContainer,
            backgroundColor: 'blue',
          }}>
          <TouchableOpacity
            onPress={() => {
              onChangeLanguage('en');
            }}>
            <Text style={styles.btnText}>{lang['english']}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: '50%',
  },
  btnText: {textAlign: 'center', color: 'white'},
});

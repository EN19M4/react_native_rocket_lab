import { Text, View, Button, StyleSheet } from 'react-native';

export default function Main({ navigation }) {
    const loadPage = () => {
        navigation.navigate('ToDo');
    }
  return (
    <View style = {gStyle.main}>
      <Text style = {gStyle.tittle}>Hello!</Text>
      <Text style = {gStyle.tittle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</Text>
      <Button title='Перейти к Todo' onPress={loadPage}/>
    </View>
  );
};

const gStyle = StyleSheet.create ({
    main: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black'
    },
    tittle: {
        fontSize: 20,
        color: 'white',
        
    }
})
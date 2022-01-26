import React, {useState, useEffect} from 'react';
import { FlatList,SafeAreaView,TouchableOpacity, TextInput, StyleSheet ,Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useWindowDimensions} from 'react-native';
import axios from 'axios';

const Page = () => {
    const [todos, setTodos] = useState([]);
    const [textInput, setTextInput] = useState('');
    
    useEffect(() => {
      axios.get("http://localhost:3000/").then((response) =>{
        setTodos(response.data) 
      });
  })

    const onSubmitHandler = () => {
      if (textInput != '') {
              const newTodo = {
                id: Date.now(),
                task: textInput,
              };
        axios.post("http://localhost:3000/create", {newTodo: newTodo})
        setTextInput('');
      }
    }

    const ListItem = ({todos}) => {
        return (
          <View style={styles.listItem}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'black',
                }}>
                {todos.task}
              </Text>
            </View>
          </View>
        );
      };

      const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaView>
        <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, height: windowHeight- 60, backgroundColor: 'black' }}
        data={todos}
        renderItem={({item}) => <ListItem todos={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={textInput}
            placeholder="Add Todo"
            onChangeText={text => setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={onSubmitHandler}>
          <View style={styles.iconContainer}>
            <Icon name="add" color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    footer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'black',
    },
    inputContainer: {

      paddingHorizontal: 20,
      elevation: 40,
      backgroundColor: 'white',
      flex: 1,
      marginVertical: 20,
      marginRight: 20,
      borderRadius: 30,
    },
    iconContainer: {
      height: 50,
      width: 50,
      backgroundColor: 'blue',
      elevation: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: 'white',
    },
    main: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black'
    },
    listItem: {
        padding: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 30,
        marginVertical: 10,
    }
});

export default Page;
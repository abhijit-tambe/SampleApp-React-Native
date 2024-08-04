import React, { useState, useCallback } from 'react';
import { View, Text, Button, TextInput, Label, StyleSheet } from 'react-native';
import { NativeModules } from 'react-native';
import { SideNav } from '../SideNav';
import { menuConfig } from '../../common/constants';


const Home = () => {
    const [user, setUser] = useState({
        firstName: "", lastName: ""
        , age: 0
    });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    console.log('fn outside', firstName);
    console.log('ln outside', lastName);
    console.log('age outside', age);

    const { Counter, User } = NativeModules;
    console.log('Counter', Counter);
    console.log('constants', Counter.getConstants());
    console.log('User', User);
    console.log('User', User.getConstants());

    const handleCounter = () => {
        Counter.increment(7, (result) => {
            console.log('result', result);
        });
        console.log(Counter.getConstants());
    }

    const handleUser = useCallback(() => {
        console.log('fn', firstName);
        console.log('ln', lastName);
        console.log('age', age);

        User.create(firstName, lastName, age, (data) => {
            console.log('createdUser', data)
            setUser({ ...data })
        })

    }, [firstName, lastName, age])

    // const handleChange = (key, value) => {
    //         setUser({...user,[key]:value})
    //     }

    return (
        <View>
            <Text>
                {"Home screen"}
            </Text>
            <Button title={"click Me for Counter"} onPress={handleCounter}></Button>
            <View style={styles.attribute}>
                <Text>{"First Name : "} </Text>
                <TextInput style={styles.input} value={firstName}
                    //  autoCompleteType={false}
                    //  autoCorrect={false}
                    //  letterSpacing={0}
                    onChange={(e) => setFirstName(e.nativeEvent.target.value)} placeholder={'john'} > </TextInput>
            </View>
            <View style={styles.attribute}>
                <Text>{"Last Name : "} </Text>
                <TextInput style={styles.input} value={lastName} onChange={(e) => setLastName(e.nativeEvent.target.value)} placeholder={'doe'}> </TextInput>
            </View>
            <View style={styles.attribute}>
                <Text>{"Age : "} </Text>
                <TextInput style={styles.input} value={age} onChange={(e) => setAge(e.nativeEvent.target.value)} placeholder={'30'}> </TextInput>
            </View>

            <Button title={"create User"} onPress={() => handleUser()} />


            <View>
                <Text>{"created User"} </Text>
                <Text>{`First Name : ${user.firstName}`} </Text>
                <Text>{`Last Name : ${user.lastName}`} </Text>
                <Text>{`age : ${user.age}`} </Text>


            </View>


            <SideNav config={menuConfig}/>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 100,
        height: 20,
        letterSpacing: 0,
        // backgroundColor: '#9F9F9F',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        textAlign: 'center'
    },
    attribute: {
        // paddingHorizontal:'30%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        // justifyContent:'flex-end',
        // alignItems:'center',
        width: '100%',
        height: 50,
        // backgroundColor:'blue'
    }
})


export default Home;
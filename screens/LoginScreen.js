import React, {useState} from "react";
import {View, Text, TextInput, Button, ImageBackground, StyleSheet} from 'react-native';
import {firebase} from '../firebaseConfig';

const LoginScreen = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    
    const handleLogin = () =>{
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then ((userCredential) => {
                const user = userCredential.user;
                console.log('Inicio de sesión exitoso', user);
            })
            .catch((error) => {
                console.log('Error en el inicio de sesión', error);
            });
    };


    return (
        <View style={styles.cuadroface}>
            <img style={styles.image} src={'https://www.mundocuentas.com/wp-content/uploads/2020/11/Facebook-logo-mundocuentas.jpg'} alt="" />
             
        <View style={styles.container}>

            <Text>Email: </Text>
                
            <TextInput style={styles.cuadro}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Ingrese su correo electrónico"
            />
            <br></br>

            <Text>Password</Text>
            <TextInput style={styles.cuadro}
                value={password}
                onChangeText={(text) => setPassword(text)} 
                placeholder="Ingrese su contraseña"
                secureTextEntry 
            />
            <br></br>
            <Button  title="Iniciar sesión" onPress={handleLogin}/>
            <br></br>
            <Text style={styles.texcenter}>¿Olvidaste tu contraseña?</Text>
            <br></br>
            <Button color={'green'}  title="Registrarse" onPress={handleLogin}/>
        </View>
        
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        width: '500px',
        margin: '1000',
        padding: '30px',
        backgroundColor: "#f2f2f2",
        border: '1px solid #ccc',
        flex: '1',
        margin: '5%',
        marginRight:'36%',
        marginLeft:'36%',
        borderradius: '20px',
    },

    image:{
        width: '200px',
        height: 'auto',
    },

    cuadro:{
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #1877f2',
        borderRadius: '4px',
        color: '#818181',
        borderradius: '20px',
    },

    cuadroface:{
        width: '100%',
        padding: 'auto',
        marginBottom: '10px',
        border: '1px solid #1877f2',
        borderRadius: '4px',
        color: '#818181',
        borderradius: '10px',
    },
    boton:{
        width: '100%',
        padding: '10px',
        backgroundColor: '#1877f2',
        border: 'none',
        color: '#fff',
         fontWeight: 'bold',
        cursor: 'pointer'
    },
    texcenter:{
        textAlign:'center',
        color: 'blue',
    }
});
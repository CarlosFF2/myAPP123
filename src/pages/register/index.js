import { Avatar, Button, Card, Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity, View, ScrollView } from 'react-native';
import styles from '../../styles/login'
import { useNavigation } from '@react-navigation/native';


import React, { useState, useEffect } from 'react';
import { Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';



const Register = () =>  {

  //esta linea es para el imagePicker

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const navigation = useNavigation(); // Obtiene la instancia de navegación
  const navigateToRegistro = () => {
    navigation.navigate('Login'); // Navega a la pantalla de Registro
  };

  return(

<ScrollView>
<View style={styles.container}>

<Card style= {styles.card}>
  <Card.Cover style= {styles.image}
  source={{ uri: 'https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg' }} />

  <Card.Content>
  <Text style= {styles.title} variant="titleLarge">Registrate</Text>

  <TextInput style= {styles.inputs}
  label="Name"
  />
  <TextInput style= {styles.inputs}
  label="Email"
  />
  <TextInput  style= {styles.inputs}
  label="Password"
  secureTextEntry
  right={<TextInput.Icon icon="eye" />}
  />

  <TextInput  style= {styles.inputs}
  label="Confrim Password"
  secureTextEntry
  right={<TextInput.Icon icon="eye" />}
  />

  <Button style= {styles.button}
  icon="camera" mode="contained"
  onPress={pickImage}
  text = "outlined"
  >
  Selecciona una foto
  </Button>

  <View style={styles.imageContainer}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
  </View>

  </Card.Content>

  <Button style= {styles.button}
  icon="send" mode="contained">
  Registrarme
  </Button>

    <View>
      <TouchableOpacity onPress={navigateToRegistro}>
       <Text style= {styles.text}>
        O Inicia Sesion 
      </Text>
       </TouchableOpacity>
    </View>

</Card>
</View>
</ScrollView>
  );
} 
export default Register;
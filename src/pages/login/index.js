// LoginScreen.js
import { Button, Card, Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import styles from '../../styles/login';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyComponent = () =>  {

  const navigation = useNavigation(); // Obtiene la instancia de navegación
  const navigateToRegistro = () => {
    navigation.navigate('Registro'); // Navega a la pantalla de Registro
  };

  return(
    <View style={styles.container}>
      <Card style= {styles.card}>
    
      <Card.Cover style= {styles.image}
      source={{ uri: 'https://cdn.pixabay.com/photo/2019/08/26/12/32/feather-4431599_1280.jpg' }} />

      <Card.Content>
        <Text style= {styles.title} variant="titleLarge">Iniciar Sesion</Text>

        <TextInput style= {styles.inputs}
        label="Email"
        />
        <TextInput  style= {styles.inputs}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        />
      </Card.Content>

      <Button style= {styles.button}
      icon="send" mode="contained" onPress={() => console.log('Pressed')}>
      
      </Button>

        <View>
          <TouchableOpacity onPress={navigateToRegistro}>
            <Text style= {styles.text}>
              No tienes una cuenta ?
            </Text>
          </TouchableOpacity>
        </View>

      </Card>
     
    </View> 
  ); 
} 

export default MyComponent;
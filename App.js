import React from 'react'
import { SafeAreaView, StyleSheet, FlatList, Image, View } from 'react-native'
import { Card, Title, Paragraph, Button } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const books = [
  { id: '1', title: 'A Biblioteca da meia noite', author: 'Machado de Assis', imageUrl: 'https://m.media-amazon.com/images/I/51kAYMwbQIL._SY445_SX342_.jpg', description: 'Livro Biblioteca da meia noite' },
  { id: '2', title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', imageUrl: 'https://m.media-amazon.com/images/I/51-9DsDM4DL._SY445_SX342_.jpg', description: 'Descrição do Memórias Póstumas' },
  { id: '3', title: 'O Senhor dos Anéis', author: 'José de Alencar', imageUrl: 'https://m.media-amazon.com/images/I/51yxqpcD9iL._SY445_SX342_.jpg', description: 'Descrição do Senhor dos Anéis' },
  { id: '4', title: 'Iracema', author: 'José de Alencar', imageUrl: 'https://m.media-amazon.com/images/I/51-9DsDM4DL._SY445_SX342_.jpg', description: 'Descrição do Iracema' },
  { id: '5', title: 'Grande Sertão: Veredas', author: 'João Guimarães Rosa', imageUrl: 'https://m.media-amazon.com/images/I/51wdOrz6uNL._SY445_SX342_.jpg', description: 'Descrição do Grande Sertão' }
]

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={books} renderItem={({ item }) => (
                                                                                                                                     <Card style={styles.card}>
                                                                                                                                       <Card.Content>
                                                                                                                                         <Image source={{ uri: item.imageUrl }} style={styles.image} />
                                                                                                                                         <Title>{item.title}</Title>
                                                                                                                                         <Paragraph>{item.author}</Paragraph>
                                                                                                                                         <Button mode="contained" onPress={() => navigation.navigate('Detalhes da Compra', { book: item })}>
                                                                                                                                           Ver Detalhes
                                                                                                                                         </Button>
                                                                                                                                       </Card.Content>
                                                                                                                                     </Card>
                                                                                                                                   )} keyExtractor={item => item.id} />
    </SafeAreaView>
  )
}

const BookDetails = ({ route }) => {
  const { book } = route.params

  return (
    <View style={styles.detailsContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <Image source={{ uri: book.imageUrl }} style={styles.image} />
          <Title>
            {book.title}
          </Title>
          <Paragraph>
            {book.author}
          </Paragraph>
          <Paragraph>
            {book.description}
          </Paragraph>
          <Button mode='contained' onPress={() => alert('Preço: 100,00 R$')}>
            Comprar
          </Button>
        </Card.Content>
      </Card>
    </View>
  )
}

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Lista de Livros' }} />
    <Stack.Screen name='Detalhes da Compra' component={BookDetails} options={{ title: 'Detalhes do Livro' }} />
  </Stack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HomeStack' component={HomeStack} options={{ headerShown: false, title: 'Home' }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  card: {
    margin: 8
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App

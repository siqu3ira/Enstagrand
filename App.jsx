import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Lista from './src/lista/Index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: 1,
          nome: 'Maurílio Siqueira',
          descricao: 'Skin profissional',
          imgPerfil: require('./src/img/perfil1.png'),
          imgPublicacao: require('./src/img/feed1.png'),
          likeada: true, 
          likers: 1000
        },
        {id: 2,
          nome: 'Caio Müller',
          descricao: 'Mengo <3',
          imgPerfil: require('./src/img/perfil2.png'),
          imgPublicacao: require('./src/img/walpaper1.png'),
          likeada: false, 
          likers: 0
        },
        {id: 3,
          nome: 'Daniel Rodrigues',
          descricao: 'Compro ou não compro?',
          imgPerfil: require('./src/img/perfil3.png'),
          imgPublicacao: require('./src/img/feed.png'),
          likeada: false, 
          likers: 3
        },
        {id: 4,
          nome: 'Mateus Turra',
          descricao: 'Virei flamenguista',
          imgPerfil: require('./src/img/perfil4.png'),
          imgPublicacao: require('./src/img/feed2.png'),
          likeada: false, 
          likers: 1
        },
        {id: 5,
          nome: 'Alub',
          descricao: 'Amo gráficos!',
          imgPerfil: require('./src/img/perfil5.png'),
          imgPublicacao: require('./src/img/feed3.png'),
          likeada: false, 
          likers: 32
        }
      ]
     };

  }

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <TouchableOpacity>
            <Image 
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image 
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>

        </View>

        <FlatList 
        showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={ ({item}) => <Lista data={item} /> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1
  },
  logo: {
  
  },
  send: {
    width: 23,
    height: 23
  }
});

export default App;
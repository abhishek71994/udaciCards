import {StackNavigator} from 'react-navigation'
import {color} from '../style/constants'
import DeckListScreen from '../screens/DeckList'
import NewCardScreen from '../screens/NewCard'
import DeckScreen from '../screens/Deck'
import RenameDeck from '../screens/RenameDeck'
import QuizScreen from '../screens/Quiz'

const DeckStackNavigator = StackNavigator(
  {
    DeckList: {
      screen: DeckListScreen,
      path: 'decks',
      navigationOptions: () => ({
        title: `All Decks`
      })
    },
    NewCard: {
      screen: NewCardScreen,
      path: 'decks/:title/new',
      navigationOptions: () => ({
        title: `New Card`
      }),
      mode: 'modal'
    },
    Deck: {
      screen: DeckScreen,
      path: 'decks/:title',
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.title}`
      })
    },
    RenameDeck: {
      screen: RenameDeck,
      path: 'decks/:title/rename',
      navigationOptions: ({navigation}) => ({
        title: `Rename`
      })
    },
    Quiz: {
      screen: QuizScreen,
      path: 'decks/:title/quiz',
      navigationOptions: () => ({
        title: `Quiz`
      })
    }
  },
  {
    initialRouteName: 'DeckList',
    navigationOptions: {
      headerTintColor: color.orange,
      headerStyle: {
        backgroundColor: color.darkBlue
      }
    }
  }
)

export default DeckStackNavigator

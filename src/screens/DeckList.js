import React from 'react'
import PropTypes from 'prop-types'
import DeckPreview from '../components/DeckPreview'

import {View, FlatList, StyleSheet} from 'react-native'
import getDecks from '../state/selectors/decks/selector.getDecks'
import {connect} from 'react-redux'
import {color} from '../style/constants'

class DeckListScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render () {
    const {decks, navigation} = this.props
    const {navigate} = navigation
    return (
      <View style={styles.wrapper}>
        <FlatList
          data={decks}
          renderItem={({item}) => (
            <DeckPreview
              deck={item}
              gotToDeck={() => navigate('Deck', {title: item.title})}
            />
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = ({decks}) => ({decks: getDecks(decks)})
export default connect(mapStateToProps)(DeckListScreen)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.blue,
    paddingVertical: 30,
    paddingHorizontal: 15
  }
})

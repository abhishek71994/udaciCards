import React from 'react'
import { StackNavigator } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { DeckList } from '../screens/deck-list'
import { AddDeck } from '../screens/add-deck'
import { Deck } from '../screens/deck'
import { color } from '../style/constants'

const IndexSection = StackNavigator(
	{
		AddDeck:{
			screen:AddDeck,
			navigationOptions : {
				title: 'Add Deck',
				tabBarLabel:'Add Deck',
				tabBarIcon : ({tintColor})=>{
					<FontAwesome name='pencil' size={30} color:{tintColor} />
				}
			}
		},
		Deck:{
			screen:Deck,
			navigationOptions : {
				title: 'Deck',
				tabBarLabel:'Deck',
				tabBarIcon : ({tintColor})=>{
					<FontAwesome name='pencil' size={30} color:{tintColor} />
				}
			}
		},
		DeckList:{
			screen:DeckList,
			navigationOptions : {
				title: 'DeckList',
				tabBarLabel:'DeckList',
				tabBarIcon : ({tintColor})=>{
					<FontAwesome name='pencil' size={30} color:{tintColor} />
				}
			}
		}
	},
	{
	    animationEnabled: true,
	    initialRouteName: 'DeckList',
	    swipeEnabled: true,
	    tabBarOptions: {
	      activeTintColor: color.orange,
	      style: {
	        height: 56,
	        backgroundColor: color.darkBlue,
	        shadowColor: 'rgba(0, 0, 0, 0.24)',
	        shadowOffset: {width: 0, height: 3},
	        shadowRadius: 6,
	        shadowOpacity: 1
	      }
	    }
	  }


)

export default IndexSection
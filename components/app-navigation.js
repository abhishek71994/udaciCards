import { StackNavigator } from 'react-navigation'
import {color} from '../style/constants'
import IndexSection from '../sections/index'

const AppNavigation = StackNavigator(
	{
		Index:{
			screen:IndexSection
		}
	},
	{
		initialRouteName:'Index',
		navigationOptions:{
			headerTintColor: color.orange,
			headerStyle:{
				backgroundColor:color.darkBlue
			}
		}
	}
)

export default AppNavigation
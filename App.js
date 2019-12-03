import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultShow from "./src/screens/ResultShow";

const MainNavigator = createStackNavigator({
  Search: { screen: SearchScreen },
  Result:{screen:ResultShow}
},{
  initialRouteName:"Search",
  defaultNavigationOptions:{
    title:"Bussiness Search"
  }
});

const App = createAppContainer(MainNavigator);

export default App;
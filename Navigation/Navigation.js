import { createStackNavigator, createAppContainer } from "react-navigation";
import Search from "../components/Search";
import FilmDetail from "../components/FilmDetail";

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: "Rechercher"
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: "Detail"
    }
  }
});

export default createAppContainer(SearchStackNavigator);

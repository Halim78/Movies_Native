import React from "react";
import numeral from "numeral";
import moment from "moment";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image
} from "react-native";
import { getFilmDetail, getImagesApi } from "../API/TMDB";

class FilmDetail extends React.Component {
  state = {
    film: [],
    isLoading: true
  };

  componentDidMount = () => {
    getFilmDetail(this.props.navigation.state.params.idFilm).then(data =>
      this.setState({
        film: data,
        isLoading: false
      })
    );
  };

  _displayFilm = () => {
    const { film } = this.state;
    if (this.state.film != []) {
      return (
        <ScrollView style={styles.scrollview}>
          <Image
            style={styles.image}
            source={{ uri: getImagesApi(film.backdrop_path) }}
          />
          <Text style={styles.pictures}>{film.title}</Text>
          <Text style={styles.texte}>{film.overview}</Text>
          <Text style={styles.notes1}>
            Sortie le :
            {moment(new Date(film.release_date)).format("DD/MM/YYYY")}
          </Text>
          <Text style={styles.notes}>Note : {film.vote_average}</Text>
          <Text style={styles.notes}>Nombre de votes : {film.vote_count}</Text>
          <Text style={styles.notes}>
            Budget : {numeral(film.budget).format("0,0[.]00 $")}}
          </Text>
          {/* <Text style={styles.default_text}>
            Genre(s) :
            {film.genres
              .map(function(genre) {
                return genre.name;
              })
              .join(" / ")}
          </Text>
          <Text style={styles.default_text}>
            Companie(s) :
            {film.production_companies
              .map(function(company) {
                return company.name;
              })
              .join(" / ")}
          </Text> */}
        </ScrollView>
      );
    }
  };

  _displayLoading = () => {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayFilm()}
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollview: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  pictures: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  texte: {
    marginTop: 30,
    fontSize: 15,
    textAlign: "center",
    fontStyle: "italic"
  },
  dates: {
    marginTop: 30
  },
  notes: {
    fontWeight: "bold",
    marginTop: 10,
    paddingLeft: 10
  },
  notes1: {
    paddingLeft: 10,
    fontWeight: "bold",
    marginTop: 30
  }
});

export default FilmDetail;

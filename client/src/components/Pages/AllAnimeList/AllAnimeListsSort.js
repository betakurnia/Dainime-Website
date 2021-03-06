import React, { Component } from "react";

// component
import AllAnimeList from "./AllAnimeList";
import RecentRelease from "../../Common/RecentRelease";
import AnimePlaceHolder from "../../Common/AnimePlaceHolder";
import RecentReleasePlaceHolder from "../../Common/RecentReleasePlaceHolder";
import Spinner from "../../Common/Spinner";

// Redux
import { connect } from "react-redux";
import { getAnimeListSort } from "../../../actions/animeActions";
import { getAnimeListSortCount } from "../../../actions/helperActions";

// npm
import { BrowserView, TabletView, MobileView } from "react-device-detect";
import PropTypes from "prop-types";

class AllAnimeListsSort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabet: ["A", "B", "C", "D", "E", "F", "G", "H"],
      alphabet2: ["I", "J", "K", "L", "M", "N", "O", "P", "Q"],
      alphabet3: ["R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      alphabetDesktop: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M"
      ],
      alphabetDesktop2: [
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.sort !== prevProps.match.params.sort) {
      this.props.getAnimeListSort(this.props.match.params.sort, 0, true);
    }
  }

  componentDidMount() {
    this.props.getAnimeListSort(this.props.match.params.sort, 0, true);

    this.props.getAnimeListSortCount(this.props.match.params.sort);

    document.title = "Dainime | Daftar anime di Dainime";
  }

  render() {
    const { animeList } = this.props.anime;

    const { pageCount } = this.props.helper;

    const loading = this.props.anime.loading;

    const loadingAnime = this.props.anime.loading;

    const loadingEpisodeAnime = this.props.anime.loading;

    const mobilePotrait = (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AllAnimeList
              column="col-6"
              divided="1"
              height="utility_height_60px"
              animeList={animeList}
              pageCount={pageCount}
              alphabet={[
                this.state.alphabet,
                this.state.alphabet2,
                this.state.alphabet3
              ]}
              sort={this.props.match.params.sort}
            />
          </div>
        </div>
      </div>
    );

    const mobileLandscape = (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AllAnimeList
              column="col-sm-4"
              divided="2"
              height="utility_height_60px"
              animeList={animeList}
              pageCount={pageCount}
              alphabet={[
                this.state.alphabet,
                this.state.alphabet2,
                this.state.alphabet3
              ]}
              sort={this.props.match.params.sort}
            />
          </div>
        </div>
      </div>
    );

    const tablet = (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <AllAnimeList
              column="col-md-3"
              divided="3"
              height="utility_height_40px"
              animeList={animeList}
              pageCount={pageCount}
              alphabet={[
                this.state.alphabetDesktop,
                this.state.alphabetDesktop2
              ]}
              sort={this.props.match.params.sort}
            />
          </div>
        </div>
      </div>
    );

    const desktop = (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {loadingAnime ? (
              <AnimePlaceHolder />
            ) : (
              <AllAnimeList
                column="col-lg-3"
                divided="3"
                height="utility_height_40px"
                animeList={animeList}
                pageCount={pageCount}
                alphabet={[
                  this.state.alphabetDesktop,
                  this.state.alphabetDesktop2
                ]}
                sort={this.props.match.params.sort}
              />
            )}
          </div>
          <div className="col-lg-4">
            {loadingEpisodeAnime ? (
              <RecentReleasePlaceHolder />
            ) : (
              <RecentRelease />
            )}
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <BrowserView>
          {" "}
          <div className="d-none d-lg-block ">
            {desktop}
          </div>
          <div className="d-none d-md-block d-lg-none">
            {loading ? <Spinner /> : tablet}
          </div>
          <div className="d-none d-sm-block d-md-none ">
            {loading ? <Spinner /> : mobileLandscape}
          </div>
          <div className="d-block d-sm-none ">
            {loading ? <Spinner /> : mobilePotrait}
          </div>
        </BrowserView>{" "}
        <TabletView>{loading ? <Spinner /> : tablet}</TabletView>{" "}
        <MobileView>
          {" "}
          <div className="d-none d-sm-block d-md-none ">
            {loading ? <Spinner /> : mobileLandscape}
          </div>
          <div className="d-block d-sm-none ">
            {loading ? <Spinner /> : mobilePotrait}
          </div>
        </MobileView>
      </div>
    );
  }
}

AllAnimeListsSort.propTypes = {
  anime: PropTypes.object.isRequired,
  episodeAnime: PropTypes.object.isRequired,
  helper: PropTypes.object.isRequired,
  getAnimeListSort: PropTypes.func.isRequired,
  getAnimeListSortCount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  anime: state.anime,
  episodeAnime: state.episodeAnime,
  helper: state.helper
});

export default connect(mapStateToProps, {
  getAnimeListSort,
  getAnimeListSortCount
})(AllAnimeListsSort);

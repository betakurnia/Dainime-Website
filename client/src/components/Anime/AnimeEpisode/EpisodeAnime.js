import React, { Component } from "react";

// Component
import HeaderAnime from "./HeaderAnime";
import RecentEpisode from "./RecentEpisode";
import RecentEpisodeMobile from "./RecentEpisodeMobile";
import DownloadLink from "./DownloadLink";
import RecentRelease from "../../Common/RecentRelease";
import RecentReleasePlaceHolder from "../../Common/RecentReleasePlaceHolder";
import EpisodeAnimePlaceHolder from "../../Common/EpisodeAnimePlaceHolder";
import Spinner from "../../Common/Spinner";

// Redux
import { connect } from "react-redux";
import { getEpisode } from "../../../actions/episodeAnimeActions";

// npm
import { BrowserView, TabletView, MobileView } from "react-device-detect";
import PropTypes from "prop-types";
import Disqus from "disqus-react";

// const state = this.props.location.state;

class EpisodeAnime extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.match.params.episode !== prevProps.match.params.episode) {
      this.props.getEpisode(
        this.props.match.params.title,
        this.props.match.params.episode
      );
    }
  }

  componentDidMount() {
    this.props.getEpisode(
      this.props.match.params.title,
      this.props.match.params.episode
    );
  }

  render() {


    const { episode } = this.props.episodeAnime;

    const loading = this.props.anime.loading;

    const loadingAnime = this.props.anime.loading;

    const loadingEpisodeAnime = this.props.anime.loading;

    const disqusShortname = "dainimes";
    const disqusConfig = {
      url: `http://localhost:3000/${this.props.match.params.title}/episode-${this.props.match.params.episode}`, //this.props.pageUrl
      identifier: `${this.props.match.params.title}/episode-${this.props.match.params.episode}`, //this.props.uniqueId
      title: `${this.props.match.params.title}` //this.props.title
    };

    const mobile = (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <HeaderAnime episode={episode} column="col-12" />
              <div className="mt-5"></div>
              <RecentEpisodeMobile
                column="col-5"
                title={this.props.match.params.title}
              />
              <div className="mt-5"></div>
              <DownloadLink
                episode={episode}
                column="col-12 "
                clickNupload="CU"
              />
              <div className="mt-5"></div>
              <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </div>
          </div>
        </div>
      </div>
    );

    const tablet = (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <HeaderAnime episode={episode} />
              <div className="mt-5"></div>
              <RecentEpisode
                column="col-md-2"
                title={this.props.match.params.title}
              />
              <div className="mt-5"></div>
              <DownloadLink
                episode={episode}
                column="col-md-12 "
                clickNupload="ClickNUpload"
              />
              <div className="mt-5"></div>
              <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </div>
          </div>
        </div>
      </div>
    );

    const desktop = (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              {loadingAnime ? (
                <EpisodeAnimePlaceHolder />
              ) : (
                <React.Fragment>
                  <HeaderAnime episode={episode} />
                  <div className="mt-5"></div>
                  <RecentEpisode
                    column="col-lg-2"
                    title={this.props.match.params.title}
                  />
                  <div className="mt-5"></div>
                  <DownloadLink
                    episode={episode}
                    column="col-lg-12 "
                    clickNupload="ClickNUpload"
                  />
                  <div className="mt-5"></div>
                  <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                  />
                </React.Fragment>
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
      </div>
    );

    return (
      <div>
        <BrowserView>
          {" "}
          <div className="d-none d-lg-block ">{desktop}</div>
          <div className="d-none d-md-block d-lg-none">
            {loading ? <Spinner /> : tablet}
          </div>
          <div className="d-block d-sm-block d-md-none ">
            {loading ? <Spinner /> : mobile}
          </div>
        </BrowserView>{" "}
        <TabletView>{loading ? <Spinner /> : tablet}</TabletView>{" "}
        <MobileView> {loading ? <Spinner /> : mobile}</MobileView>
      </div>
    );
  }
}

EpisodeAnime.propTypes = {
  anime: PropTypes.object.isRequired,
  episodeAnime: PropTypes.object.isRequired,
  getEpisode: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  anime: state.anime,
  episodeAnime: state.episodeAnime
});

export default connect(mapStateToProps, { getEpisode })(EpisodeAnime);

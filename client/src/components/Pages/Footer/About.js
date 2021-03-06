import React, { Component } from "react";

// Redux
import { connect } from "react-redux";

// Component
import RecentRelease from "../../Common/RecentRelease";
import Spinner from "../../Common/Spinner";

// npm
import { BrowserView, TabletView, MobileView } from "react-device-detect";
import PropTypes from "prop-types";

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { loading } = this.props.episodeAnime;

    const mobile = (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="utility_background_light-black text-white pagination-sm  ">
                <div className="card-header ">
                  <div className="d-flex">
                    <h5>About Us</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {" "}
                <h4 className="utility_text_18px text-light-black">Dainime</h4>
                <div className="mt-3"></div>
                <p className="text-light-gray">
                  Dainime adalah website download anime subtitle Indonesia,Kami
                  selalu berusaha memberikan pelayanan terbaik dengan update
                  anime terbaru dan subtitle berkualitas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const tablet = (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="utility_background_light-black text-white pagination-sm  ">
                <div className="card-header ">
                  <div className="d-flex">
                    <h5>About Us</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {" "}
                <h4 className="utility_text_18px text-light-black">Dainime</h4>
                <div className="mt-3"></div>
                <p className="text-light-gray">
                  Dainime adalah website download anime subtitle Indonesia,Kami
                  selalu berusaha memberikan pelayanan terbaik dengan update
                  anime terbaru dan subtitle berkualitas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const desktop = (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="utility_background_light-black text-white pagination-sm  ">
                <div className="card-header ">
                  <div className="d-flex">
                    <h5>About Us</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {" "}
                <h4 className="utility_text_18px text-light-black">Dainime</h4>
                <div className="mt-3"></div>
                <p className="text-light-gray">
                  Dainime adalah website download anime subtitle Indonesia,Kami
                  selalu berusaha memberikan pelayanan terbaik dengan update
                  anime terbaru dan subtitle berkualitas
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <RecentRelease />
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <BrowserView>{loading ? <Spinner /> : desktop}</BrowserView>
        <TabletView>{tablet}</TabletView>
        <MobileView>{mobile}</MobileView>
      </div>
    );
  }
}

About.propTypes = {
  episodeAnime: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  episodeAnime: state.episodeAnime
});

export default connect(mapStateToProps, null)(About);

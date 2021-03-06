import React from "react";

// npm package
import { Link } from "react-router-dom";

// npm
import { BrowserView, TabletView, MobileView } from "react-device-detect";

function Footer() {
  const mobile = (
    <footer>
      <div className="utility_margin-top-64px"></div>
      <div className=" utility_background_dark-black py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between">
                <Link to="/about">
                  <a
                    href="/#"
                    className=" text-white utility_text-decoration_underline "
                  >
                    <p className="utility_text_16px">About</p>
                  </a>
                </Link>
                <Link to="/contact">
                  <a
                    href="/#"
                    className=" text-white utility_text-decoration_underline "
                  >
                    <p className=" utility_text_16px">Contact</p>
                  </a>
                </Link>
                <div className="footer__contact_text_white">
                  <a
                    href="https://www.facebook.com/Dainime-107039214162563/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook-official mr-3"></i>{" "}
                  </a>
                  <a
                    href="https://www.instagram.com/dainimed/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram mr-3"></i>{" "}
                  </a>
                  <i class="fa fa-envelope"></i>
                </div>
              </div>
            </div>
            <div className="mt-1"></div>
            <div className="col-12">
              <div className="footer">
                <p>Copyright &copy; {new Date().getFullYear()} Dainime.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  const desktop = (
    <footer>
      <div className="utility_margin-top-64px"></div>
      <div className=" utility_background_dark-black py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="footer">
                <div className="d-flex justify-content-between">
                  <p>Copyright &copy; {new Date().getFullYear()} Dainime.com</p>
                  <Link to="/about">
                    <a
                      href="/#"
                      className=" text-white utility_text-decoration_underline "
                    >
                      <p className="utility_text_16px">About</p>
                    </a>
                  </Link>
                  <Link to="/contact">
                    <a
                      href="/#"
                      className=" text-white utility_text-decoration_underline "
                    >
                      <p className=" utility_text_16px">Contact</p>
                    </a>
                  </Link>
                  <div className="footer__contact_text_white">
                    <a
                      href="https://www.facebook.com/Dainime-107039214162563/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook-official mr-3"></i>{" "}
                    </a>
                    <a
                      href="https://www.instagram.com/dainimed/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram mr-3"></i>{" "}
                    </a>
                    <i class="fa fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div>
      <BrowserView> {desktop}</BrowserView>
      <TabletView> {desktop} </TabletView>
      <MobileView> {mobile} </MobileView>
    </div>
  );
}

export default Footer;

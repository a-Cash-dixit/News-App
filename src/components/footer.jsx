import React from "react";
class Footer extends React.Component {
  currentYear = new Date().getFullYear();
  render() {
    return (
      <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <footer>
          <div class="row my-5 justify-content-center py-5">
            <div class="col-11">
              <div class="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                  <img
                    className="image"
                    src="https://avatars.githubusercontent.com/u/83697333?v=4"
                    alt="standTall"
                  />
                  <h3 class="text-muted mb-md-0 mb-5 bold-text">
                    Get in Touch.
                  </h3>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h4 class="mb-3 mb-lg-4 bold-text ">
                    <b>Projects</b>
                  </h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="https://a-cash-dixit.github.io/Drum-Kit/">
                        <strong>Drum Kit</strong>
                      </a>
                    </li>
                    <li>
                      <a href="https://a-cash-dixit.github.io/Simon-Game/">
                        <strong>Simon Game</strong>
                      </a>
                    </li>
                    <li>
                      <a href="https://a-cash-dixit.github.io/TinDog/">
                        <strong>TinDog</strong>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h4 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                    <b>ADDRESS</b>
                  </h4>
                  <p class="mb-1">836/1,Hardev Nagar</p>
                  <p>Kanpur 208027</p>
                </div>
              </div>
              <div class="row ">
                <div>
                  <a
                    href="https://twitter.com/a_cash_dixit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    T
                  </a>
                  <a
                    href="https://github.com/a-Cash-dixit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    G
                  </a>
                  <a
                    href="https://www.instagram.com/a_cash_dixit27/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akash-dixit-283220211/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <strong>
                    Copyright {this.currentYear} All rights reserved.
                  </strong>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end "></div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end "></div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                  <img
                    className="image"
                    style={{ width: 200, height: 200 }}
                    src="https://allgovernmentjobs.in/public/uploads/org_logo/82543afaa6b35f3999ca5ba5cb470089.jpg"
                    alt="IIITDMJ"
                  ></img>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                  <h4 class="mt-55 mt-2 text-muted bold-text">
                    <b>Akash Dixit</b>
                  </h4>
                  <small>
                    {" "}
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    akashdixitknp@gmail.com
                  </small>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

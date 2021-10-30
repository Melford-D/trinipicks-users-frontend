import NavBar from "../../NavBar";
import "./SportSelection.css";
import TrinipotNavBar from "../TrinipotNavBar";
import BarcaLogo from "../../../assets/jackpot/barca-logo.png";
import MadridLogo from "../../../assets/jackpot/madrid-logo.png";
import ManchesterLogo from "../../../assets/jackpot/Man-United-logo.png";
import ChekseaLogo from "../../../assets/jackpot/chelsea-logo.png";
import Age from "../../../assets/jackpot/Age.png";
import Footer from "../../Footer";

function SportSelection() {
  return (
    <>
      <NavBar />
      <TrinipotNavBar />
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center mt-3 scorelines">
            Predict six scorelines to win
          </h1>
          <div class="selection-card p-2">
            <div class="card m-1 col-md-6 col-lg-6">
              <div class="card-body">
                <h6 class="card-title container-fluid">
                  <span>Spain, Laliga</span>
                  <span>Gameweek 32</span>
                </h6>
                <div class="card-text">
                  <div class="team-logo">
                    <img src={BarcaLogo} alt="barca-logo" />
                    <p class="img-text fw-bold pt-2">Barcelona</p>
                  </div>
                  <div class="scores score-1">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="scores score-2">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="team-logo">
                    <img src={MadridLogo} alt="madrid-logo" />
                    <p class="img-text fw-bold pt-2">Real Madrid</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card m-1 col-md-6 col-lg-6">
              <div class="card-body">
                <h6 class="card-title container-fluid">
                  <span>Spain, Laliga</span>
                  <span>Gameweek 32</span>
                </h6>
                <div class="card-text">
                  <div class="team-logo">
                    <img src={ManchesterLogo} alt="barca-logo" />
                    <p class="img-text fw-bold pt-2">Barcelona</p>
                  </div>
                  <div class="scores score-1">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="scores score-2">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="team-logo">
                    <img src={ChekseaLogo} alt="madrid-logo" />
                    <p class="img-text fw-bold pt-2">Real Madrid</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card m-1 col-md-6 col-lg-6">
              <div class="card-body">
                <h6 class="card-title container-fluid">
                  <span>Spain, Laliga</span>
                  <span>Gameweek 32</span>
                </h6>
                <div class="card-text">
                  <div class="team-logo">
                    <img src={BarcaLogo} alt="barca-logo" />
                    <p class="img-text fw-bold pt-2">Barcelona</p>
                  </div>
                  <div class="scores score-1">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="scores score-2">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="team-logo">
                    <img src={MadridLogo} alt="madrid-logo" />
                    <p class="img-text fw-bold pt-2">Real Madrid</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card m-1 col-md-6 col-lg-6">
              <div class="card-body">
                <h6 class="card-title container-fluid">
                  <span>Spain, Laliga</span>
                  <span>Gameweek 32</span>
                </h6>
                <div class="card-text">
                  <div class="team-logo">
                    <img src={ManchesterLogo} alt="barca-logo" />
                    <p class="img-text fw-bold pt-2">Barcelona</p>
                  </div>
                  <div class="scores score-1">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="scores score-2">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="team-logo">
                    <img src={ChekseaLogo} alt="madrid-logo" />
                    <p class="img-text fw-bold pt-2">Real Madrid</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card m-1 col-md-6 col-lg-6">
              <div class="card-body">
                <h6 class="card-title container-fluid">
                  <span>Spain, Laliga</span>
                  <span>Gameweek 32</span>
                </h6>
                <div class="card-text">
                  <div class="team-logo">
                    <img src={BarcaLogo} alt="barca-logo" />
                    <p class="img-text fw-bold pt-2">Barcelona</p>
                  </div>
                  <div class="scores score-1">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="scores score-2">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="team-logo">
                    <img src={MadridLogo} alt="madrid-logo" />
                    <p class="img-text fw-bold pt-2">Real Madrid</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card m-1 col-md-6 col-lg-6">
              <div class="card-body">
                <h6 class="card-title container-fluid">
                  <span>Spain, Laliga</span>
                  <span>Gameweek 32</span>
                </h6>
                <div class="card-text">
                  <div class="team-logo">
                    <img src={ManchesterLogo} alt="barca-logo" />
                    <p class="img-text fw-bold pt-2">Barcelona</p>
                  </div>
                  <div class="scores score-1">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="scores score-2">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="team-logo">
                    <img src={ChekseaLogo} alt="madrid-logo" />
                    <p class="img-text fw-bold pt-2">Real Madrid</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card m-1 col-md-6 col-lg-6">
              <div class="card-body">
                <h6 class="card-title container-fluid">
                  <span>Spain, Laliga</span>
                  <span>Gameweek 32</span>
                </h6>
                <div class="card-text">
                  <div class="team-logo">
                    <img src={BarcaLogo} alt="barca-logo" />
                    <p class="img-text fw-bold pt-2">Barcelona</p>
                  </div>
                  <div class="scores score-1">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="scores score-2">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="team-logo">
                    <img src={MadridLogo} alt="madrid-logo" />
                    <p class="img-text fw-bold pt-2">Real Madrid</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card m-1 col-md-6 col-lg-6">
              <div class="card-body">
                <h6 class="card-title container-fluid">
                  <span>Spain, Laliga</span>
                  <span>Gameweek 32</span>
                </h6>
                <div class="card-text">
                  <div class="team-logo">
                    <img src={ManchesterLogo} alt="barca-logo" />
                    <p class="img-text fw-bold pt-2">Barcelona</p>
                  </div>
                  <div class="scores score-1">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="scores score-2">
                    <i class="fas fa-2x fa-chevron-up"></i>
                    <div class="score-box">
                      <p class="score-number">0</p>
                    </div>
                    <i class="fas fa-2x fa-chevron-down"></i>
                  </div>
                  <div class="team-logo">
                    <img src={ChekseaLogo} alt="madrid-logo" />
                    <p class="img-text fw-bold pt-2">Real Madrid</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="submit-container py-5">
              <div class="age-restrict">
                <img src={Age} alt="18plus" />
              </div>
              <div class="submit-btn">
                <button
                  type="submit"
                  class="btn btn-lg btn-lg-custom text-uppercase text-white"
                >
                  Submit your prediction
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SportSelection;

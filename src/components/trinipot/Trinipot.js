import NavBar from "../NavBar";
import "./Trinipot.css";
import TrinipotNavBar from "./TrinipotNavBar";
import Age from "../../assets/jackpot/Age.png";
import { Link } from "react-router-dom";

function Trinipot() {
  return (
    <>
      <NavBar />
      <TrinipotNavBar />
      <div class="container-fluid d-flex backdrop">
        <div class="row">
          <div class="col-sm-12 col-md-12 mt-4 d-flex flex-column promo">
            <h1 className="text-white predict">Predict six scores and win</h1>
            <p class="jackpot-money">N10,000,000</p>
            <Link to="/selection">
              <button class="play-btn">Play For Free</button>
            </Link>
            <div class="vector">
              <img src={Age} alt="age limit" />
              <p class="copyright-2 text-white">
                2021 Trinipicks. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trinipot;

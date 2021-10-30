import NavBar from "../../NavBar";
import "./LeaderBoard.css";
import TrinipotNavBar from "../TrinipotNavBar";
import Footer from "../../Footer";

function LeaderBoard() {
  return (
    <>
      <NavBar />
      <TrinipotNavBar />
      <div className="container">
        <div className="row">
          <h1 className="text-center mt-3 scorelines">Top 10 Players</h1>

          <table class="content-table">
            <thead>
              <tr class="leaderboard">
                <th>Leaderboard</th>
                <th></th>
                <th></th>
              </tr>
              <tr class="position">
                <th>Position</th>
                <th>Player Name</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Daniel Ronowolldonnie</td>
                <td>30</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Daniel Ronowolldonnie</td>
                <td>20</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Daniel Ronowolldonnie</td>
                <td>18</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Daniel Ronowolldonnie</td>
                <td>18</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Daniel Ronowolldonnie</td>
                <td>12</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Daniel Ronowolldonnie</td>
                <td>11</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Daniel Ronowolldonnie</td>
                <td>20</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Daniel Ronowolldonnie</td>
                <td>18</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Daniel Ronowolldonnie</td>
                <td>18</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Daniel Ronowolldonnie</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
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

export default LeaderBoard;

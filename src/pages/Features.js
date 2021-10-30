import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Features() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <h1>Features</h1>
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

export default Features;

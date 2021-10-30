import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <h1>Privacy Policy</h1>
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

export default PrivacyPolicy;

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Faq() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 mt-5">
            <h1 className="terms">Frequently Asked Questions</h1>
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

export default Faq;

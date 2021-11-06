import React from "react";
import "./User.css";
import { ArrowDropUp, KeyboardArrowDown, Menu } from "@material-ui/icons";
import PaymentSection from "./payment/PaymentSection";
import Sidebar from "./sidebar/Sidebar";
import Topbar2 from "./topbar/Topbar2";
import PaymentSectionBottom from "./payment/PaymentSectionBottom";

function User() {
  return (
    <>
      <div className="userContainer">
        <Sidebar />
        <div className="mainContent">
          <div className="home">
            <div className="middle">
              <div className="admin">
                <Menu />
                <h2>Welcome, Dan</h2>
              </div>
              <div className="title-bar">
                <h1>| Dashboard</h1>
              </div>
              <div className="card-container">
                <div className="card-item card-one">
                  <div className="predictions">
                    <p>Active Predictions</p>
                    <h3>8</h3>
                  </div>
                  <div className="circle-counter">
                    <h3>56%</h3>
                    <p>complete</p>
                  </div>
                </div>
                <div className="card-item card-two">
                  <div className="predictions">
                    <p>Income</p>
                    <h3>$5000</h3>
                  </div>
                  <div className="monthly-income">
                    <div className="percentage-value">
                      1 Month
                      <KeyboardArrowDown />
                    </div>
                  </div>
                  <div className="percentage">
                    <div className="percentage-value">
                      2%
                      <ArrowDropUp />
                    </div>
                  </div>
                </div>
              </div>
              <form
                method="POST"
                action="https://btcpayjungle.com/api/v1/invoices"
                className="btcpay-form btcpay-form--block"
              >
                <input
                  type="hidden"
                  name="storeId"
                  value="8S5ffFC55Nx3vDWuJ1T9tQMFmkWEBj3f1wfipy1uh6QD"
                />
                <input
                  type="hidden"
                  name="checkoutDesc"
                  value="Pay for the premium features to get latest tips!"
                />
                <input
                  type="hidden"
                  name="browserRedirect"
                  value="https://trinipicks-frontend.netlify.app/"
                />
                <input type="hidden" name="price" value="10" />
                <input type="hidden" name="currency" value="USD" />
                <input
                  type="image"
                  className="submit"
                  name="submit"
                  src="https://btcpayjungle.com/img/paybutton/pay.svg"
                  style={{ width: "209px" }}
                  alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"
                />
              </form>
            </div>
            <div className="right">
              <PaymentSection />
            </div>
          </div>
        </div>
      </div>
      <div className="userContainer-2">
        <Topbar2 />
        <div className="mainContent">
          <div className="home home-alt">
            <div className="middle">
              <div className="admin">
                <Menu />
                <h2>Welcome, Dan</h2>
              </div>
              <div className="title-bar">
                <h1>| Dashboard</h1>
              </div>
              <div className="card-container">
                <div className="card-item card-one">
                  <div className="predictions">
                    <p>Active Predictions</p>
                    <h3>8</h3>
                  </div>
                  <div className="circle-counter">
                    <h3>56%</h3>
                    <p>complete</p>
                  </div>
                </div>
                <div className="card-item card-two">
                  <div className="predictions">
                    <p>Income</p>
                    <h3>$5000</h3>
                  </div>
                  <div className="monthly-income">
                    <div className="percentage-value">
                      1 Month
                      <KeyboardArrowDown />
                    </div>
                  </div>
                  <div className="percentage">
                    <div className="percentage-value">
                      2%
                      <ArrowDropUp />
                    </div>
                  </div>
                </div>
              </div>
              <form
                method="POST"
                action="https://btcpayjungle.com/api/v1/invoices"
                className="btcpay-form btcpay-form--block"
              >
                <input
                  type="hidden"
                  name="storeId"
                  value="8S5ffFC55Nx3vDWuJ1T9tQMFmkWEBj3f1wfipy1uh6QD"
                />
                <input
                  type="hidden"
                  name="checkoutDesc"
                  value="Pay for the premium features to get latest tips!"
                />
                <input
                  type="hidden"
                  name="browserRedirect"
                  value="https://trinipicks-frontend.netlify.app/"
                />
                <input type="hidden" name="price" value="10" />
                <input type="hidden" name="currency" value="USD" />
                <input
                  type="image"
                  className="submit"
                  name="submit"
                  src="https://btcpayjungle.com/img/paybutton/pay.svg"
                  style={{ width: "209px" }}
                  alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"
                />
              </form>
            </div>
            <div className="bottom">
              <PaymentSectionBottom />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;

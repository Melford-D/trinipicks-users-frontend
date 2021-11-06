import React from "react";
import "./PaymentSection.css";
import Topbar from "../topbar/Topbar";
import SubscriptionCard from "../../../assets/img/Card.png";
import IncomeIconBlue from "../../../assets/img/Income-Icon-Blue.png";
import IncomeIconYellow from "../../../assets/img/Income-Icon-Yellow.png";

function PaymentSection() {
  return (
    <div className="payment-section">
      <Topbar />

      <div className="user-transactions">
        <div className="subscription">
          <img
            src={SubscriptionCard}
            alt="subscription"
            className="subscription-card"
          />
        </div>
        <div className="user-container">
          <div className="users">
            <p>Today</p>
            <div className="user">
              <div className="user-card">
                <img
                  src={IncomeIconBlue}
                  alt="income"
                  className="income-icon"
                />
                <div className="user-plan">
                  <h2>Dan Ron</h2>
                  <p>Monthly Plan</p>
                </div>
              </div>
              <div className="user-amount">
                <h3>+$200</h3>
              </div>
            </div>
          </div>
          <div className="users">
            <p>Yesterday</p>
            <div className="user">
              <div className="user-card">
                <img
                  src={IncomeIconBlue}
                  alt="income"
                  className="income-icon"
                />
                <div className="user-plan">
                  <h2>Dan Ron</h2>
                  <p>Monthly Plan</p>
                </div>
              </div>
              <div className="user-amount">
                <h3>+$200</h3>
              </div>
            </div>
          </div>
          <div className="users">
            <p>8 Oct 2021</p>
            <div className="user">
              <div className="user-card">
                <img
                  src={IncomeIconYellow}
                  alt="income"
                  className="income-icon"
                />
                <div className="user-plan">
                  <h2>Dan Ron</h2>
                  <p>Monthly Plan</p>
                </div>
              </div>
              <div className="user-amount">
                <h3>+$200</h3>
              </div>
            </div>
          </div>
          <div className="users">
            <p>15 Sept 2021</p>
            <div className="user">
              <div className="user-card">
                <img
                  src={IncomeIconYellow}
                  alt="income"
                  className="income-icon"
                />
                <div className="user-plan">
                  <h2>Dan Ron</h2>
                  <p>Monthly Plan</p>
                </div>
              </div>
              <div className="user-amount">
                <h3>+$200</h3>
              </div>
            </div>
          </div>
          <div className="users">
            <p>15 Sept 2021</p>
            <div className="user">
              <div className="user-card">
                <img
                  src={IncomeIconBlue}
                  alt="income"
                  className="income-icon"
                />
                <div className="user-plan">
                  <h2>Dan Ron</h2>
                  <p>Monthly Plan</p>
                </div>
              </div>
              <div className="user-amount">
                <h3>+$200</h3>
              </div>
            </div>
          </div>
          <h4>View all</h4>
        </div>
      </div>
    </div>
  );
}

export default PaymentSection;

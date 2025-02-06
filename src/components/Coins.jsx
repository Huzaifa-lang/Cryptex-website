import React, { useEffect, useState } from "react";
import { useContext } from "react";
import "../CssOfComponents/Coins.css";
import { CoinContext } from "../context/CoinContext";

function Coins() {
  const testing = useContext(CoinContext);
  const [coinsData, setCoinsData] = useState(null);

  useEffect(() => {
    setCoinsData(testing);
  }, [testing]);


  return (
    <section id="coins">
      <div className="available-coins-header">
        <div className="available-coins-title">
          <p className="smallest-btn">Marker</p>
          <h4>Available Coins</h4>
        </div>

        <button id="button_1">Sign Up</button>
      </div>

      <div className="main-page-coins-market-container">
        {/* BIG BOX DISABLE  ApiBoxDisable*/}

        <div
          className={`half-container-biggest-disable  ${
            coinsData ? "ApiBoxDisable" : "ApiBoxEnable"
          }`}
        >
          <img src="public\loading.gif" alt="" className="loading" />
          <h4 className="loading-title-increase">Loading...</h4>
        </div>

        <div
          className={`half-container-biggest ${
            coinsData ? "ApiBoxEnable" : "ApiBoxDisable"
          } `}
        >
          <div className="half-container-biggest-title">
            <p id="half-container-biggest-title-main">USDT markets</p>
            <p id="half-container-biggest-title-button">Show all</p>
          </div>

          <div className="half-container-biggest-coins-details-title">
            <p>Pair</p>
            <p>Price</p>
            <p>Change(24h,%)</p>
            <p style={{ textAlign: "center" }} id="change-title"></p>
            <p style={{ textAlign: "right" }} id="tade-title"></p>
          </div>

          {/* APISSSS */}

          <div className="half-container-biggest-coins-details">
            <div className="pair-details">
              {coinsData && (
                <img
                  src={coinsData[0].image}
                  alt=""
                  style={{ height: "35px" }}
                />
              )}
              <div className="pair-details-text">
                <p id="pair-details-text-first">
                  {coinsData && coinsData[0].id}
                  <span>/USDT</span>
                </p>
                <p id="pair-details-text-second">
                  {coinsData && coinsData[0].name.toLowerCase()}
                </p>
              </div>
            </div>

            <p>{coinsData && `$${coinsData[0].current_price}`}</p>
            <div className="rate_change-double">
              <p id="rate_change-rate-upper">
                {coinsData &&
                  coinsData[0].market_cap_change_24h.toString().slice(0, 4)}
              </p>
              <p
                style={{ textAlign: "right" }}
                id="rate_change-rate-lower"
                className={
                  coinsData &&
                  (coinsData[0].price_change_percentage_24h <= 0
                    ? "api-red"
                    : "api-green")
                }
              >
                {coinsData &&
                  `${coinsData[0].price_change_percentage_24h.toFixed(2)} %`}
              </p>
            </div>

            <p id="change-rate-single">
              {coinsData &&
                coinsData[0].market_cap_change_24h.toString().slice(0, 7)}
            </p>
            <p
              style={{ textAlign: "center" }}
              id="change-title"
              className={
                coinsData &&
                (coinsData[0].price_change_percentage_24h <= 0
                  ? "api-red"
                  : "api-green")
              }
            >
              {coinsData &&
                `${coinsData[0].price_change_percentage_24h.toFixed(2)} %`}
            </p>
            <p style={{ textAlign: "right" }} id="trade">
              Trade
            </p>
          </div>

          <div className="half-container-biggest-coins-details">
            <div className="pair-details">
              {coinsData && (
                <img
                  src={coinsData[1].image}
                  alt=""
                  style={{ height: "35px" }}
                />
              )}
              <div className="pair-details-text">
                <p id="pair-details-text-first">
                  {coinsData && coinsData[1].id}
                  <span>/USDT</span>
                </p>
                <p id="pair-details-text-second">
                  {coinsData && coinsData[1].name.toLowerCase()}
                </p>
              </div>
            </div>

            <p>{coinsData && `$${coinsData[1].current_price}`}</p>
            <div className="rate_change-double">
              <p id="rate_change-rate-upper">
                {coinsData &&
                  coinsData[1].market_cap_change_24h.toString().slice(0, 4)}
              </p>
              <p
                style={{ textAlign: "right" }}
                id="rate_change-rate-lower"
                className={
                  coinsData &&
                  (coinsData[1].price_change_percentage_24h <= 0
                    ? "api-red"
                    : "api-green")
                }
              >
                {coinsData &&
                  `${coinsData[0].price_change_percentage_24h.toFixed(2)} %`}
              </p>
            </div>

            <p id="change-rate-single">
              {coinsData &&
                coinsData[1].market_cap_change_24h.toString().slice(0, 7)}
            </p>
            <p
              style={{ textAlign: "center" }}
              id="change-title"
              className={
                coinsData &&
                (coinsData[1].price_change_percentage_24h <= 0
                  ? "api-red"
                  : "api-green")
              }
            >
              {coinsData &&
                `${coinsData[1].price_change_percentage_24h.toFixed(2)} %`}
            </p>
            <p style={{ textAlign: "right" }} id="trade">
              Trade
            </p>
          </div>

          <div className="half-container-biggest-coins-details">
            <div className="pair-details">
              {coinsData && (
                <img
                  src={coinsData[2].image}
                  alt=""
                  style={{ height: "35px" }}
                />
              )}
              <div className="pair-details-text">
                <p id="pair-details-text-first">
                  {coinsData && coinsData[2].id}
                  <span>/USDT</span>
                </p>
                <p id="pair-details-text-second">
                  {coinsData && coinsData[2].name.toLowerCase()}
                </p>
              </div>
            </div>

            <p>{coinsData && `$${coinsData[2].current_price}`}</p>
            <div className="rate_change-double">
              <p id="rate_change-rate-upper">
                {coinsData &&
                  coinsData[2].market_cap_change_24h.toString().slice(0, 4)}
              </p>
              <p
                style={{ textAlign: "right" }}
                id="rate_change-rate-lower"
                className={
                  coinsData &&
                  (coinsData[2].price_change_percentage_24h <= 0
                    ? "api-red"
                    : "api-green")
                }
              >
                {coinsData &&
                  `${coinsData[2].price_change_percentage_24h.toFixed(2)} %`}
              </p>
            </div>

            <p id="change-rate-single">
              {coinsData &&
                coinsData[2].market_cap_change_24h.toString().slice(0, 7)}
            </p>
            <p
              style={{ textAlign: "center" }}
              id="change-title"
              className={
                coinsData &&
                (coinsData[2].price_change_percentage_24h <= 0
                  ? "api-red"
                  : "api-green")
              }
            >
              {coinsData &&
                `${coinsData[2].price_change_percentage_24h.toFixed(2)} %`}
            </p>
            <p style={{ textAlign: "right" }} id="trade">
              Trade
            </p>
          </div>

          <div className="half-container-biggest-coins-details">
            <div className="pair-details">
              {coinsData && (
                <img
                  src={coinsData[3].image}
                  alt=""
                  style={{ height: "35px" }}
                />
              )}
              <div className="pair-details-text">
                <p id="pair-details-text-first">
                  {coinsData && coinsData[3].id}
                  <span>/USDT</span>
                </p>
                <p id="pair-details-text-second">
                  {coinsData && coinsData[3].name.toLowerCase()}
                </p>
              </div>
            </div>

            <p>{coinsData && `$${coinsData[3].current_price}`}</p>
            <div className="rate_change-double">
              <p id="rate_change-rate-upper">
                {coinsData &&
                  coinsData[3].market_cap_change_24h.toString().slice(0, 4)}
              </p>
              <p
                style={{ textAlign: "right" }}
                id="rate_change-rate-lower"
                className={
                  coinsData &&
                  (coinsData[3].price_change_percentage_24h <= 0
                    ? "api-red"
                    : "api-green")
                }
              >
                {coinsData &&
                  `${coinsData[3].price_change_percentage_24h.toFixed(2)} %`}
              </p>
            </div>

            <p id="change-rate-single">
              {coinsData &&
                coinsData[3].market_cap_change_24h.toString().slice(0, 7)}
            </p>
            <p
              style={{ textAlign: "center" }}
              id="change-title"
              className={
                coinsData &&
                (coinsData[3].price_change_percentage_24h <= 0
                  ? "api-red"
                  : "api-green")
              }
            >
              {coinsData &&
                `${coinsData[3].price_change_percentage_24h.toFixed(2)} %`}
            </p>
            <p style={{ textAlign: "right" }} id="trade">
              Trade
            </p>
          </div>

          <div className="half-container-biggest-coins-details">
            <div className="pair-details">
              {coinsData && (
                <img
                  src={coinsData[4].image}
                  alt=""
                  style={{ height: "35px" }}
                />
              )}
              <div className="pair-details-text">
                <p id="pair-details-text-first">
                  {coinsData && coinsData[4].id}
                  <span>/USDT</span>
                </p>
                <p id="pair-details-text-second">
                  {coinsData && coinsData[4].name.toLowerCase()}
                </p>
              </div>
            </div>

            <p>{coinsData && `$${coinsData[4].current_price}`}</p>
            <div className="rate_change-double">
              <p id="rate_change-rate-upper">
                {coinsData &&
                  coinsData[4].market_cap_change_24h.toString().slice(0, 4)}
              </p>
              <p
                style={{ textAlign: "right" }}
                id="rate_change-rate-lower"
                className={
                  coinsData &&
                  (coinsData[4].price_change_percentage_24h <= 0
                    ? "api-red"
                    : "api-green")
                }
              >
                {coinsData &&
                  `${coinsData[4].price_change_percentage_24h.toFixed(2)} %`}
              </p>
            </div>

            <p id="change-rate-single">
              {coinsData &&
                coinsData[4].market_cap_change_24h.toString().slice(0, 7)}
            </p>
            <p
              style={{ textAlign: "center" }}
              id="change-title"
              className={
                coinsData &&
                (coinsData[4].price_change_percentage_24h <= 0
                  ? "api-red"
                  : "api-green")
              }
            >
              {coinsData &&
                `${coinsData[4].price_change_percentage_24h.toFixed(2)} %`}
            </p>
            <p style={{ textAlign: "right" }} id="trade">
              Trade
            </p>
          </div>

          {/* APISSS */}
        </div>

        <div className="half-container-small">
          {/* SMALL BOX DISABLE UPPER */}

          <div
            className={`half-container-small-upper-disable ${
              coinsData ? "ApiBoxDisable" : "ApiBoxEnable"
            }`}
          >
            <img src="public\loading.gif" alt="" className="loading" />
            <h4 className="loading-title">Loading...</h4>
          </div>

          {/* SMALL BOX DISABLE LOWER */}

          <div
            className={`half-container-small-lower-disable ${
              coinsData ? "ApiBoxDisable" : "ApiBoxEnable"
            }`}
          >
            <img src="public\loading.gif" alt="" className="loading" />
            <h4 className="loading-title">Loading...</h4>
          </div>

          <div
            className={`half-container-small-upper  ${
              coinsData ? "ApiBoxEnable" : "ApiBoxDisable"
            }`}
          >
            {/* UPPER */}
            <div className="half-container-biggest-title">
              <p id="half-container-biggest-title-main">USDT markets</p>
              <p id="half-container-biggest-title-button">Show all</p>
            </div>

            <div className="half-container-small-coins-details">
              <div className="pair-details">
                {coinsData && (
                  <img
                    src={coinsData[5].image}
                    alt=""
                    style={{ height: "35px" }}
                  />
                )}
                <div className="pair-details-text">
                  <p id="pair-details-text-first">
                    {coinsData && coinsData[5].id}
                    <span>/USDT</span>
                  </p>
                  <p id="pair-details-text-second">
                    {coinsData && coinsData[5].name.toLowerCase()}
                  </p>
                </div>
              </div>
              <div className="rate_change-rate">
                <p id="rate_change-rate-upper">
                  {coinsData && coinsData[5].market_cap_change_24h.toString().slice(0, 4)}
                </p>
                <p
                  style={{ textAlign: "right" }}
                  id="rate_change-rate-lower"
                  className={
                    coinsData &&
                    (coinsData[4].price_change_percentage_24h <= 0
                      ? "api-red"
                      : "api-green")
                  }
                >
                  {coinsData && ( `${coinsData[4].price_change_percentage_24h.toFixed(2)} %`)}
                </p>
              </div>
            </div>


            <div className="half-container-small-coins-details">
              <div className="pair-details">
                {coinsData && (
                  <img
                    src={coinsData[6].image}
                    alt=""
                    style={{ height: "35px" }}
                  />
                )}
                <div className="pair-details-text">
                  <p id="pair-details-text-first">
                    {coinsData && coinsData[6].id}
                    <span>/USDT</span>
                  </p>
                  <p id="pair-details-text-second">
                    {coinsData && coinsData[6].name.toLowerCase()}
                  </p>
                </div>
              </div>
              <div className="rate_change-rate">
                <p id="rate_change-rate-upper">
                  {coinsData && coinsData[6].market_cap_change_24h.toString().slice(0, 4)}
                </p>
                <p
                  style={{ textAlign: "right" }}
                  id="rate_change-rate-lower"
                  className={
                    coinsData &&
                    (coinsData[6].price_change_percentage_24h <= 0
                      ? "api-red"
                      : "api-green")
                  }
                >
                  {coinsData && `${coinsData[6].price_change_percentage_24h.toFixed(2)} %`}
                </p>
              </div>
            </div>

            <div className="half-container-small-coins-details">
              <div className="pair-details">
                {coinsData && (
                  <img
                    src={coinsData[7].image}
                    alt=""
                    style={{ height: "35px" }}
                  />
                )}
                <div className="pair-details-text">
                  <p id="pair-details-text-first">
                    {coinsData && coinsData[7].id}
                    <span>/USDT</span>
                  </p>
                  <p id="pair-details-text-second">
                    {coinsData && coinsData[7].name.toLowerCase()}
                  </p>
                </div>
              </div>
              <div className="rate_change-rate">
                <p id="rate_change-rate-upper">
                  {coinsData && coinsData[7].market_cap_change_24h.toString().slice(0, 4)}
                </p>
                <p
                  style={{ textAlign: "right" }}
                  id="rate_change-rate-lower"
                  className={
                    coinsData &&
                    (coinsData[7].price_change_percentage_24h <= 0
                      ? "api-red"
                      : "api-green")
                  }
                >
                  {coinsData && `${coinsData[7].price_change_percentage_24h.toFixed(2)} %`}
                </p>
              </div>
            </div>
          </div>

          {/* lower */}

          <div
            className={`half-container-small-lower ${
              coinsData ? "ApiBoxEnable" : "ApiBoxDisable"
            }`}
          >
            <div className="half-container-biggest-title">
              <p id="half-container-biggest-title-main">PM Markets</p>
            </div>

            <div className="half-container-small-coins-details">
              <div className="pair-details">
              {coinsData && (
                  <img
                    src={coinsData[8].image}
                    alt=""
                    style={{ height: "35px" }}
                  />
                )}
                <div className="pair-details-text">
                  <p id="pair-details-text-first">
                  {coinsData && coinsData[8].id}
                    <span>/USDT</span>
                  </p>
                  <p id="pair-details-text-second">
                  {coinsData && coinsData[8].name.toLowerCase()}
                  </p>
                </div>
              </div>
              <div className="rate_change-rate">
                <p id="rate_change-rate-upper" >
                {coinsData && coinsData[8].market_cap_change_24h.toString().slice(0, 4)}
                </p>
                <p style={{ textAlign: "right" }} id="rate_change-rate-lower"  className={
                    coinsData &&
                    (coinsData[8].price_change_percentage_24h <= 0
                      ? "api-red"
                      : "api-green")
                  }>
                                      {coinsData && `${coinsData[8].price_change_percentage_24h.toFixed(2)} %`}

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coins;

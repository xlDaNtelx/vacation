import React from "react";
import moment from "moment";

import ship from "./pirate_boat.png";
import vacation from "./vacation.jpg";

import "bootstrap/dist/css/bootstrap-grid.min.css";

const humanizeUADate = daysNumber => {
  if (daysNumber > 4 && daysNumber < 20) {
    return `${daysNumber} днів`;
  } else if (daysNumber === 1) {
    return `${daysNumber} день`;
  } else if (daysNumber > 20) {
    return `${daysNumber} дні`;
  } else {
    return `${daysNumber} дні`;
  }
};

function App() {
  const startDate = new Date().getTime() + 7200000;
  const endDate = moment("2020-01-09T00:00:00.000Z").toDate();
  const diff = moment.duration(endDate - startDate).asDays();
  const diffFormatted = Math.ceil(diff);

  const VACATION_DURATION = 17;

  const daysArr = Array(VACATION_DURATION).fill("mock");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12" style={{ textAlign: "center" }}>
          <h1 style={{ padding: 0 }}>
            До повернення цього розбійника залишилось
            <br />
            <bold style={{ color: "blue" }}>
              <i> {humanizeUADate(diffFormatted)}</i>
            </bold>
          </h1>
        </div>
      </div>
      <div className="row">
        {daysArr.map((_, index) => (
          <div className="col-sm-2 col-4">
            <img
              style={{
                width: "90px",
                transform: "rotateY(180deg)",
                display: "block",
                visibility: `${
                  index === VACATION_DURATION - diffFormatted
                    ? "visible"
                    : "hidden"
                }`,
                margin: "10px auto"
              }}
              src={ship}
              alt=""
            />
            <div
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                backgroundColor: `${
                  index === VACATION_DURATION - diffFormatted
                    ? "#186811"
                    : index < VACATION_DURATION - diffFormatted
                    ? "#827b7b"
                    : "blue"
                }`,
                color: "#fff",
                textAlign: "center",
                lineHeight: "45px",
                margin: "5px auto"
              }}
            >
              {index + 1}
            </div>
          </div>
        ))}
        <div
          style={{
            padding: "20px",
            marginTop: "30px",
          }}
          s
        >
          <img
            src={vacation}
            alt=""
            style={{
              width: "100%",
              boxShadow: "-1px -1px 15px blue"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

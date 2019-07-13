import React from "react";
import moment from "moment";
import grebec from "./grebec.jpg";
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
  const startDate = new Date();
  const endDate = moment("2019-08-05T00:00:00.000Z").toDate();
  const diff = moment.duration(endDate - startDate).asDays();
  const diffFormatted = Math.ceil(diff);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12" style={{ textAlign: "center" }}>
          <h1 style={{ padding: 0 }}>
            До повернення грєбца залишилось
            <br />
            <bold style={{ color: "blue" }}>
              {humanizeUADate(diffFormatted)}
            </bold>
          </h1>
          <div className="p-4">
            <img
              width="40%"
              style={{
                borderRadius: ".25em",
                minWidth: "280px",
                maxWidth: "560px"
              }}
              src={grebec}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

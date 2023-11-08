import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 18, 17, 12]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              className="bar-chart-css"
            //   width="900"
            //   height="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
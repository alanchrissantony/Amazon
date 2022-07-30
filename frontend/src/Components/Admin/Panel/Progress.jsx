import React from "react";
import "./Progress.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Progress() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0 circleProgressBarDiv">
          <CircularProgressbar
            className="CircularProgressbar"
            value={60}
            text={`${60}%`}
            styles={{
                path: {
                    // Path color
                    stroke: '#dc3545',
                    
                    transformOrigin: 'center center',
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: '#212529',
                    // Text size
                    fontSize: '16px',
                  }
            }}
          />
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0 circleProgressBarDiv">
          <CircularProgressbar
            className="CircularProgressbar"
            value={80}
            text={`${80}%`}
            styles={{
                
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: '#212529',
                    // Text size
                    fontSize: '16px',
                  }
            }}
          />
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0 circleProgressBarDiv">
          <CircularProgressbar
            className="CircularProgressbar"
            value={30}
            text={`${30}%`}
            styles={{
                path: {
                    // Path color
                    stroke: '#28a745',
                    
                    transformOrigin: 'center center',
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: '#d6d6d6',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: '#212529',
                    // Text size
                    fontSize: '16px',
                  }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Progress;

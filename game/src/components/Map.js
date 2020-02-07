import React, {useState, useEffect} from "react";
import './component-css/Map.css';
import { getData } from "../store/actions";
import { connect } from 'react-redux'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, AreaSeries, MarkSeries, LineMarkSeries, HexbinSeries } from 'react-vis';

function Map({ data, isFetching, error, getData }) {

    useEffect(() => {
        getData();
    }, [getData]);



const mapData = [{
    "Java Build": {
      "id": 31,
      "title": "Java Build",
      "description": "Build a Java Backend API!",
      "n_to": 0,
      "s_to": 29,
      "w_to": 32,
      "e_to": 0
    },
    "First day of school ": {
      "id": 13,
      "title": "First day of school ",
      "description": "To the North, the Web awaits. To the West, the DS awaits. To the East, the IOS awaits. To the South, the UX awaits.",
      "n_to": 14,
      "s_to": 54,
      "w_to": 34,
      "e_to": 74
    },
    "User Interface ": {
      "id": 14,
      "title": "User Interface ",
      "description": "Ability to craft a user interface, a key skill for web developers",
      "n_to": 15,
      "s_to": 13,
      "w_to": 0,
      "e_to": 0
    },
    "BackEnd Reunion": {
      "id": 32,
      "title": "BackEnd Reunion",
      "description": "Get back together with your friends!",
      "n_to": 33,
      "s_to": 0,
      "w_to": 30,
      "e_to": 31
    },
    "Career Lecture": {
      "id": 33,
      "title": "Career Lecture",
      "description": "Learn what exactly goes into Lambda School's career endorsement project",
      "n_to": 94,
      "s_to": 32,
      "w_to": 0,
      "e_to": 0
    },
    "Exploratory Data Analysis": {
      "id": 34,
      "title": "Exploratory Data Analysis",
      "description": "Cover the Lambda School Data Science Github workflow and assignment submission process.",
      "n_to": 0,
      "s_to": 0,
      "w_to": 35,
      "e_to": 13
    },
    "Make Features": {
      "id": 35,
      "title": "Make Features",
      "description": "At the end of this module, you should be able to understand the purpose of feature engineering.",
      "n_to": 36,
      "s_to": 0,
      "w_to": 0,
      "e_to": 34
    },
    "Join and Reshape Data": {
      "id": 36,
      "title": "Join and Reshape Data",
      "description": "Preparing data isn’t just about importing it and imputing missing values. ",
      "n_to": 37,
      "s_to": 35,
      "w_to": 0,
      "e_to": 0
    },
    "Make Explanatory Visualizations": {
      "id": 37,
      "title": "Make Explanatory Visualizations",
      "description": "Identify misleading visualizations, utilize basic matplotlib terminology.",
      "n_to": 38,
      "s_to": 36,
      "w_to": 0,
      "e_to": 0
    },
    "Probability, Statistics, and Inference": {
      "id": 38,
      "title": "Probability, Statistics, and Inference",
      "description": "Statistics accepts situations where the exact and complete are unattainable.",
      "n_to": 39,
      "s_to": 37,
      "w_to": 0,
      "e_to": 0
    },
    "Advanced State Management": {
      "id": 21,
      "title": "Advanced State Management",
      "description": "Context API, Reducer Pattern, Redux, Async Redux.",
      "n_to": 22,
      "s_to": 20,
      "w_to": 24,
      "e_to": 0
    },
    "Advanced Web Applications": {
      "id": 22,
      "title": "Advanced Web Applications",
      "description": "Testing React, Client-Side Auth, AJAX, Deploying Web Apps.",
      "n_to": 23,
      "s_to": 21,
      "w_to": 0,
      "e_to": 0
    },
    "Delivering a Single Page App": {
      "id": 23,
      "title": "Delivering a Single Page App",
      "description": "You will be a Front-End Architect, show off your skills!",
      "n_to": 0,
      "s_to": 22,
      "w_to": 24,
      "e_to": 25
    },
    "Build a Web API": {
      "id": 24,
      "title": "Build a Web API",
      "description": "Web services based on the REST (REpresentational State Transfer) architecture.",
      "n_to": 26,
      "s_to": 0,
      "w_to": 0,
      "e_to": 23
    },
    "WEB Java Fundamentals": {
      "id": 25,
      "title": "WEB Java Fundamentals",
      "description": "Learning the Java fundamentals and its emphasis on API programming",
      "n_to": 27,
      "s_to": 0,
      "w_to": 23,
      "e_to": 0
    },
    "Adding Data Persistence": {
      "id": 26,
      "title": "Adding Data Persistence",
      "description": "Databases are ubiquitous in just about everything we do.",
      "n_to": 28,
      "s_to": 24,
      "w_to": 0,
      "e_to": 0
    },
    "Java with RDBMS and API Introduction": {
      "id": 27,
      "title": "Java with RDBMS and API Introduction",
      "description": "Web APIs using Java and the Spring Framework and connecting those to a PostgreSQL database",
      "n_to": 29,
      "s_to": 25,
      "w_to": 0,
      "e_to": 0
    },
    "Authentication and Testing": {
      "id": 28,
      "title": "Authentication and Testing",
      "description": " Auth ties in the principles of Server Sessions Password Encryption/Hashing Security Risks.",
      "n_to": 30,
      "s_to": 26,
      "w_to": 0,
      "e_to": 0
    },
    "Java Frameworks": {
      "id": 29,
      "title": "Java Frameworks",
      "description": "Enhancing our Web APIs with exception handling, paging, caching, testing, and finally deployment.",
      "n_to": 31,
      "s_to": 27,
      "w_to": 0,
      "e_to": 0
    },
    "Node Build": {
      "id": 30,
      "title": "Node Build",
      "description": "Build a Node Backend API",
      "n_to": 0,
      "s_to": 28,
      "w_to": 0,
      "e_to": 32
    },
    "Advanced CSS ": {
      "id": 15,
      "title": "Advanced CSS ",
      "description": "Responsive design pushes our basic CSS styling forward for thousands of devices",
      "n_to": 16,
      "s_to": 14,
      "w_to": 0,
      "e_to": 0
    },
    "JavaScript Fundamentals ": {
      "id": 16,
      "title": "JavaScript Fundamentals ",
      "description": "JS is fundamental to web development, without it, there is no web",
      "n_to": 17,
      "s_to": 15,
      "w_to": 0,
      "e_to": 0
    },
    "Applied JavaScript ": {
      "id": 17,
      "title": "Applied JavaScript ",
      "description": "Applying your JS knowledge to the Document Object Model and creating rich JS UIs.",
      "n_to": 18,
      "s_to": 16,
      "w_to": 0,
      "e_to": 0
    },
    "Intro to React ": {
      "id": 18,
      "title": "Intro to React ",
      "description": "React is a UI library that is used in various forms to create complex, rich user interfaces.",
      "n_to": 19,
      "s_to": 17,
      "w_to": 0,
      "e_to": 0
    },
    "Single Page Applications ": {
      "id": 19,
      "title": "Single Page Applications ",
      "description": "Modern applications are built where React App and server are separated out into their own concepts.",
      "n_to": 20,
      "s_to": 18,
      "w_to": 0,
      "e_to": 0
    },
    "Sampling and other key topics related to sampling ": {
      "id": 39,
      "title": "Sampling and other key topics related to sampling ",
      "description": "Sampling and other key topics related to sampling such as confidence intervals and hypothesis testing.",
      "n_to": 40,
      "s_to": 38,
      "w_to": 0,
      "e_to": 0
    },
    "Introduction to Bayesian Inference": {
      "id": 40,
      "title": "Introduction to Bayesian Inference",
      "description": "Frequentist statistics is well-established, and is still the default in most situations.",
      "n_to": 41,
      "s_to": 39,
      "w_to": 0,
      "e_to": 0
    },
    "Vectors and Matrices": {
      "id": 41,
      "title": "Vectors and Matrices",
      "description": "Fundamentals of linear algebra is critical in order to be a well-rounded data scientist.",
      "n_to": 42,
      "s_to": 40,
      "w_to": 0,
      "e_to": 0
    },
    "Intermediate Linear Algebra": {
      "id": 42,
      "title": "Intermediate Linear Algebra",
      "description": "Review of some basic statistics concepts: Variance, Standard Deviation, Covariance, Correlation.",
      "n_to": 43,
      "s_to": 41,
      "w_to": 0,
      "e_to": 0
    },
    "Dimensionality Reduction Techniques": {
      "id": 43,
      "title": "Dimensionality Reduction Techniques",
      "description": "Introduction to: Vector transformations, Eigenvectors and Eigenvalues, The “Curse of Dimensionality.”",
      "n_to": 44,
      "s_to": 42,
      "w_to": 0,
      "e_to": 0
    },
    "Clustering": {
      "id": 44,
      "title": "Clustering",
      "description": "General overview for the different categories of Machine Learning Algorithms",
      "n_to": 0,
      "s_to": 43,
      "w_to": 45,
      "e_to": 0
    },
    "Regression 1": {
      "id": 45,
      "title": "Regression 1",
      "description": "Here you will begin with baselines for regression.",
      "n_to": 46,
      "s_to": 0,
      "w_to": 0,
      "e_to": 44
    },
    "Regression 2": {
      "id": 46,
      "title": "Regression 2",
      "description": "Learn to do train/test split regressions.",
      "n_to": 47,
      "s_to": 45,
      "w_to": 0,
      "e_to": 0
    },
    "Ridge Regression": {
      "id": 47,
      "title": "Ridge Regression",
      "description": "Do one-hot encoding of categorical features.",
      "n_to": 48,
      "s_to": 46,
      "w_to": 0,
      "e_to": 0
    },
    "Logistic Regression": {
      "id": 48,
      "title": "Logistic Regression",
      "description": "Train/validate/test split.",
      "n_to": 49,
      "s_to": 47,
      "w_to": 0,
      "e_to": 0
    },
    "Decision Trees": {
      "id": 49,
      "title": "Decision Trees",
      "description": "In this module you'll learn to clean data with outliers and missing values.",
      "n_to": 50,
      "s_to": 48,
      "w_to": 0,
      "e_to": 0
    },
    "Advanced React": {
      "id": 20,
      "title": "Advanced React",
      "description": "Class Components, React lifecycle, Testing Web Apps.",
      "n_to": 21,
      "s_to": 19,
      "w_to": 0,
      "e_to": 0
    }
  }
]

console.log('DATA', data)

return(
    <div class="map-border">
        <XYPlot
        width={500}
        height={500}>
        <HorizontalGridLines />
        <LineMarkSeries
          data={[//orientation
            {x: 0, y: 0},
            //web
            {x: 0, y: 1},
            {x: 0, y: 2},
            {x: 0, y: 3},
            {x: 0, y: 4},
            {x: 0, y: 5},
            {x: 0, y: 6},
            {x: 0, y: 7},
            {x: 0, y: 8},
            {x: 0, y: 9},
            {x: 0, y: 10},
            //node
            {x: -1, y: 10},
            {x: -1, y: 11},
            {x: -1, y: 12},
            {x: -1, y: 13},
            {x: 0, y: 13},
            {x: 0, y: 14},
          ]}
          lineStyle={{stroke:"red", fill: "none"}}
        />
        <LineMarkSeries
          data={[ //java
          {x: 0, y: 10},
          {x: 1, y: 10},
          {x: 1, y: 11},
          {x: 1, y: 12},
          {x: 1, y: 13},
          {x: 0, y: 13},
          ]}
          lineStyle={{stroke:"red", fill: "none"}}
        />
        <LineMarkSeries
          data={[// data science plot
            {x: 0, y: 0},
            {x: -1, y: 0},
            {x: -2, y: 0},
            {x: -2, y: 1},
            {x: -2, y: 2},
            {x: -2, y: 3},
            {x: -2, y: 4},
            {x: -2, y: 5},
            {x: -2, y: 6},
            {x: -2, y: 7},
            {x: -2, y: 8},
            {x: -2, y: 9},
            {x: -2, y: 10},
            {x: -2, y: 11},
            {x: -2, y: 12},
            {x: -2, y: 13},
            {x: -2, y: 14},
            {x: -1, y: 14},
            {x: 0, y: 14},
          ]}
          lineStyle={{stroke:"red", fill:"none"}}
        />
        <LineMarkSeries
        data={[
          {x:0, y:14},
          {x:0, y:15},
          {x:0, y:16},
          {x:0, y:17},
          {x:0, y:18},
          {x:0, y:19},
          {x:0, y:20}, 
          {x:0, y:21},
          {x:0, y:22},
          {x:0, y:23},
          {x:0, y:24},
          {x:0, y:25},
          {x:0, y:26},
          {x:0, y:27},
          {x:0, y:28 }
        ]}/>
        <LineMarkSeries
          data={[// IOS plot
          {x: 0, y: 0},
          {x: 1, y: 0},
          {x: 2, y: 0},
          {x: 2, y: 1},
          {x: 2, y: 2},
          {x: 2, y: 3},
          {x: 2, y: 4},
          {x: 2, y: 5},
          {x: 2, y: 6},
          {x: 2, y: 7},
          {x: 2, y: 8},
          {x: 2, y: 9},
          {x: 2, y: 10},
          {x: 2, y: 11},
          {x: 2, y: 12},
          {x: 2, y: 13},
          {x: 2, y: 14},
          {x: 1, y: 14},
          {x: 0, y: 14}
          ]}
          lineStyle={{stroke:"red", fill:"none"}}

          
        />
        <LineMarkSeries
          data={[// IOS plot
          {x: 0, y: 0},
          {x: 0, y: -20}
          ]}
          lineStyle={{stroke:"red", fill:"none"}}

          
        />
        <MarkSeries
        color="darkred"
        data={[
          //orientation
          {x: 0, y: 0},
          //web
          {x: 0, y: 1},
          {x: 0, y: 2},
          {x: 0, y: 3},
          {x: 0, y: 4},
          {x: 0, y: 5},
          {x: 0, y: 6},
          {x: 0, y: 7},
          {x: 0, y: 8},
          {x: 0, y: 9},
          {x: 0, y: 10},
          //node
          {x: -1, y: 10},
          {x: -1, y: 11},
          {x: -1, y: 12},
          {x: -1, y: 13},
          //java
          {x: 1, y: 10},
          {x: 1, y: 11},
          {x: 1, y: 12},
          {x: 1, y: 13},
          //web reuntion
          {x: 0, y: 13},
          {x: 0, y: 14},





          // data science plot
          {x: -1, y: 0},
          {x: -2, y: 0},
          {x: -2, y: 1},
          {x: -2, y: 2},
          {x: -2, y: 3},
          {x: -2, y: 4},
          {x: -2, y: 5},
          {x: -2, y: 6},
          {x: -2, y: 7},
          {x: -2, y: 8},
          {x: -2, y: 9},
          {x: -2, y: 10},
          {x: -2, y: 11},
          {x: -2, y: 12},
          {x: -2, y: 13},
          {x: -2, y: 14},
          {x: -1, y: 14},
          
          // ux plot
          {x: 0, y: -1},
          {x: 0, y: -2},
          {x: 0, y: -3},
          {x: 0, y: -4},
          {x: 0, y: -5},
          {x: 0, y: -6},
          {x: 0, y: -7},
          {x: 0, y: -8},
          {x: 0, y: -9},
          {x: 0, y: -10},
          {x: 0, y: -11},
          {x: 0, y: -12},
          {x: 0, y: -13},
          {x: 0, y: -14},
          {x: 0, y: -15},
          {x: 0, y: -16},
          {x: 0, y: -17},
          {x: 0, y: -18},
          {x: 0, y: -19},
          {x: 0, y: -20},
          

          {x: 1, y: 0},
          {x: 2, y: 0},
          {x: 2, y: 1},
          {x: 2, y: 2},
          {x: 2, y: 3},
          {x: 2, y: 4},
          {x: 2, y: 5},
          {x: 2, y: 6},
          {x: 2, y: 7},
          {x: 2, y: 8},
          {x: 2, y: 9},
          {x: 2, y: 10},
          {x: 2, y: 11},
          {x: 2, y: 12},
          {x: 2, y: 13},
          {x: 2, y: 14},
          {x: 1, y: 14}









        ]}/>
      
      </XYPlot>
    </div>
);

}

const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getData})(Map);
// export default Map
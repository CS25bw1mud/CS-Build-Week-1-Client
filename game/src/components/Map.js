import React, {useEffect} from "react";
import './component-css/Map.css';
import { getData, getInit } from "../store/actions";
import { connect } from 'react-redux'
import { XYPlot, HorizontalGridLines, MarkSeries, LineMarkSeries } from 'react-vis';

function Map({ data, isFetching, error, getData, gameData, initInfo, getInit }) {

    useEffect(() => {
        getData();
    }, [getData]);



console.log('DATA', data)
console.log("INITINFO TITLE!!!!", initInfo.title)

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
            {x: -2, y: 15},
            {x: -1, y: 15},
            {x: 0, y: 15}
            
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
          {x:0, y:28},
          {x:0, y:29},
          {x:0, y:30},
          {x:0, y:31},
          {x:0, y:32}
          
        ]}
        lineStyle={{stroke:"red", fill:"none"}}/>
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
          {x: 2, y: 15},
          {x: 1, y: 15},
          {x: 0, y: 15}
          ]}
          lineStyle={{stroke:"red", fill:"none"}}

          
        />
        <LineMarkSeries
          data={[// UX plot
          {x: 0, y: 0},
          {x: 0, y: -21}
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
          //web reunion
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
          {x: -2, y: 15},
          {x: -1, y: 15},
          
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
        ]}/>
        {/* WEB STARTS HERE */}
        {
        initInfo.title === "First day of school " ?             
          <MarkSeries
            color="white" 
            data = {[{x: 0, y: 0}]}
          />
          :
          null 
        } 
        
        {
          initInfo.title === "User Interface " ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 1}]}
            />
            :
            null 
        } 

        {
          initInfo.title === "Advanced CSS " ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 2}]}
            />
            :
            null 
        }

        {
          initInfo.title === "BackEnd Reunion" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 13}]}
            />
            :
            null 
          } 
          {
          initInfo.title === "Career Lecture" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 14}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "JavaScript Fundamentals " ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 3}]}
            />
            :
            null 
          } 
          
          {
          initInfo.title === "Applied JavaScript " ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 4}]}
            />
            :
            null 
          } 
          
          {
          initInfo.title === "Intro to React " ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 5}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "Single Page Applications " ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 6}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "Advanced React" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 7}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "Advanced State Management" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 8}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "Advanced Web Applications" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 9}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "Delivering a Single Page App" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: 10}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "Build a Web API" ?             
            <MarkSeries
              color="white" 
              data = {[{x: -1, y: 10}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "WEB Java Fundamentals" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 1, y: 10}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "Adding Data Persistence" ?             
            <MarkSeries
              color="white" 
              data = {[{x: -1, y: 11}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "Java with RDBMS and API Introduction" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 1, y: 11}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "Authentication and Testing" ?             
            <MarkSeries
              color="white" 
              data = {[{x: -1, y: 12}]}
            />
            :
            null 
          } 

          {
          initInfo.title === "Java Frameworks" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 1, y: 12}]}
            />
            :
            null 
          }   

          {
          initInfo.title === "Node Build" ?             
            <MarkSeries
              color="white" 
              data = {[{x: -1, y: 13}]}
            />
            :
            null 
          }  

          {
          initInfo.title === "Java Build" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 1, y: 13}]}
            />
            :
            null 
          }                              
          {/*  DATA SCIENCE STARTS HERE */}
          {
          initInfo.title === "Exploratory Data Analysis" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -1, y: 0}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Make Features" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 0}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Join and Reshape Data" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 1}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Make Explanatory Visualizations" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 2}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Probability, Statistics, and Inference" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 3}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Sampling and other key topics related to sampling " ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 4}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Introduction to Bayesian Inference" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 5}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Vectors and Matrices" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 6}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Intermediate Linear Algebra" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 7}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Dimensionality Reduction Techniques" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 8}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Clustering" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 9}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Regression 1" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 10}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Regression 2" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 11}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Ridge Regression" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 12}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Logistic Regression" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 13}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Decision Trees" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 14}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Random Forests" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -2, y: 15}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Cross-Validation" ?             
            <MarkSeries
            color="white" 
            data = {[{x: -1, y: 15}]}
            />
            :
            null 
        }
          {/* IOS */}

          {
            initInfo.title === "Swift Fundamentals" ?             
              <MarkSeries
                color="white" 
                data = {[{x: 1, y: 0}]}
              />
              :
              null 
          } 
        {
          initInfo.title === "iOS Fundamentals I" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 0}]}
            />
            :
            null 
          } 

        {
          initInfo.title === "iOS Fundamentals II" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 1}]}
            />
            :
            null 
        } 
          {
          initInfo.title === "iOS Unit 1 Build" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 2}]}
            />
            :
            null 
          } 
          {
          initInfo.title === "iOS Networking Basics" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 3}]}
            />
            :
            null 
          } 
          {
          initInfo.title === "iOS User Interface" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 4}]}
            />
            :
            null 
          } 
          {
          initInfo.title === "Core Data" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 5}]}
            />
            :
            null 
          } 
        {
          initInfo.title === "iOS Unit 2 Build" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 6}]}
            />
            :
            null 
          } 

        {
          initInfo.title === "Intermediate Swift" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 7}]}
            />
            :
            null 
          } 
        {
          initInfo.title === "iOS Code Quality" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 8}]}
            />
            :
            null 
          } 

        {
          initInfo.title === "Modularity" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 9}]}
            />
            :
            null 
          } 

        {
          initInfo.title === "iOS Unit 3 Build" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 10}]}
            />
            :
            null 
          } 

        {
          initInfo.title === "iOS Media Programming" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 11}]}
            />
            :
            null 
          } 

        {
          initInfo.title === "Objective-C Part 1" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 12}]}
            />
            :
            null 
          } 

        {
          initInfo.title === "Objective-C Part 2" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 13}]}
            />
            :
            null 
          } 

        {
          initInfo.title === "Swift and ObjC Interoperability" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 14}]}
            />
            :
            null 
          } 

        {
          initInfo.title === "KVO/KVC" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 2, y: 15}]}
            />
            :
            null 
          }

        {/* {
          initInfo.title === "Memory Management" ?             
            <MarkSeries
              color="white" 
              data = {[{x: -1, y: 15}]}
            />
            :
            null 
          } */}

        {
          initInfo.title === "iOS Unit 4 Build" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 1, y: 15}]}
            />
            :
            null 
        }

          {/* UX */}
          {
          initInfo.title === "UX Fundamentals" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -1}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Discovery" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -2}]}
            />
            :
            null 
        }
        {
          initInfo.title === "Identifying and Organizing Problems" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -3}]}
            />
            :
            null 
        }

        {
        initInfo.title === "Personas" ?             
          <MarkSeries
            color="white" 
            data = {[{x: 0, y: -4}]}
          />
          :
          null 
        }

        {
          initInfo.title === "Journey Maps" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -5}]}
            />
            :
            null 
        }

        {
          initInfo.title === "User Flows" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -6}]}
            />
            :
            null 
        }

        {
          initInfo.title === "UX Problem Solving" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -7}]}
            />
            :
            null 
        }

        {
          initInfo.title === "Simple Prototyping" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -8}]}
            />
            :
            null 
        }

        {
          initInfo.title === "Testing Usability and Research" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -9}]}
            />
            :
            null 
        }

        {
          initInfo.title === "Intro to Design Theory" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -10}]}
            />
            :
            null 
        }

        {
          initInfo.title === "High Fidelity Design" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -11}]}
            />
            :
            null 
        }

        {
          initInfo.title === "Design Collaboration" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -12}]}
            />
            :
            null 
        }

        {
          initInfo.title === "Communication building skills" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -13}]}
            />
            :
            null 
        }

        {
          initInfo.title === "UX Portfolio Building" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -14}]}
            />
            :
            null 
        }

        {
          initInfo.title === "Intro to HTML" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -15}]}
            />
            :
            null 
        }

        {
          initInfo.title === "Intro to CSS" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -16}]}
            />
            :
            null 
        }

        {
          initInfo.title === "Responsive CSS" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -17}]}
            />
            :
            null 
        }

        {
          initInfo.title === "CSS Frameworks" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -18}]}
            />
            :
            null 
        }

        {
          initInfo.title === "Intro to HTML and CSS Sprint Challenge" ?             
            <MarkSeries
              color="white" 
              data = {[{x: 0, y: -19}]}
            />
            :
            null 
        }

          {
            initInfo.title === "UX Unit Build" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: -20}]}
            />
            :
            null 
          }
          {/* {
            initInfo.title === "GOT THAT JOB" ?             
              <MarkSeries
                color="white" 
                data = {[{x: 0, y: -20}]}
              />
              :
              null 
          } */}
          
          {
            initInfo.title === "Release Cycle 1" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 15}]}
            />
            :
            null 
          }
          
          {
            initInfo.title === "Release Cycle 2" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 16}]}
            />
            :
            null 
          }

{
            initInfo.title === "Stakeholder not happy" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 17}]}
            />
            :
            null 
          }
{
            initInfo.title === "Crunch Time" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 18}]}
            />
            :
            null 
          }

{
            initInfo.title === "Intro to Python and OOP" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 19}]}
            />
            :
            null 
          }
{
            initInfo.title === "Algorithms" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 20}]}
            />
            :
            null 
          }
{
            initInfo.title === "Data Structures" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 21}]}
            />
            :
            null 
          }

{
            initInfo.title === "CS Unit 1 Build" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 22}]}
            />
            :
            null 
          }
{
            initInfo.title === "Job Search Strategy" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 23}]}
            />
            :
            null 
          }

{
            initInfo.title === "Interview/Star Stories" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 24}]}
            />
            :
            null 
          }
{
            initInfo.title === "Interview Etiquette/Strategies" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 25}]}
            />
            :
            null 
          }
          {
            initInfo.title === "Endorsement" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 26}]}
            />
            :
            null 
          }
          {
            initInfo.title === "School Support" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 27}]}
            />
            :
            null 
          }
          {
            initInfo.title === "GOT THAT JOB" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 28}]}
            />
            :
            null 
          }

{
            initInfo.title === "#hired" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 29}]}
            />
            :
            null 
          }

{
            initInfo.title === "ISA Payment" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 30}]}
            />
            :
            null 
          }

{
            initInfo.title === "Vacation" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 31}]}
            />
            :
            null 
          }

{
            initInfo.title === "Thankful" ?             
            <MarkSeries
            color="white" 
            data = {[{x: 0, y: 32}]}
            />
            :
            null 
          }

    </XYPlot>
    </div>
);
}  


const mapStateToProps = state => {
    return {
        gameData: state.gameData,
        data: state.data,
        initInfo: state.initInfo,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getData, getInit})(Map);


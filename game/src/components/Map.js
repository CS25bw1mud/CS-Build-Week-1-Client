import React, {useEffect} from "react";
import './component-css/Map.css';
import { getData } from "../store/actions";
import { connect } from 'react-redux'
import { XYPlot, HorizontalGridLines, MarkSeries, LineMarkSeries } from 'react-vis';

function Map({ data, isFetching, error, getData }) {

    useEffect(() => {
        getData();
    }, [getData]);



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
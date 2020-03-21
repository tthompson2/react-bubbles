import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

class BubblePage extends React.Component {
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

      constructor() {
        super()
        this.state = {
            colorList: [],
        };
    }
    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get("/colors") // need to edit this to be where ever the data is stored for the server
            .then(res => {
                console.log(res);
                this.setState({
                    colorList: res.data.map(item => item)
                  
                })
            })
    }


  render() {
  return (
    <>
      <ColorList colors={this.state.colorList} updateColors={this.state.setColorList} />
      <Bubbles colors={this.state.colorList} />
    </>
  );
}
};

export default BubblePage;


// import React from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

// class BubbleAuth extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             color: [],
//         };
//     }
//     componentDidMount() {
//         this.getData();
//     }

//     getData = () => {
//         axiosWithAuth()
//             .get("/colors") // need to edit this to be where ever the data is stored for the server
//             .then(res => {
//                 console.log(res);
//                 this.setState({
//                     friend: res.data.map(item => JSON.stringify(item))
                  
//                 })
//             })
//     }

//     render() {
//         return <div>
//             {this.state.friend}
//         </div>
//     }
    

// }

// export default BubbleAuth;
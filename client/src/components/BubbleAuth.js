import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class BubbleAuth extends React.Component {

    constructor() {
        super()
        this.state = {
            color: [],
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
                    friend: res.data.map(item => JSON.stringify(item))
                  
                })
            })
    }

    render() {
        return <div>
            {this.state.friend}
        </div>
    }
    

}

export default BubbleAuth;
import React, { Component } from 'react';
import loading from "./ajax-loader.gif";
class Spinner extends Component {
    state = {  }
    render() { 
        return ( <div className="text-center">
            <img src={loading} alt="loading" /> 
        </div> );
    }
}
 
export default Spinner;
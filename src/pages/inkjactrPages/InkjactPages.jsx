import React, { Component } from 'react';
import FoterComponent from '../../compomet/footer/FoterComponent';
import Navigationbar from '../../compomet/navber/Navigationbar';
import Inkject from '../../compomet/inkject/Inkject';

class InkjactPages extends Component {
    render() {
        return (
            <div>
                <Navigationbar/>
                <Inkject/>
                <FoterComponent/> 
            </div>
        );
    }
}

export default InkjactPages;
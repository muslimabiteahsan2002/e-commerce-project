import React, { Component } from 'react';
import FoterComponent from '../../compomet/footer/FoterComponent';
import Navigationbar from '../../compomet/navber/Navigationbar';
import OurInfor from '../../compomet/ourInfor/OurInfor';

class InforPage extends Component {
    render() {
        return (
            <div>
                <Navigationbar/>
                <OurInfor/>
                <FoterComponent/>
            </div>
        );
    }
}

export default InforPage;
import React, { Component } from 'react';
import FoterComponent from '../../compomet/footer/FoterComponent';
import Navigationbar from '../../compomet/navber/Navigationbar';

class DodPage extends Component {
    render() {
        return (
            <div>
                <Navigationbar/>
                <FoterComponent/>
            </div>
        );
    }
}

export default DodPage;
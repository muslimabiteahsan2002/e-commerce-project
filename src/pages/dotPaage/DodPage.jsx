import React, { Component } from 'react';
import FoterComponent from '../../compomet/footer/FoterComponent';
import Navigationbar from '../../compomet/navber/Navigationbar';
import DotPinter from '../../compomet/dotPinter/DotPinter';

class DodPage extends Component {
    render() {
        return (
            <div>
                <Navigationbar/>
                <DotPinter/>
                <FoterComponent/>
            </div>
        );
    }
}

export default DodPage;
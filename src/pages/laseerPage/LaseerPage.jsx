import React, { Component, Fragment } from 'react';
import Navigationbar from '../../compomet/navber/Navigationbar';
import FoterComponent from '../../compomet/footer/FoterComponent';
import Laser from '../../compomet/laser/LaserCom';

class LaseerPage extends Component {
    render() {
        return (
            <Fragment>
                <Navigationbar/>
                <Laser/>
                <FoterComponent/>
            </Fragment>
        );
    }
}

export default LaseerPage;
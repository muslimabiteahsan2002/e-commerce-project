import React, { Component } from 'react';
import FoterComponent from '../../compomet/footer/FoterComponent';
import Navigationbar from '../../compomet/navber/Navigationbar';
import Laser from '../../compomet/laser/Laser';

class LaseerPage extends Component {
    render() {
        return (
            <div>
               <Navigationbar/>
               <Laser/>
               <FoterComponent/> 
            </div>
        );
    }
}

export default LaseerPage;
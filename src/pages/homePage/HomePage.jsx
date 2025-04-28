import React, { Component } from 'react';
import FoterComponent from '../../compomet/footer/FoterComponent';
import Navigationbar from '../../compomet/navber/Navigationbar';
import Home from '../../compomet/home/Home';

class HomePage extends Component {
    render() {
        return (
            <frameElement>
                <Navigationbar/>
                <Home/>
                <FoterComponent/>
            </frameElement>
        );
    }
}

export default HomePage;
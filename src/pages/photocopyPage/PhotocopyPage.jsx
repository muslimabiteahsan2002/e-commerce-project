import React, { Component } from 'react';
import FoterComponent from '../../compomet/footer/FoterComponent';
import Navigationbar from '../../compomet/navber/Navigationbar';
import PhotoCopy from '../../compomet/photoCopy/PhotoCopy';

class PhotocopyPage extends Component {
    render() {
        return (
            <div>
                <Navigationbar/>
                <PhotoCopy/>
                <FoterComponent/>
            </div>
        );
    }
}

export default PhotocopyPage;
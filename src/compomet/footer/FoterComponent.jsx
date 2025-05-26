import React, { Component } from 'react';
import { Row,Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

class FoterComponent extends Component {
    render() {
        return (
            <frameElement>
                <div className='footerSstyle'>
                <Container>
                    <Row>
                        <Col className='FotterTitle'>আমাদের সম্পর্কে</Col>
                        <Col className='FotterTitle'>আমাদের পন্য সমুহ</Col>
                        <Col className='FotterTitle'>যোগাযোগ করুন</Col>
                    </Row>
                     <Row>
                        <Col>Laser Printer Toner, Desk Jet Printer Cartridge, বাংলাদেশে আমদানিকৃত যেকোনো Printer এর Professional Toner এর বাজার মূল্য জানতে ও Printer ও Professional, Toner যেকোনো সমস্যার সমাধান পেতে যোগাযোগ করুন ফোনে। Printer Toner Price in Bangladesh, Toner Cartridge Price in Bangladesh, Original & China Toner Price in Bangladesh. Dot Matrix Printer Ribbon, Photocopy Machine Toner, Total Solution! Any Brand & Any Type in Bangladesh</Col>
                        <Col>Home Laser Printer Toner DeskJet/InkJet Printer Cartridge Dot Printer Ribbon Photocopy Toner আমাদের কথা</Col>
                        <Col>
                            <Row xs="auto">
                                <Col><FontAwesomeIcon className='StyleYuobe' icon={faYoutube} /></Col>
                                <Col><FontAwesomeIcon className='StyleFac' icon={faFacebook} /></Col>
                                <Col><FontAwesomeIcon icon={faEnvelope} /></Col>
                            </Row>
                            <br/>
                            <p>01715-298047</p>
                            <br/>
                            <p>01713-588267</p>
                            <br/>
                            <p>01715-298047</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <div>
                                <FontAwesomeIcon className='StyleYuobe' icon={faYoutube} />&nbsp;&nbsp;&nbsp;
                                <FontAwesomeIcon className='StyleFac' icon={faFacebook} />&nbsp;&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            </frameElement>
        );
    }
}

export default FoterComponent;
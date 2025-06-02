import React, { Component, Fragment } from 'react';
import { Container, Table } from 'react-bootstrap';

class DotPinter extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <p>প্রিন্টার ও টোনার কার্ট্রিজ সম্পর্কিত যেকোন তথ্য জানতে ‍যেকোন সময় কল করুন:</p>
                    <p>01715-298047, 01713-875635 অথবা SMS দিয়ে রাখুন ‍আমরা যোগাযোগ করবো ।</p>
                    <h3>Epson  All Dot Printers Ribbon Price in Bangladesh.</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Epson Dot Printers Model</th>
                                <th>Ribbon Model</th>
                                <th>China  Ribbon Price</th>
                                <th>Original Ribbon  Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>LQ 300, 300+II, 310, 550, 570+, 580, 850, 850+, 870</td>
                                <td>S015639</td>
                                <td>Call</td>
                                <td>320</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>LQ 590</td>
                                <td>LQ-590</td>
                                <td>Call</td>
                                <td>600</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>LQ 2090</td>
                                <td>S015586</td>
                                <td>Call</td>
                                <td>1,450</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        );
    }
}

export default DotPinter;
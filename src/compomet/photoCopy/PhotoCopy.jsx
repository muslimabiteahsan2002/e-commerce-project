import React, { Component, Fragment } from 'react';
import { Container, Table } from 'react-bootstrap';

class PhotoCopy extends Component {
    render() {
        return (
            <Fragment>
                <title>Photocopy Toner</title>
                <Container>
                    <p>Photocopy Toner প্রিন্টার ও টোনার কার্ট্রিজ সম্পর্কিত যেকোন তথ্য জানতে ‍যেকোন সময় কল করুন:</p>
                    <p>01715-298047, 01713-875635 অথবা SMS দিয়ে রাখুন ‍আমরা যোগাযোগ করবো ।</p>
                    <Table>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Toshiba Photocopy Machine Model</th>
                                <th>Toner Model</th>
                                <th>China Toner Price</th>
                                <th>Original Toner Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>TOSHIBA T-4590D, 256, 306, 356, 456, 356SE, 456SE, 506SE</td>
                                <td>4590D+C</td>
                                <td>2,100</td>
                                <td>3,200</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>TOSHIBA T-4530D, 255, 305, 355, 455</td>
                                <td>4530D+C</td>
                                <td>2,100</td>
                                <td>3,000</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>TOSHIBA 3560, 4560</td>
                                <td>T3560</td>
                                <td>1,500</td>
                                <td>2,200</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>TOSHIBA T3520D, 350, 450, 352, 452</td>
                                <td>T3520D</td>
                                <td>2,100</td>
                                <td>3,500</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>TOSHIBA 2550C, 2051C, 2550C, 2551C</td>
                                <td>T-2550CS</td>
                                <td>Call</td>
                                <td>Call</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>TOSHIBA T-2450D, 195, 223, 225, 243, 245</td>
                                <td>T-2450D</td>
                                <td>1,900</td>
                                <td>2,800</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>TOSHIBA 2450cs, 10K</td>
                                <td>2450 CS</td>
                                <td>1,850</td>
                                <td>2,500</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>TOSHIBA T2340D, 232</td>
                                <td>T2340D</td>
                                <td>2,200</td>
                                <td>Call</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>TOSHIBA 2060, 2860, 2870</td>
                                <td>2060/2507C+P</td>
                                <td>1,950</td>
                                <td>Call</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>TOSHIBA 181, 182, 211, 212</td>
                                <td>T1810D</td>
                                <td>1,950</td>
                                <td>Call</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        );
    }
}

export default PhotoCopy;
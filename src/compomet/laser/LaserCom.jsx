import React, { Component, Fragment } from 'react';
import { Container, Table } from 'react-bootstrap';

class LaserCom extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>HP Laser Jet Printer toner Model</th>
                                <th>Toner Model</th>
                                <th>Economy Price China</th>
                                <th>Medium Price China</th>
                                <th>Best Price China</th>
                                <th>Original Toner Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>HP Laser Printer 1010, 1015, 1018, 1020, 1022, 3015, 3020, 3030, 3050, 3055, LBP 2900, 3000</td>
                                <td>12A/303/FX-9</td>
                                <td>800</td>
                                <td>1,000</td>
                                <td>1,100</td>
                                <td>Call</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>HP  P1005, P11006, LBP-3010, 3018, 3050, 3100, 3108, 3150</td>
                                <td>35A/312</td>
                                <td>800</td>
                                <td>1,000</td>
                                <td>1,100</td>
                                <td>5,500</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        );
    }
}

export default LaserCom;
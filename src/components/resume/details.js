import { Row, Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

function Details() {
    return (
        <>
            <Row>
                <h2 style={{ color: "white", marginTop: "25px" }}>Details</h2>
                <table style={{ color: "white" }}>
                    <tr>
                        <td class="align-middle">
                            <Icon.Envelope size={24} />
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td>
                            michael.gailling@gmail.com
                        </td>
                    </tr>
                    <tr>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td class="align-middle">
                            <Icon.GeoAlt size={24} />
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td>
                            Toronto, Ontario
                        </td>
                    </tr>
                </table>
            </Row>
        </>
    )
}

export default Details
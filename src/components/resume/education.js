import { Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

function Education() {
    return (
        <>
            <Row>
                <hr style={{ height: "5px", borderWidth: 0, color: "white", backgroundColor: "white", marginTop: "25px" }} />
                <h2 style={{ color: "white" }}>Education</h2>
                <table style={{ color: "white" }}>
                    <tr>
                        <td class="align-middle">
                            <Icon.Building size={24} />
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td>
                            Centennial College
                        </td>
                    </tr>
                    <tr>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td class="align-middle">
                            <Icon.Calendar3 size={24} />
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td>
                            2019 - 2021
                        </td>
                    </tr>
                </table>
            </Row>
        </>
    )
}

export default Education
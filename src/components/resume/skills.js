import { Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

function Skills() {
    return (
        <>

            <Row>
                <hr style={{ height: "5px", borderWidth: 0, color: "white", backgroundColor: "white", marginTop: "25px" }} />
                <h2 style={{ color: "white" }}>Skills</h2>
                <table style={{ color: "white" }}>
                    <tr>
                        <td class="align-middle">
                            <Icon.CodeSlash size={24} />
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td>
                            C#, Python, JavaScript, HTML, CSS, Bootstrap, Materialize, React, Express, QT, Mongo, SQL
                        </td>
                    </tr>
                    <tr>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td class="align-middle">
                            <Icon.Display size={24} />
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td>
                            Windows, Linux
                        </td>
                    </tr>
                    <tr>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td class="align-middle">
                            <Icon.Tools size={24} />
                        </td>
                        <td>
                            &nbsp;
                        </td>
                        <td>
                            Visual Studio, VS Code, PyCharm, Postman, Visual Paradigm, GIMP, Excalidraw, OpenSCAD
                        </td>
                    </tr>
                </table>
            </Row>
        </>
    )
}

export default Skills
import {Row, Col, Button} from "antd";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
export default function Main(){

    const navigate = useNavigate()
const handleClick = () =>{
    console.log("Something Happened")
    navigate("/login")
}

    return(
        
<>
<Row style = {{background:"yellow"}}>
    <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/main">Main</Link></li>
    </ul>
</Row>
        <Row>
            <Col xl={24}>
               <h1>Home Page</h1>
            </Col>
        </Row>
       <Row>
        <Col>
        <Button type="primary" onClick={handleClick}>Logout</Button></Col>
       </Row>
        
        </>
        
    )
}
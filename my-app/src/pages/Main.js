import {Row, Col, Button} from "antd";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
export default function Main(props){

    const navigate = useNavigate()
const handleClick = () =>{
    console.log("Something Happened")
    props.logout();
    navigate("/login")
};
useEffect(() =>{
    if(props.status){
        console.log("Authentication successful")
    }
    else {
        navigate("/login")
    }
}, []);

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
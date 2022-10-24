import React, {useState} from "react";
import {Card, Col} from "antd"
export default function Movie(props){
const [age, setAge] = useState(2022-props.year)

    return(
        <Col span={8}>
                    <Card title="Movie List">
                        
                        <hr/>
            <p>{props.title} </p>
            <p>  {props.year}  </p>
            <p>{props.genre}</p>
            <p>{props.director}</p>
            <p>{age}</p>
            <hr/>
            </Card>
            </Col>
            
            
    )
}
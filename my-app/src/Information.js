import React, {useState} from "react";
import {Card, Col} from "antd"
export default function info(props){


    return(
        <Col span={8}>
                    <Card title="Information">
                        
                        <hr/>
            <p>{props.id} </p>
            <p>  {props.name}  </p>
            <p>{props.username}</p>
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <p>{props.website}</p>
            <p>{props.company}</p>
                        <hr/>
            </Card>
            </Col>
            
            
    )
}
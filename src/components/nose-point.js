import React from "react"
import PropTypes from "prop-types"
import { Card, CardHeader, CardContent } from '@material-ui/core';


const NosePoint = ({number, title, description}) => (
    <div style={{
        display: "flex",
        flexDirection: "row",
        border:"1rem",
        padding:"1rem"
    }}>
        <div>
            <div
                style = {{
                    fontSize:50,
                    padding:"0 5px"
                }}>
                {number}
            </div>
        </div>
        <Card style={{width:'250px'}}>
                <CardHeader title={title}/>
                <CardContent style={{padding:"0 5px"}}>
                    {description}
                </CardContent>
                
        </Card>
    </div>
)

NosePoint.propTypes = {
    number: PropTypes.number,
    description: PropTypes.string
}


export default NosePoint
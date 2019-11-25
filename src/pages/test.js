import React from "react"
import NosePoint from "../components/nose-point"


const TestPage = () => (
    <div style={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems: "center",
    }}>
    <NosePoint number="1" description="a lot of stuff"/>
    <NosePoint number="2" description="a lot of stuff"/>
    <NosePoint number="3" description="a lot of stuff"/>
    </div>
  )
  
  export default TestPage
  
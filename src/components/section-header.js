import React from "react"

import { COLORS } from "../styles/constants"

const SectionHeader = ({ title, description }) => (
  <>
    <h2 style={{textAlign:"center"}}>{title}</h2>
    {description!==undefined && <p style={{ color: COLORS.mediumGray }}>{description}</p>}
  </>
)

export default SectionHeader

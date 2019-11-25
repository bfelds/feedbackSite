import React from "react"
import strollerImage from "../images/stroller.jpeg"

import { makeStyles } from "@material-ui/core/styles"
import SectionHeader from "./section-header"
import {
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core"

const useStyles = makeStyles({
  card: {
    width: 300,
    margin:"5px"
  },
  cardContent: {
    marginBottom: "0",
  },
  media: {
    height: 140,
  },
})

const Form = () => {
  const classes = useStyles()

  return (
    <form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "0 1rem",
        }}
      >
        <SectionHeader title="Join our waiting list to know when this service is available in your zip code" />
        <div style={{marginBottom:"1rem"}}>
          <TextField
            id="email"
            autoComplete="true"
            label="Email Address"
            style={{ paddingRight: "5px" }}
          />
          <TextField id="zipcode" autoComplete="true" label="Zipcode" />
        </div>
        <SectionHeader title="Tell us which items you’d be interested in. Help us make sure we have what you need." />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap:"wrap",
            padding: "5px",
            justifyContent: "center",
          }}
        >
          <Card className={classes.card} 
            /*elevation="10"
            style={{
              boxShadow:"0px 6px 6px -3px rgba(0,0,0.2,0),0px 10px 14px 1px rgba(0,0,0.14,0),0px 4px 18px 3px rgba(0,0,0.12,0)"
            }}*/>
            <CardMedia
              className={classes.media}
              image={strollerImage}
              title="Stroller"
            />
            <CardContent className={classes.cardContent}>Stroller</CardContent>
          </Card>

          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={strollerImage}
              title="Stroller"
            />
            <CardContent className={classes.cardContent}>Stroller</CardContent>
          </Card>

          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={strollerImage}
              title="Stroller"
            />
            <CardContent className={classes.cardContent}>Stroller</CardContent>
          </Card>

          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={strollerImage}
              title="Stroller"
            />
            <CardContent className={classes.cardContent}>Stroller</CardContent>
          </Card>

          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={strollerImage}
              title="Stroller"
            />
            <CardContent className={classes.cardContent}>Stroller</CardContent>
          </Card>

          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={strollerImage}
              title="Stroller"
            />
            <CardContent className={classes.cardContent}>Stroller</CardContent>
          </Card>

        </div>

        <Button size="large" color="primary">Join Waitlist</Button>

      </div>
    </form>
  )
}

export default Form

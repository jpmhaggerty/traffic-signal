import * as React from "react";
import "./intersection.css";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

export default function Intersection() {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Grid container>
            <Grid item className="levelStyle">
              <Card className="greenBack xlarge" />
            </Grid>
            <Grid item>
              <Card className="blackBack xlarge">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Card className="yellowBack xlarge">
                      Long Sensors Phases 2/6
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card className="yellowBack strobe">Unused</Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card className="yellowBack">Short Sensors Phases 2/6</Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card className="yellowBack">
                      Short Sensors Exit Phases 1/5
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card className="yellowBack">Phases 2/6</Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card className="yellowBack">Pedestrian?</Card>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item>
              <Card className="greenBack xlarge" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item className="levelStyle">
            <Card className="blackBack xlarge" />
            <Card className="blackBack xlarge" />
            <Card className="blackBack xlarge" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item className="levelStyle">
            <Grid item>
              <Card className="greenBack xlarge" />
            </Grid>
            <Grid item>
              <Card className="blackBack xlarge" />
            </Grid>
            <Grid item>
              <Card className="greenBack xlarge" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

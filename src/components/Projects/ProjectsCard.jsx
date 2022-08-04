import React from "react";

import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProjectsCard = ({ projects }) => {
  return (
    <Card className="card" sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={projects.image}
          alt={projects.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projects.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {projects.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-button">
        <a href={projects.site} target="blank">
          <Button
            variant="contained"
            disableElevation
            disableRipple
            size="small"
            color="primary"
          >
            View Site
          </Button>
        </a>
        <a href={projects.code} target="blank">
          <Button
            variant="contained"
            disableElevation
            disableRipple
            size="small"
            color="primary"
          >
            View Code
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default ProjectsCard;

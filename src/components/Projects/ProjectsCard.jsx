import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const ProjectsCard = ({ projects }) => {
  return (
    <Card
      className="card"
      sx={{ width: 345 }}
      data-aos="slide-up"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
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
            color={`${projects.code === null ? "warning" : "primary"}`}
          >
            {projects.code === null ? "Repository is private" : "View Code"}
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default ProjectsCard;

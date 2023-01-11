import React from "react";
import { Paper, Button } from "@mui/material";

const CarouselItem = (props) => {
  return (
    <div>
      <Paper>
        <img src={props.item?.recipe?.images?.REGULAR?.url} alt="" />
        <h2>{props.item?.recipe?.label?.substring(0, 22)}</h2>
        <Button className="CheckButton">Check it out</Button>
      </Paper>
    </div>
  );
};

export default CarouselItem;

import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function OutlinedButtons() {
  return (
    <Link to={"/adminregistrationform"}>
      <Button variant="outlined">+ create new admin</Button>
    </Link>
  );
}

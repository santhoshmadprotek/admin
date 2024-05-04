import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function ActionAreaCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card style= {{marginLeft:'80px',marginBottom:'80px'}} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/couple-with-cardboard-boxes-their-new-home_23-2149086866.jpg?w=996"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vehicle shifting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card style= {{marginLeft:'40px',marginBottom:'80px'}}sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/delivery-person-getting-parcel-out-delivery_23-2149371946.jpg?w=996"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                House shifting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card style= {{marginBottom:'80px'}} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/young-family-moving-into-new-home_23-2149199122.jpg?w=996"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Other shifting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

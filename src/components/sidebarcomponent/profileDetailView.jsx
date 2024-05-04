import React from 'react';
import { Typography, Paper, Grid, Avatar } from '@mui/material';

function ProfileDetailView({ profile }) {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Grid container spacing={2} alignItems="center">
            
          <Grid container justifyContent="center" alignItems="center">
  <Grid item>
    
    <Avatar alt={profile.name} src={profile.profilePic} sx={{ width: 150, height: 150 }} />
  </Grid>
</Grid>


            <Grid item>
             
              <Typography variant="subtitle1">
                <strong>Name:</strong> {profile.name}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Email:</strong> {profile.email}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Location:</strong> {profile.location}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Age:</strong> {profile.age}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Interests:</strong> {profile.interests.join(', ')}
              </Typography>
              <Typography variant="subtitle1">
                <strong>About:</strong> {profile.about}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ProfileDetailView;

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Contact() {
  return (
    <Grid>
        <Grid>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
        </Grid>
        <Box
      component="form"
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
        <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
        <TextField multiline
          rows={6} fullWidth id="outlined-basic" label="Message" variant="outlined" />
        </Grid>
      </Grid>
      <Button variant="contained">Send Message</Button>
    </Box>
    </Grid>
    
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Contact() {
  return (
    <Box sx={{padding:5,display:'flex',flexWrap:'wrap',flexDirection:'column',gap:5,justifyContent:'center',alignItems:'center'}}>
      <Grid sx={{textAlign:'center'}}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
      </Grid>
      <Box component="form" sx={{display:'grid',placeItems:'center'}}>
        <Grid container spacing={2} sx={{paddingBottom:4}}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              rows={6}
              fullWidth
              id="outlined-basic"
              label="Message"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button variant="contained">Send Message</Button>
      </Box>
    </Box>
  );
}

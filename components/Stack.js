import React from 'react'
import Image from 'next/image'
import Why from '../images/why.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Stack({title}) {
    return (
        <Paper className="w-[250px] p-2 text-left">
            <Image src={Why}/>
            <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Button variant="outlined">Read More</Button>
        </Paper>
    )
}

export default Stack
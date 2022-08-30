import React from 'react'
import Image from 'next/image'
import Why from '../images/why.png'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function Sector({ title }) {
    return (
        <Paper className="w-[270px] text-left p-2">
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
        </Paper>
    )
}

export default Sector
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import ProfilePicture from '../../shared/ProfilePicture.jpeg'

const ContactDevsPage = () => {
  return (
        <Box display="flex" flexDirection="column" textAlign="center" alignItems="center">
          <Typography variant='h2' mb={2}><strong>Our Dev Team</strong></Typography>
          <Box display="flex" flexDirection="column" textAlign="center" alignItems="center" mb={4}>
            <Typography variant="h4">Lucas Merchant</Typography>
            <Typography variant="body1" mb={1}>Software Developer</Typography>
            <Avatar
              src={ProfilePicture}
              alt="Lucas Profile Picture"
              style={{ fontSize: '100px', height: 200, width: 200, marginBottom: '8px' }}>
            </Avatar>
            <Link href="https://github.com/lbmerchant93" underline="always" variant="body1">Github: lbmerchant93</Link>
            <Link href="https://www.linkedin.com/in/lucas-merchant93/" underline="always" variant="body1">LinkedIn: lbmerchant93</Link>
          </Box>
      </Box>
  )
}

export default ContactDevsPage
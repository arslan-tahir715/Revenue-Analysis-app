import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';

export const Topbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box>
          <ToolbarTitle variant="h1">
            Admin Dashboard
          </ToolbarTitle>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

const ToolbarTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: 25,
  cursor: 'pointer',
}))

export default Topbar


import React from 'react';
import { Box, Heading } from 'grommet';
import { useNavigate } from 'react-router-dom';

export function AppBar(props) {
  const navigate = useNavigate();
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: '1' }}
      {...props}
    >
      <Heading levem="3" margin="none" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        RepoProvas
      </Heading>
    </Box>
  );
}

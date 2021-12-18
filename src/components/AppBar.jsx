import React from 'react';
import { Box, Heading } from 'grommet';

export function AppBar(props) {
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
      <Heading levem="3" margin="none">
        RepoProvas
      </Heading>
    </Box>
  );
}

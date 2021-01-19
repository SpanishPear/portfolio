import React from 'react';
import { Box } from '@material-ui/core';
import { NavBar } from '../../components';

const ConstructionPage = () => {
  return (
    <Box>
      <NavBar active="Projects" />
      <Box display="flex" alignItems="center" justifyContent="center">
        <img
          width="200px"
          height="200px"
          alt="under construction"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Under_construction_icon-yellow.svg/1200px-Under_construction_icon-yellow.svg.png"
        />
      </Box>
    </Box>
  );
};

export default ConstructionPage;

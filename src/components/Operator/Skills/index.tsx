import React from 'react';
import { Outlet } from 'react-router-dom';

import './Skills.css';

function Skills({}) {
  return (
    <>
      <p>Viewing skills</p>
      <Outlet />
    </>
  );
}

export default Skills;

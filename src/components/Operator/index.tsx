import React from 'react'
import { Outlet, useParams } from 'react-router-dom';

import './Operator.css';


function Operator({}) {
  const { operator } = useParams();

  console.log(operator);

  return (
    <>
      <p>Operator: {operator}</p>
      <Outlet />
    </>
  );
}

export default Operator;

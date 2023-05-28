import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom';

import useOperator from '../../lib/OperatorHook';
import './Operator.css';

function Operator({}) {
  const operator = useOperator();
  const operatorName = operator.getName();

  return (
    <>
      <p>Operator: {operatorName}</p>
      <Link to="">Stats</Link>
      <Link to="skills">Skills</Link>
      <Outlet />
    </>
  );
}

export default Operator;

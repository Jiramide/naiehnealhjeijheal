import React from 'react';

import {
  getOperators,
} from '../../lib/OperatorData';
import OperatorCard from './OperatorCard';

import './OperatorList.css';

function OperatorList({}) {
  const operators = getOperators();

  return (
    <div className="operator-list">
      {
        operators.map((operator) => {
          return (
            <OperatorCard
              operator={operator}
              key={operator.getId()}
            />
          );
        })
      }
    </div>
  );
}

export default OperatorList;

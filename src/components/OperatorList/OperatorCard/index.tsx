import React from 'react';
import { Link } from 'react-router-dom';

import {
  Operator,
} from '../../../lib/OperatorData';
import './OperatorCard.css';

interface Props {
  operator: Operator;
}

function OperatorCard({ operator }: Props) {
  const operatorName = operator.getName();
  const operatorImage = operator.getImage();

  return (
    <Link to={operatorName}>
      <img
        className="operator-card-image"
        src={operatorImage}
        alt={operatorName}
      />

      <p
        className="operator-card-name"
      >
        {operatorName}
      </p>
    </Link>
  );
}

export default OperatorCard;

import { useParams } from 'react-router-dom';
import { getOperatorByName } from './OperatorData';

export default function useOperator() {
  const { operator } = useParams();

  return getOperatorByName(operator);
};

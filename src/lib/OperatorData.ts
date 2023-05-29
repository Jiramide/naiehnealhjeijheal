import * from './OperatorTypes';

const operatorIds = ["skadi-31"];
const operatorIdToName = {
  "skadi-31": "Skadi",
};
const operatorNameToId = {
  "Skadi": "skadi-31",
};

function constant<T>(c): () => T {
  return () => c;
}

export function getOperatorById(operatorId: OperatorId): Operator {
  const getId = constant<OperatorId>(operatorId);
  const getName = constant<OperatorName>(operatorIdToName[operatorId]);
  const getImage = constant<OperatorImage>("");
  const getRarity = constant<OperatorRarity>(6);
  const getSkill = (skillIndex): Skill => {
    const getSkillLevel = (skillLevel): SkillLevelInfo => {
      return {
        getDescription: constant<SkillDescription>(`description sl ${skillLevel}`),
        getBlackboard: constant<Blackboard>(new Map()),
        getMaterials: constant<ResourceUsage>(new Map()),
      }
    }

    return {
      getName: constant<SkillName>(`S${skillIndex}`),
      getIcon: constant<SkillIcon>(""),
      getIndex: constant<SkillIndex>(skillIndex),
      getLevel: getSkillLevel,
      getLevels: constant<SkillLevelInfo[]>([1, 2, 3, 4, 5, 6, 7, "M1", "M2", "M3"].map(getSkillLevel)),
    };
  }
  const getSkills = constant<Skill[]>([1, 2, 3].map(getSkill));

  return { getId, getName, getImage, getSkill, getRarity, getSkills };
}

export function getOperatorByName(operatorName: OperatorName): Operator {
  return getOperatorById(
    operatorNameToId[operatorName]
  );
}

export function getOperators(): Operator[] {
  return operatorIds.map(getOperatorById);
}

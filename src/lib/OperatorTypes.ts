export type OperatorId = string;
export type OperatorName = string;
export type OperatorImage = string;
export type OperatorRarity = 1 | 2 | 3 | 4 | 5 | 6;

export type SkillName = string;
export type SkillDescription = string;
export type SkillIcon = string;
export type SkillIndex = 1 | 2 | 3;
export type SkillLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | "M1" | "M2" | "M3";

export type Blackboard = Map<string, number>;

export type Resource = number;
export type ResourceUsage = Map<Resource, number>;

export interface SkillLevelInfo {
  getDescription(): SkillDescription,
  getBlackboard(): Blackboard;
  getMaterials(): ResourceUsage;
};

export interface Skill {
  getName(): SkillName;
  getIcon(): SkillIcon;
  getIndex(): SkillIndex;
  getLevel(skillLevel: SkillLevel): SkillLevelInfo;
  getLevels(): SkillLevelInfo[];
};

export interface Operator {
  getId(): OperatorName;
  getName(): OperatorName;
  getImage(): OperatorImage;
  getRarity(): OperatorRarity;

  getSkill(skillIndex: SkillIndex): Skill;
  getSkills(): Skill[];
};

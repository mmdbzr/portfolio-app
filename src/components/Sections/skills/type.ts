export interface SkillCategoryProps {
  category: string;
  items: SkillCategory;
}

export interface Skill {
  name: string;
  icon: string;
}

type SkillCategory = Record<string, Skill>;

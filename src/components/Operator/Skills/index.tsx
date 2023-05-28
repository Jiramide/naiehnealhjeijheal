import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import useOperator from '../../../lib/OperatorHook';

import './Skills.css';

function SkillButton({ skill }) {
  return (
    <Link to={skill.getIndex().toString()}>
      { skill.getName() }
    </Link>
  );
}

function Skills({}) {
  const operator = useOperator();
  const operatorSkills = operator.getSkills();

  return (
    <>
      <p>Viewing skills</p>
      {
        operatorSkills.map((skill) => {
          return <SkillButton key={skill.getName()} skill={skill} />;
        })
      }
      <Outlet />
    </>
  );
}

export default Skills;

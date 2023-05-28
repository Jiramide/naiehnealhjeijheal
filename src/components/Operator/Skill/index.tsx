import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Skill.css';

import {
  SkillLevel,
} from '../../../lib/OperatorData';

function Skill({ level }) {
  const {operator, skill} = useParams();
  const [skillLevel, setSkillLevel] = useState<SkillLevel>(level ?? 1);

  const title = `${operator} S${skill}`;

  console.log(operator, skill);

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML/facebook-output.png"
        />

        <meta
          property="og:title"
          content={title}
        />

        <meta
          property="og:description"
          content="foobar foobar foobar foobar foobar"
        />
      </Helmet>
      
      <p>Skill: {skill}</p>
    </>
  );
}

export default Skill;

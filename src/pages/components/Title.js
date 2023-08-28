import React from 'react';

const Title = ({ text, level }) => {
  const HeadingTag = `h${level}`;
  
  return (
    <HeadingTag className="title-component">{text}</HeadingTag>
  );
};

export default Title;
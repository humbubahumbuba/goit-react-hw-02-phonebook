import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Wrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

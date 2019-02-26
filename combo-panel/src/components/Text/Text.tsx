import React, { FunctionComponent } from 'react';

interface Props {
  text: string;
  style: React.CSSProperties;
}

export const Text: FunctionComponent<Props> = ({ style, text }) => {
  return <div style={style}>{text}</div>;
};

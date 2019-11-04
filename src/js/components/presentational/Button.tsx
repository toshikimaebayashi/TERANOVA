import * as React from 'react';
import PropTypes from "prop-types";

interface Props {
   label: string;
   onClick: () => void;
}
const Button = (props: Props) => (
  <button onClick={props.onClick}>{props.label}</button>
);

export default Button;
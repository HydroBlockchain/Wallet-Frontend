import { Dimensions } from 'react-native';
import { css } from 'styled-components/native';
import { path } from 'lodash/fp';

export const fullwidth = (a) => {
  return (
    a.fullwidth &&
    css`
      width: 100%;
    `
  );
};

export const fetchPropFromTheme = (prop) => (a) => path(['theme', prop, a]);
export const colors = fetchPropFromTheme('colors');
export const gutter = fetchPropFromTheme('gutter');
export const responsive = (values) => (a) => a.theme.responsive(values);

export const isLarge = ({ width, height }) => width === 414 && height === 896;
export const isSmall = ({ width, height }) => width === 320 && height === 568;
export const isMedium = ({ width, height }) => width > 320 && width < 414;

export const _responsive = (values) => {
  if (values.length === 1) {
    return values[0];
  }
  const dimen = Dimensions.get('window');

  // console.log(dimen);

  if (isSmall(dimen)) {
    return values[0];
  }
  if (isMedium(dimen)) {
    return values[1] || values[0];
  }
  if (isLarge(dimen)) {
    return values[values.length - 1];
  }
};
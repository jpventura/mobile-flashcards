import * as React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function MonoText(props) {
  const { style } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />;
}

MonoText.defaultProps = {
  style: undefined,
};

MonoText.propTypes = {
  style: PropTypes.objectOf({
    fontFamily: PropTypes.string,
  }),
};

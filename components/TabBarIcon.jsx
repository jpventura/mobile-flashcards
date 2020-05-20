import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  const { focused, name } = props;
  const color = focused ? Colors.tabIconSelected : Colors.tabIconDefault;

  return (
    <Ionicons
      color={color}
      name={name}
      size={30}
      style={{ marginBottom: -3 }}
    />
  );
}

TabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

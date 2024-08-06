import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Image } from 'react-native';

const IconButton = ({ className, icon, activeIcon, width, height, onPress, isActive, rotate }) => {
  return (
    <IconContainer
      className={className}
      onPress={onPress}
      style={{ transform: [{ rotate: `${rotate ? 180 : 0}deg` }] }}
    >
      <IconImage
        source={isActive ? activeIcon : icon}
        style={{ width: width ? width : 18, height: height ? height : 18 }}
      />
    </IconContainer>
  );
};

export default IconButton;

const IconContainer = styled(TouchableOpacity)`
  flex: 0 0 auto;
  cursor: pointer;
  z-index: 1;
`;

const IconImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
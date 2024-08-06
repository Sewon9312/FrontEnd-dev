import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

const Icon = ({ icon, width, height, className }) => {
    return (
        <IconContainer className={className} width={width ? width : 18} height={height ? height : 18}>
            <StyledImage source={{icon}} style={{ width: width ? width : 18, height: height ? height : 18 }} />
        </IconContainer>
    );
};

export default Icon;

const IconContainer = styled.View`
  flex: 0 0 auto;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  /* background: url('/assets/images/icons/ic-chevron-left.svg') no-repeat center / cover; */
`; 
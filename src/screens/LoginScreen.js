import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Wrap>
            <Title>로그인</Title>

        <Label>이메일</Label>
        <StyledTextInput
        placeholder="이메일을 입력해주세요."
        value={email}
        onChangeText={setEmail}
        />

        <Label>비밀번호</Label>
        <StyledTextInput
        placeholder="비밀번호를 입력해주세요."
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        />

        <LoginButton>
        <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>

        <Links>
        <Link>
            <LinkText>아이디찾기</LinkText>
        </Link>
        <Link>
            <LinkText>비밀번호찾기</LinkText>
        </Link>
        <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText>회원가입</LinkText>
        </Link>
        </Links>

        <KakaoButton>
        <KakaoButtonText>카카오 로그인 하기</KakaoButtonText>
        </KakaoButton>

        <SignUpButton>
        <SignUpButtonText>회원가입</SignUpButtonText>
        </SignUpButton>
      </Wrap>
    

      <FooterText>
        로그인 시 <FooterLink>이용약관</FooterLink>과 <FooterLink>개인정보처리방침</FooterLink>에 동의하게 됩니다.
      </FooterText>
    </Container>
  );
};

export default LoginScreen;

// Styled Components
const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 0 24px;
  background-color: white;
`;

const Wrap = styled.View`
    display: flex;
    flex-direction: column;
  
`

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 128px 0 84px;
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.96px;
`;

const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: #000;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 130%; /* 23.4px */
letter-spacing: -0.36px;
`;

const StyledTextInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;

  margin-bottom: 28px;

  &:focus{
    outline: none;
    border: none;
  }

  &:hover{
    outline: none;
    border: none;
  }
`;

const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  padding: 11px 0;
  border-radius: 8px;
  background: #B5B5B5;
  margin-bottom: 16px;
`;

const LoginButtonText = styled.Text`
color: #FFF;
font-family: Pretendard;
text-align: center;
font-size: 14px;
font-weight: 600;
line-height: 130%; /* 18.2px */
letter-spacing: -0.28px;
`;

const Links = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 73px;
`;

const Link = styled.TouchableOpacity`
    
`;

const LinkText = styled.Text`
color: #000;
text-align: center;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 21px */
letter-spacing: -0.28px;
`;

const KakaoButton = styled.TouchableOpacity`
width: 100%;
padding: 11px 0;
border-radius: 8px;
background: #FEE500;
margin-bottom: 20px;
`;

const KakaoButtonText = styled.Text`
color:  #000;
text-align: center;
/* sub headline 2 */
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 130%; /* 18.2px */
letter-spacing: -0.28px;
`;

const SignUpButton = styled.TouchableOpacity`
    width: 100%;
    padding: 11px 0;
    border-radius: 8px;
    background: #F7F7F8;
`;

const SignUpButtonText = styled.Text`
color: #000;
text-align: center;
/* sub headline 2 */
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 130%; /* 18.2px */
letter-spacing: -0.28px;
`;

const FooterText = styled.Text`
  display: flex;
  justify-content: center;
  padding: 0 17px 30px;
  color: #B5B5B5;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 140%;
`;

const FooterLink = styled.Text`

  text-decoration-line: underline;
`;
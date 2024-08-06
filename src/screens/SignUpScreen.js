import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import Test from '../assets/images/icons/ic-chevron-left.svg'

const SignUpScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
        {/* <Test  /> */}
        </BackButton>
        <HeaderText>회원가입</HeaderText>
      </Header>

      <Title>트립처와 함께 추억을 붙잡아볼까요?</Title>

      <Label>닉네임</Label>
      <StyledTextInput
        placeholder="어떤 이름을 사용하시겠어요?"
        value={nickname}
        onChangeText={setNickname}
      />
      <ErrorText>중복된 닉네임입니다.</ErrorText>

      <Label>이메일</Label>
      <StyledTextInput
        placeholder="이메일을 입력해주세요."
        value={email}
        onChangeText={setEmail}
      />

      <Label>인증번호</Label>
      <VerificationContainer>
        <VerificationInput
          placeholder="인증번호를 입력해주세요."
          value={verificationCode}
          onChangeText={setVerificationCode}
        />
        <VerificationButton>
          <VerificationButtonText>인증 받기</VerificationButtonText>
        </VerificationButton>
      </VerificationContainer>

      <Label>비밀번호</Label>
      <StyledTextInput
        placeholder="특수문자 포함 8자 이상 입력해주세요."
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Label>비밀번호 확인</Label>
      <StyledTextInput
        placeholder="특수문자 포함 8자 이상 입력해주세요."
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <SignUpButton>
        <SignUpButtonText>가입하기</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
};

export default SignUpScreen;

// Styled Components
const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: white;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

const StyledTextInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  margin-bottom: 15px;
  padding-vertical: 5px;
`;

const ErrorText = styled.Text`
  font-size: 12px;
  color: red;
  margin-bottom: 15px;
`;

const VerificationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const VerificationInput = styled.TextInput`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  padding-vertical: 5px;
  margin-right: 10px;
`;

const VerificationButton = styled.TouchableOpacity`
  background-color: #ccc;
  padding: 10px;
  align-items: center;
`;

const VerificationButtonText = styled.Text`
  font-size: 14px;
  color: black;
`;

const SignUpButton = styled.TouchableOpacity`
  background-color: #ccc;
  padding: 15px;
  align-items: center;
  margin-top: 20px;
`;

const SignUpButtonText = styled.Text`
  font-size: 16px;
  color: black;
`;
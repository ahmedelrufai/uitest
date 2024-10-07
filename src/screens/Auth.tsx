import React from "react";
const ImgInAuth = require("../assets/images/ImgInAuth.png");
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/HomeStack.tsx";
import PrimaryButton from "../components/custormElements/PrimaryButton.tsx";
import styled from "styled-components/native";
import CustomText from "../components/custormElements/Text.tsx";
import useStore from "../store/store.ts";
import {normalizeh, normalizew} from "../utils/helpers.ts";

interface AuthProps extends NativeStackScreenProps<RootStackParamList, "Auth"> {}

const LoginScreen: React.FunctionComponent<AuthProps> = ({}) => {
  const { activeTheme, loadTheme, toggleTheme } = useStore();
  const handleClick = () => {
    toggleTheme()
  };

  return (
    <Container>
      <InnerContainer>
        <CustomText size={normalizeh(62)} weight={600}>Welcome</CustomText>
        <Image source={ImgInAuth} />
        <Wrapper>
        <Wrapper style={{alignItems:"center",marginBottom:20}}>
          <CustomText size={normalizeh(36)} weight={400}>Sign in to continue</CustomText>

        </Wrapper>
        <PrimaryButton text={"Log in / Sign up"} onPress={handleClick} />
        </Wrapper>

      </InnerContainer>
    </Container>
  );
};
const Wrapper = styled.View`
width: 100%;
`
const Image = styled.Image`
  width: 100%;
  height: 460px;
`;

const Container = styled.ImageBackground`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
`;

const InnerContainer = styled.View`
 
  width: 100%;
  background-color: ${({ theme }) => theme.topBackground};
  padding: ${normalizeh(60)}px ${normalizew(60)}px;
  border-radius: ${normalizeh(40)}px;
  align-items: center;
  justify-content: center;
`;

export default LoginScreen;

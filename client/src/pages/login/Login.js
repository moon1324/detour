import React from "react";
import S from "./style";
import DetourButton from "../../components/button/DetourButton";
import Input from "../../components/input/style";

const Login = () => {
    return (
        <S.Background>
            <S.CharacterWrapper>
                <img src={process.env.PUBLIC_URL + "/images/login/Character.png"} alt="character" />
            </S.CharacterWrapper>
            <S.LogoWrapper>
                <img src={process.env.PUBLIC_URL + "/images/login/Logo.png"} alt="logo" />
            </S.LogoWrapper>
            <S.LoginFormWrapper>
                <S.LoginForm>
                    <S.LoginInputContainer>
                        <Input variant={"white"} shape={"large"} size={"large"} color={"black"} border={"gray"} placeholder="아이디를 입력하세요" />
                        <S.ErrorMessageWrapper>
                            <S.ErrorMessage>아이디 또는 비밀번호를 확인해주세요!</S.ErrorMessage>
                        </S.ErrorMessageWrapper>
                        <Input variant={"white"} shape={"large"} size={"large"} color={"black"} border={"gray"} placeholder="비밀번호를 입력하세요" />
                        <S.ErrorMessageWrapper>
                            <S.ErrorMessage>아이디 또는 비밀번호를 확인해주세요!</S.ErrorMessage>
                        </S.ErrorMessageWrapper>
                    </S.LoginInputContainer>
                    <S.LoginButtonContainer>
                        <DetourButton variant={"gray"} shape={"small"} size={"small"} color={"black"} border={"gray"}>
                            로그인
                        </DetourButton>
                        <DetourButton variant={"gray"} shape={"small"} size={"small"} color={"black"} border={"gray"}>
                            회원가입
                        </DetourButton>
                    </S.LoginButtonContainer>
                    <S.KakaoLoginButtonWrapper>
                        <DetourButton variant={"kakao"} shape={"large"} size={"large"} color={"black"} border={"default"}>
                            카카오 로그인
                        </DetourButton>
                    </S.KakaoLoginButtonWrapper>
                </S.LoginForm>
            </S.LoginFormWrapper>
        </S.Background>
    );
};

export default Login;

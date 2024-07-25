import React from "react";
import S from "./style";
import Input from "../../components/input/style";
import DetourButton from "../../components/button/DetourButton";

const SignUp = () => {
    return (
        <S.Background>
            <S.SignUpLogoWrapper>
                <img src={process.env.PUBLIC_URL + "/images/signUp/Logo.png"} />
            </S.SignUpLogoWrapper>
            <S.CatchphraseWrapper>
                <img src={process.env.PUBLIC_URL + "/images/signUp/Catchphrase.png"} />
            </S.CatchphraseWrapper>
            <S.BackgroundWhite></S.BackgroundWhite>
            <S.SignUpFormContainer>
                <S.SignUpForm>
                    <Input variant={"white"} shape={"large"} size={"large"} color={"black"} border={"gray"} placeholder="아이디를 입력하세요" />
                    <S.ErrorMessageWrapper>
                        <S.ErrorMessage>아이디 또는 비밀번호를 확인해주세요!</S.ErrorMessage>
                    </S.ErrorMessageWrapper>
                    <Input variant={"white"} shape={"large"} size={"large"} color={"black"} border={"gray"} placeholder="비밀번호를 입력하세요" />
                    <S.ErrorMessageWrapper>
                        <S.ErrorMessage>아이디 또는 비밀번호를 확인해주세요!</S.ErrorMessage>
                    </S.ErrorMessageWrapper>
                    <Input variant={"white"} shape={"large"} size={"large"} color={"black"} border={"gray"} placeholder="이메일을 입력하세요" />
                    <S.ErrorMessageWrapper>
                        <S.ErrorMessage>아이디 또는 비밀번호를 확인해주세요!</S.ErrorMessage>
                    </S.ErrorMessageWrapper>
                    <Input variant={"white"} shape={"large"} size={"large"} color={"black"} border={"gray"} placeholder="닉네임을 입력하세요" />
                    <S.ErrorMessageWrapper>
                        <S.ErrorMessage>아이디 또는 비밀번호를 확인해주세요!</S.ErrorMessage>
                    </S.ErrorMessageWrapper>
                    <S.ForAdminLabel>
                        <input type="checkbox" />
                        <span>관리자</span>
                    </S.ForAdminLabel>
                    <Input variant={"white"} shape={"large"} size={"large"} color={"black"} border={"gray"} placeholder="관리자 키를 입력하세요" />
                    <S.ErrorMessageWrapper>
                        <S.ErrorMessage>아이디 또는 비밀번호를 확인해주세요!</S.ErrorMessage>
                    </S.ErrorMessageWrapper>
                </S.SignUpForm>
                <S.SignUpButtonWrapper>
                    <DetourButton variant={"gray"} shape={"small"} size={"small"} color={"black"} border={"gray"}>
                        회원가입
                    </DetourButton>
                </S.SignUpButtonWrapper>
            </S.SignUpFormContainer>
        </S.Background>
    );
};

export default SignUp;

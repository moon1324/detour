import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn, flexColumn } from "../../global/common";

const S = {};

// 1rem = 16px
S.Background = styled.div`
    width: 100%;
    height: 100%;
    ${flexCenterColumn}
    background-color: ${theme.PALETTE.background.yellow};
`;

S.CharacterWrapper = styled.div`
    /* margin-top: 100px; */
    margin-top: 4rem;
    /* height: 400px; */
    height: 20rem;
    & img {
        height: 100%;
    }
    margin-bottom: 6rem;
`;

S.LoginFormWrapper = styled.div`
    width: 100%;
    background-color: ${theme.PALETTE.background.white};
`;

S.LogoWrapper = styled.div`
    /* height: 200px; */
    height: 10rem;
    & img {
        height: 100%;
    }
    position: absolute;
    /* top: 500px; */
    top: 25rem;
    margin-left: 6rem;
`;

S.LoginForm = styled.form`
    /* margin-top: 160px; */
    margin-top: 6rem;
    ${flexCenterColumn}
`;

S.LoginInputContainer = styled.div`
    ${flexCenterColumn}
    & input {
        margin-bottom: 0.25rem;
    }
`;

S.ErrorMessageWrapper = styled.div`
    width: 20rem;
    height: 1.5rem;
    margin-bottom: 0.25rem;
`;

S.ErrorMessage = styled.span`
    font-size: 0.75rem;
    color: ${theme.PALETTE.error};
    .icon {
        font-size: 0.75rem;
        margin-right: 0.25rem;
        path {
            color: ${theme.PALETTE.error};
        }
    }
`;

S.LoginButtonContainer = styled.div`
    /* margin-top: 1rem; */
    ${flexCenter}
    & button {
        margin: 0.5rem 1.25rem;
    }
`;

S.KakaoLoginButtonWrapper = styled.div`
    margin-top: 1rem;
`;

export default S;

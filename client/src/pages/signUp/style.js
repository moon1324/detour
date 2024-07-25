import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {};

// 1rem = 16px
S.Background = styled.div`
    width: 100%;
    height: 100%;
    ${flexCenterColumn}
    background-color: ${theme.PALETTE.background.yellow};
    position: relative;
`;

S.SignUpLogoWrapper = styled.div`
    margin-top: 4rem;
    height: 10rem;
    & img {
        height: 100%;
    }
    margin-left: 6rem;
`;

S.CatchphraseWrapper = styled.div`
    height: 12rem;
    & img {
        height: 100%;
    }
    margin-bottom: 4rem;
`;

S.BackgroundWhite = styled.div`
    width: 100%;
    background-color: ${theme.PALETTE.background.white};
    ${flexCenterColumn}
`;

S.SignUpFormContainer = styled.div`
    width: 28rem;
    position: absolute;
    top: 25rem;
    background-color: transparent;
    ${flexCenterColumn}
`;

S.SignUpForm = styled.form`
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

S.ForAdminLabel = styled.label`
    width: 3.5rem;
    height: 1rem;
    position: absolute;
    ${flexCenter}
    left: 0rem;
    bottom: 5.5rem;
    & input {
        margin: 0;
        margin-right: 4px;
    }
    & span {
        font-size: 12px;
        margin-bottom: 1px;
    }
`;

S.SignUpButtonWrapper = styled.div`
    & button {
        margin: 0.5rem 1.5rem;
    }
`;

export default S;

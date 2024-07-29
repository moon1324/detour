import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {};

S.Background = styled.div`
    width: 100vw;
    height: 100vh;
    ${flexCenterColumn}
    flex: 1;
    position: relative;
`;

S.Wrapper = styled.div`
    width: 100%;
    ${flexCenterColumn}
    position: absolute;
    /* position: relative */
`;

S.Header = styled.header`
    background-color: ${theme.PALETTE.white};
    padding: 20px;
    display: block;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.PALETTE.gray};
`;

S.HeaderContainer = styled.div`
    ${flexCenter}
    width: 100%;
    justify-content: space-between;
`;

S.MainLogo = styled.div`
    height: 50px;
    width: 180px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

S.UserContainer = styled.div`
    ${flexCenter}
    & a {
        margin-left: 40px;
        text-decoration: none;
        color: ${theme.PALETTE.black};
    }
`;

S.Navbar = styled.nav`
    width: 100%;
    display: block;
    margin-top: 10px;

    & ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 15px;
        justify-content: left;
    }

    & ul li {
        display: inline;
    }

    & ul li a {
        text-decoration: none;
        color: #333;
    }

    & ul li:nth-child(3) {
        background-color: #fff5cc;
        /* background-color: ${theme.PALETTE.background.yellow}; */
    }
`;

S.Main = styled.main`
    ${flexCenterColumn}
    flex: 1;
    padding: 20px;
`;

S.Footer = styled.footer`
    background-color: #f0f0f0;
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
`;

export default S;

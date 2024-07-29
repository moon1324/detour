import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenter, flexCenterColumn } from "../../global/common";

const S = {};

S.Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 40px;
`;

S.SearchSection = styled.section`
    width: 100%;
    max-width: 800px;
    margin-bottom: 60px;
    text-align: center;

    & h2 {
        font-size: 1.5rem;
        margin: 0 0 20px 0;
    }

    & p {
        font-size: 0.75rem;
    }
`;

S.SearchBar = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

S.SearchButton = styled.button`
    height: 2.4rem;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    & img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

S.TripSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3개의 열을 균등하게 배치 */
    gap: 30px; /* 카드 사이의 간격 */
    justify-content: center; /* 중앙 정렬 */
    padding: 20px;
`;

export default S;

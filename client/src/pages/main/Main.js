import React from "react";
import S from "./style";

const Main = () => {
    return (
        <S.Main>
            <S.SearchSection>
                <h2>👒 다른 사람들은 어떤 경로로?</h2>
                <p>최근 등록 경로 순으로 요즘 핫한 곳을 한눈에!</p>
                <div class="search-bar">
                    <input type="text" placeholder="키워드를 입력하세요" />
                    <button class="search-button"></button>
                </div>
            </S.SearchSection>
            <S.TripSection id="trips-container"></S.TripSection>
        </S.Main>
    );
};

export default Main;

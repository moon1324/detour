import React from "react";
import S from "./style";
import Input from "../../components/input/style";

const Main = () => {
    return (
        <S.Main>
            {/* popular */}
            <section></section>

            {/* trending */}
            <section></section>

            {/* <S.SearchSection>
                <h2>👒 다른 사람들은 어떤 경로로?</h2>
                <p>최근 등록 경로 순으로 요즘 핫한 곳을 한눈에!</p>
                <S.SearchBar>
                    <Input
                        type="text"
                        variant={"main"}
                        shape={"extraLarge"}
                        size={"extraLarge"}
                        color={"black"}
                        border={"default"}
                        style={{ textAlign: "center" }}
                        placeholder="키워드를 입력하세요"
                    />
                    <S.SearchButton>
                        <img src={process.env.PUBLIC_URL + "/images/main/Search.png"} />
                    </S.SearchButton>
                </S.SearchBar>
            </S.SearchSection>
            <S.TripSection id="trips-container"></S.TripSection> */}
        </S.Main>
    );
};

export default Main;

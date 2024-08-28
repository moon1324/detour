import React, { useState } from "react";
import S from "./style";
import Input from "../../components/input/style";

const { kakao } = window;

const SearchLocation = ({ onClose, searchValue, setSearchValue, onSelectLocation }) => {
    const [searchResults, setSearchResults] = useState([]);

    const ps = new kakao.maps.services.Places();

    const searchPlaces = (searchValue) => {
        if (!searchValue.trim()) {
            alert("키워드를 입력해주세요!");
            return false;
        }
        ps.keywordSearch(searchValue, (data, status) => placesSearchCB(data, status, setSearchResults));
    };

    const placesSearchCB = (data, status, setSearchResults) => {
        if (status === kakao.maps.services.Status.OK) {
            setSearchResults(data);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert("검색 결과가 존재하지 않습니다.");
            return;
        } else if (status === kakao.maps.services.Status.ERROR) {
            alert("검색 결과 중 오류가 발생했습니다.");
            return;
        }
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        searchPlaces(searchValue);
        setSearchValue("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleLocationClick = (location) => {
        onSelectLocation(location);
    };

    return (
        <S.SearchLocationModal>
            <S.SearchLocationContent>
                <S.SpanClose onClick={onClose}>&times;</S.SpanClose>
                <S.SearchInputContainer>
                    <S.SearchIcon onClick={handleSearch}>🔍</S.SearchIcon>
                    <Input
                        variant={"gray"}
                        shape={"large"}
                        size={"extraLarge"}
                        color={"black"}
                        border={"gray"}
                        value={searchValue}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                    />
                </S.SearchInputContainer>
                <S.SearchLocationListContainerWrapper>
                    <S.SearchLocationListContainer>
                        {searchResults.map((result, index) => (
                            <S.SearchLocation key={index} onClick={() => handleLocationClick(result)}>
                                <div>{result.place_name}</div>
                                <div>{result.address_name}</div>
                            </S.SearchLocation>
                        ))}
                    </S.SearchLocationListContainer>
                </S.SearchLocationListContainerWrapper>
            </S.SearchLocationContent>
        </S.SearchLocationModal>
    );
};

export default SearchLocation;

// old codes
// import React, { useState } from "react";
// import S from "./style";
// import Input from "../../components/input/style";

// const { kakao } = window;

// const SearchLocation = ({ onClose, searchValue, setSearchValue, onSelectLocation }) => {
//     const [searchResults, setSearchResults] = useState([]);

//     const ps = new kakao.maps.services.Places();

//     // 키워드 검색을 요청하는 함수입니다
//     const searchPlaces = (searchValue) => {
//         if (!searchValue.trim()) {
//             alert("키워드를 입력해주세요!");
//             return false;
//         }
//         // console.log(ps.keywordSearch(searchValue, placesSearchCB));
//         // ps.keywordSearch(searchValue, placesSearchCB);
//         ps.keywordSearch(searchValue, (data, status) => placesSearchCB(data, status, setSearchResults));
//     };

//     // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
//     const placesSearchCB = (data, status, setSearchResults) => {
//         if (status === kakao.maps.services.Status.OK) {
//             console.log(data);
//             setSearchResults(data);
//         } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
//             alert("검색 결과가 존재하지 않습니다.");
//             return;
//         } else if (status === kakao.maps.services.Status.ERROR) {
//             alert("검색 결과 중 오류가 발생했습니다.");
//             return;
//         }
//     };

//     const handleSearchChange = (e) => {
//         setSearchValue(e.target.value);
//     };

//     const handleSearch = () => {
//         searchPlaces(searchValue);
//         setSearchValue("");
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             handleSearch();
//         }
//     };

//     const handleLocationClick = (location) => {
//         onSelectLocation(location);
//     };

//     return (
//         <S.SearchLocationModal>
//             <S.SearchLocationContent>
//                 <S.SpanClose onClick={onClose}>&times;</S.SpanClose>
//                 <S.SearchInputContainer>
//                     <S.SearchIcon onClick={handleSearch}>🔍</S.SearchIcon>
//                     <Input
//                         variant={"gray"}
//                         shape={"large"}
//                         size={"extraLarge"}
//                         color={"black"}
//                         border={"gray"}
//                         value={searchValue}
//                         onChange={handleSearchChange}
//                         onKeyDown={handleKeyDown}
//                     />
//                 </S.SearchInputContainer>
//                 <S.SearchLocationListContainerWrapper>
//                     <S.SearchLocationListContainer>
//                         {searchResults.map((result, index) => (
//                             <S.SearchLocation key={index} onClick={() => handleLocationClick(result)}>
//                                 <div>{result.place_name}</div>
//                                 <div>{result.address_name}</div>
//                             </S.SearchLocation>
//                         ))}
//                     </S.SearchLocationListContainer>
//                 </S.SearchLocationListContainerWrapper>
//             </S.SearchLocationContent>
//         </S.SearchLocationModal>
//     );
// };

// export default SearchLocation;

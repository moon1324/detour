import React, { useState } from 'react';
import S from './style';
import GetTrip from './GetTrip';
import MyTripList from './MyTripList';

const Trip = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (keyword) => {
        setSearch(keyword);
    };

    return (
        <S.Main>
            <GetTrip onSearch={handleSearch} />
            <MyTripList search={search} />
        </S.Main>
    );
};

export default Trip;

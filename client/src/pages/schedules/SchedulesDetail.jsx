import React, { useEffect, useState } from "react";
import S from "./style";
import { useParams } from "react-router-dom";

const { kakao } = window;

const SchedulesDetail = () => {
    const { scheduleId } = useParams();
    const [schedule, setSchedule] = useState(null);
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);

    const fetchScheduleDetail = async () => {
        console.log(scheduleId);
        try {
            const response = await fetch(`http://52.78.2.148/api/schedules/${scheduleId}`);
            console.log(response);
            console.log(response.ok);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            console.log(result);
            setSchedule(result.data);
        } catch (error) {
            console.error("Failed to fetch schedule detail:", error);
        }
    };

    useEffect(() => {
        if (schedule && schedule.dailyPlanList) {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(35.8242238, 127.1479532),
                level: 13,
            };
            const mapInstance = new kakao.maps.Map(container, options);
            setMap(mapInstance);

            const newMarkers = schedule.dailyPlanList.flatMap((dayPlan) =>
                dayPlan.markerList.map((markerData) => {
                    const markerPosition = new kakao.maps.LatLng(markerData.latitude, markerData.longitude);
                    const marker = new kakao.maps.Marker({
                        position: markerPosition,
                        map: mapInstance,
                        title: markerData.name,
                    });

                    // Add info window
                    const infoWindow = new kakao.maps.InfoWindow({
                        content: `<div style="padding:5px;">${markerData.name}</div>`,
                    });
                    kakao.maps.event.addListener(marker, "click", () => {
                        infoWindow.open(mapInstance, marker);
                    });

                    return marker;
                })
            );

            setMarkers(newMarkers);
        }
    }, [schedule]);

    useEffect(() => {
        fetchScheduleDetail();
    }, []);

    return (
        <S.SchedulesWrapper>
            {schedule ? (
                <S.SchedulesContainer>
                    <S.SchedulesTitle>{schedule.title}</S.SchedulesTitle>
                    <S.SchedulesPeriodContainer>
                        <span>{`${new Date(schedule.departureDate).toLocaleDateString()} ~ ${new Date(schedule.arrivalDate).toLocaleDateString()}`}</span>
                    </S.SchedulesPeriodContainer>
                    <S.PlanWrapper>
                        <S.MapWrapper>
                            <div id="map"></div>
                        </S.MapWrapper>
                        <S.DividerLine />
                        <S.CardsWrapper>
                            <S.CardsContainer>
                                {schedule.dailyPlanList.map((dayPlan, index) => (
                                    <S.Cards key={index}>
                                        <S.CardTitleContainer>
                                            <S.CardTitle>DAY {dayPlan.day}</S.CardTitle>
                                            <S.CardDate>{new Date(schedule.departureDate).toLocaleDateString()}</S.CardDate>
                                        </S.CardTitleContainer>
                                        <S.LocationContainerWrapper>
                                            <S.LocationContainer>
                                                {dayPlan.markerList.map((location, locIndex) => (
                                                    <S.LocationWrapper key={locIndex}>
                                                        <S.Location>
                                                            <S.LocationIndex>{locIndex + 1}</S.LocationIndex>
                                                            <S.LocationName>{location.name}</S.LocationName>
                                                            <S.LocationAddress>{location.address}</S.LocationAddress>
                                                        </S.Location>
                                                    </S.LocationWrapper>
                                                ))}
                                            </S.LocationContainer>
                                        </S.LocationContainerWrapper>
                                    </S.Cards>
                                ))}
                            </S.CardsContainer>
                        </S.CardsWrapper>
                    </S.PlanWrapper>
                </S.SchedulesContainer>
            ) : (
                <p>Loading...</p>
            )}
        </S.SchedulesWrapper>
    );
};

export default SchedulesDetail;

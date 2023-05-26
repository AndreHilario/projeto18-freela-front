import { useContext, useEffect, useState } from "react";
import apiAuth from "../../services/apiAuth";
import { CityContext } from "../../contexts/CityContext";
import styled from "styled-components";

export default function MenuHostingPage() {

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    const { selectedCity } = useContext(CityContext);

    useEffect(() => {
        if (selectedCity) {
            apiAuth
                .getHotels(selectedCity)
                .then(res => {
                    setHotels(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    setLoading(false);
                    alert(err.response.data);
                });
        }
    }, [selectedCity]);

    if (loading) {
        return (
            <LoadingContainer>
                <Loading></Loading>
            </LoadingContainer>
        );
    }

    return (
        <MenuHostingPageContainer>
            {hotels.length > 0 && (
                <h2>Hospedagens disponíveis em: <span>{hotels[0].located_city}</span></h2>
            )}
            <HotelContent>
                {hotels.map((row) =>
                    <RowHotels key={row.id}>
                        <RowHotelImg
                            src={row.hotel_images[0]} alt="Hotel" >
                        </RowHotelImg>
                        <HotelInfo>
                            <HotelName>{row.hotel_name}</HotelName>
                            <HotelPrice>R$ {row.daily_price}</HotelPrice>
                        </HotelInfo>
                    </RowHotels>
                )}
            </HotelContent>
        </MenuHostingPageContainer>
    );
};



const MenuHostingPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HotelContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 35px;
    gap: 30px;
`;

const RowHotels = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 300px;
    padding: 16px;  
    border: 2px #5a849f;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
    }
`;

const RowHotelImg = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 8px;
    border-radius: 8px;
`;

const HotelInfo = styled.div`
    text-align: center;
`;

const HotelName = styled.p`
    margin-bottom: 4px;
    font-size: 20px;
`;

const HotelPrice = styled.p`
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 4px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white; /* Adiciona o background branco */
`;
const Loading = styled.div` 
    width: 50px;
    height: 50px;
    border: 10px solid #eee;
    border-bottom-color: rebeccapurple;
    border-radius: 50%;
    animation: rotate 1.5s linear infinite;
    margin-top: 2rem;
`;


import styled from "styled-components";

export const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const NameContainer = styled.header`
    display: flex;
    justify-content: center;
    font-size: 50px;
    margin-top: 20px;
    color: #00008b;
`;

export const Carousel = styled.div`
    display: flex;
    transition: transform 0.3s ease;
    margin-top: 10px;
`;

export const Slide = styled.div`
    justify-content: center;
    margin-top: 50px;
    flex: 0 0 100%;
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
    transition: opacity 0.3s ease;
`;

export const Image = styled.img`
    width: 500px;
    height: 320px;
    border-radius: 500px;
`;

export const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 8px 16px;
    background-color: #f2f2f2;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    
    &:first-of-type {
        left: 16px;
    }
    
    &:last-of-type {
        right: 16px;
    }
`;

export const Loading = styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid #eee;
    border-bottom-color: rebeccapurple;
    border-radius: 50%;
    animation: rotate 1.5s linear infinite;
    margin-top: 2rem;
`;

export const DetailsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: absolute;
    left: 7%;
    bottom: 17%;
    border: 3px solid #00558a;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    transition: box-shadow 0.3s ease;
    
    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 1);
    }
`;

export const Item = styled.li`
    font-size: 25px;
`;

export const AmenitiesContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: absolute;
    left: 70%;
    bottom: 7%;
    border: 3px solid #00558a;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    transition: box-shadow 0.3s ease;
    
    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 1);
    }
`;

export const AmenitieItem = styled.li`
    font-size: 25px;
`;

export const DetailsTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    border-bottom: 2px dashed #00558a;
    margin-bottom: 10px;
    margin-right: 40px;
    margin-top: 1px;
`;

export const AmenitiesTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    border-bottom: 2px dashed #00558a;
    margin-bottom: 10px;
    margin-right: 40px;
    margin-top: 1px;
`;

export const CenteredButtonContainer = styled.div `

    position: absolute;
    left: 45%;
    margin-top: 320px;
`;

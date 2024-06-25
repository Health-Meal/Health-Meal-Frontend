import styled from 'styled-components';
import { Logo } from '../components/logo/Logo.tsx';
import Bookmark from '../assets/bookmark.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

export const Food = () => {
    const location = useLocation();
    const keywordId = location.pathname.split('/')[2];
    const [foodInfo, setFoodInfo] = useState({
        foodId: 0,
        name: '',
        description: '',
        image: ''
    });
    const params = new URLSearchParams(location.search);

    useEffect(() => {
        axios.get(`http://localhost:8080/food/${keywordId}`).then((res) => {
            const { foodId, name, description, image } = res.data;
            setFoodInfo({ foodId, name, description, image });
        });
    }, []);

    const bookMarking = () => {
        localStorage.setItem("bookmarks", JSON.stringify([...JSON.parse(localStorage.getItem("bookmarks") || "[]") || [], { ...foodInfo, keyword: params.get("keyword") }]))
        alert('북마크 됨')
    }

    return (
        <>
            <Link to="/keyword">
                <Logo />
            </Link>
            <Wrapper>
                <Container>
                    <Box>
                        <Title color={'#87933C'}>{params.get('keyword')}</Title>
                        <Title>에 좋은 음식</Title>
                        <Link to={`/cuisine/${foodInfo.foodId}?food=${foodInfo.name}`}>
                            <CuisineSpan>
                                <Cuisine>{foodInfo.name}</Cuisine>
                                <Cuisine>을 이용한 요리</Cuisine>
                            </CuisineSpan>
                        </Link>
                        <NameWrapper>
                            <Name>{foodInfo.name}</Name>
                            <BookmarkImg src={Bookmark} alt="" onClick={bookMarking} />
                        </NameWrapper>
                        <Text>{foodInfo.description}</Text>
                        <CuisineImg src={foodInfo.image} alt="" />
                    </Box>
                </Container>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #FFFFEB;
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    height: 300px;
    width: 100vw;
    background-color: #FFFFEB;
    display: flex;
    justify-content: center;
`;

const Box = styled.div``;

const Title = styled.span`
    font-size: 40px;
    font-weight: bold;
    color: ${(props) => props.color};
`;

const CuisineSpan = styled.span`
    margin-left: 600px;
`;

const Cuisine = styled.span`
    font-size: 15px;
    color: ${(props) => props.color};
    text-decoration: underline;
`;

const Name = styled.div`
    font-size: 30px;
    font-weight: 600;
`;

const BookmarkImg = styled.img`
    height: 24px;
    width: 24px;
    margin-left: 10px;
    cursor: pointer;
`;

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 10px;
`;

const Text = styled.div`
    font-size: 18px;
    width: 450px;
`;

const CuisineImg = styled.img`
    height: 150px;
    width: 350px;
    margin-left: 600px;
    margin-top: -150px;
`;
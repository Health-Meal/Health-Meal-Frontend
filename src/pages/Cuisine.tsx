import { Logo } from '../components/logo/Logo.tsx';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Cuisine = () => {
    const location = useLocation();
    const foodId = location.pathname.split('/')[2];
    const [recipe, setRecipe] = useState([]);
    const params = new URLSearchParams(location.search);

    useEffect(() => {
        axios.get(`http://localhost:8080/cuisine/${foodId}`).then((res) => {
            const { cuisines } = res.data;
            setRecipe(cuisines);
        });
    }, []);

    return (
        <>
            <Logo />
            <Wrapper>
                <Container>
                    <Title>{params.get('food')}을 이용한 요리</Title>
                    {recipe.length > 0 && recipe.map((item) => {
                        return <CuisineText>{item}</CuisineText>;
                    })}
                </Container>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFEB;
`;

const Container = styled.div`
    width: 800px;
    height: 500px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    height: 60px;
    border-bottom: 2px solid black;
`;
const CuisineText = styled.div`
    width: 500px;
    height: 50px;
    font-size: 30px;
    border-bottom: 2px solid #87933C;
    text-align: center;
`;
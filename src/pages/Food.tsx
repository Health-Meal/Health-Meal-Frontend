import styled from 'styled-components';
import { Logo } from '../components/logo/Logo.tsx';
import Bookmark from '../assets/bookmark.svg';
import FoodImg from '../assets/carrot.png';

export const Food = () => {
    return (
        <>
            <Logo />
            <Wrapper>
                <Container>
                    <Box>
                        <Title color={'#87933C'}>눈</Title>
                        <Title>에 좋은 음식</Title>
                        <CuisineSpan>
                            <Cuisine>당근</Cuisine>
                            <Cuisine>을 이용한 요리</Cuisine>
                        </CuisineSpan>
                        <NameWrapper>
                            <Name>당근</Name>
                            <BookmarkImg src={Bookmark} alt="" />
                        </NameWrapper>
                        <Text>당근은 시력을 보호하고 야맹증을 막아줍니다.
                            비타민 A가 풍부하게 함유되어 있어
                            안구 표면의 점막을 건강하게 유지시켜 주며,
                            안구가 건조해지는 것을 막아주어 시력감퇴를 예방해주는
                            탁월한 효과가 있습니다. </Text>
                        <CuisineImg src={FoodImg} alt="" />
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
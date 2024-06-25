import { Logo } from '../components/logo/Logo.tsx';
import Bookmarked from '../assets/bookmarked.svg';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Save = () => {
    console.log(localStorage.getItem('bookmarks'));
    const [bookmarks, setBookmarks] = useState<string[]>([]);
    useEffect(() => {
        setBookmarks(JSON.parse(localStorage.getItem('bookmarks') || '[]') || []);
    }, []);

    const deleteBookmark = (id: number) => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks.filter((_, idx) => idx !== id)));
        setBookmarks(bookmarks.filter((_, idx) => idx !== id));
        alert('북마크가 해제되었습니다');
    };

    return (
        <>
            <Link to="/keyword">
                <Logo />
            </Link>
            <Wrapper>
                {
                    bookmarks?.map((foodInfo, idx) => {
                        return (
                            <Container>
                                <Box>
                                    <Title color={'#87933C'}>{foodInfo.keyword}</Title>
                                    <Title>에 좋은 음식</Title>
                                    {/*<Link to={`/cuisine/${foodInfo.foodId}?food=${foodInfo.name}`}>*/}
                                    <CuisineSpan>
                                        <Cuisine>{foodInfo.name}</Cuisine>
                                        <Cuisine>을 이용한 요리</Cuisine>
                                    </CuisineSpan>
                                    {/*</Link>*/}
                                    <NameWrapper>
                                        <Name>{foodInfo.name}</Name>
                                        <BookmarkImg src={Bookmarked} alt="" onClick={() => deleteBookmark(idx)} />
                                    </NameWrapper>
                                    <Text>{foodInfo.description}</Text>
                                    <CuisineImg src={foodInfo.image} alt="" />
                                </Box>
                            </Container>
                        );
                    })
                }
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #FFFFEB;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    height: 200px;
    width: 800px;
    background-color: #FFFFEB;
    display: flex;
    justify-content: center;
    border: 1px solid black;
`;

const Box = styled.div``;

const Title = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.color};
`;

const CuisineSpan = styled.span`
    margin-left: 300px;
`;

const Cuisine = styled.span`
    font-size: 15px;
    color: ${(props) => props.color};
    text-decoration: underline;
`;

const Name = styled.div`
    font-size: 20px;
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
    height: 100px;
    width: 300px;
    margin-left: 400px;
    margin-top: -150px;
`;
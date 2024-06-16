import { Logo } from '../components/logo/Logo.tsx';
import styled from 'styled-components';

export const Keyword = () => {
    return (
        <Wrapper>
            <Logo />
            <Title>자신의 건강상태 키워드를 입력하세요!</Title>
            <SearchWrapper>
                <div>
                    <Name color={'#424434'}>Health</Name>
                    <Name color={'#424434'}>-</Name>
                    <Name color={'#87933C'}>Meal</Name>
                    <Name color={'#D4DF90'}>.</Name>
                </div>
                <SearchBox placeholder="키워드를 입력해주세요"></SearchBox>
                <TagWrapper>
                    <Tag>무릎</Tag>
                    <Tag>위장염</Tag>
                    <Tag>당뇨</Tag>
                    <Tag>눈</Tag>
                </TagWrapper>
            </SearchWrapper>
            <SentenceBox style={{ marginTop: '20px', marginLeft: '300px' }} color={'#D6E1B4'}>위장염이 있다면 “위장염”을
                입력해주세요</SentenceBox>
            <SentenceBox style={{ marginTop: '50px', marginLeft: '880px' }} color={'#C6C97F'}>눈이 안좋다면 “눈”을
                입력해주세요</SentenceBox>
            <SentenceBox style={{ margin: '60px' }} color={'#D4DF90'}>당뇨가 있다면 ‘당뇨'를 입력해주세요</SentenceBox>
            <SentenceBox style={{ marginLeft: '550px' }} color={'#ACC39B'}>무릎이 안좋다면 “무릎”을 입력해주세요</SentenceBox>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #F1F6D1;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #424434;
    padding-top: 10vh;
    margin: 0 auto;
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px auto;
`;

const Name = styled.span`
    font-size: 40px;
    font-weight: bold;
    color: ${(props) => props.color};
`;

const SearchBox = styled.input`
    height: 30px;
    width: 500px;
    background-color: transparent;
    border: solid 3px #87933C;
    border-radius: 15px;
    outline: none;
    font-size: 15px;
    text-align: center;
`;

const TagWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 15px;
`;

const Tag = styled.div`
    font-size: 15px;
    background-color: #BED787;
    border: none;
    border-radius: 30px;
    height: 35px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SentenceBox = styled.div`
    height: 45px;
    width: 350px;
    font-size: 20px;
    background-color: ${(props) => props.color};
    border: none;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
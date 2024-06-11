import styled from 'styled-components';
import Img from '../../assets/mainImage1.png';
import { Logo } from '../logo/Logo.tsx';

export const Main1 = () => {
    return (
        <Container>
            <Wrapper>
                <Logo />
                <TextArea>
                    <Text1 color={'#424434'}>Health</Text1>
                    <Text1 color={'#424434'}>-</Text1>
                    <Text1 color={'#87933C'}>Meal</Text1>
                    <Text1 color={'#D4DF90'}>.</Text1>
                    <Text2>건강에 꼭 필요한</Text2>
                    <Text2>음식과 요리를 한번에</Text2>
                </TextArea>
            </Wrapper>
            <ImgTag src={Img} alt="" />
        </Container>
    );
};

const Container = styled.div`
    background-color: #F1F6D1;
    height: 100vh;
    width: 100vw;
    display: flex;
`;

const Wrapper = styled.div`
    background-color: #F1F6D1;
    height: 100vh;
    width: 55vw;
`;

const ImgTag = styled.img`
    height: 100vh;
    width: 45vw;
`;

const TextArea = styled.div`
    width: 577px;
    height: 242px;
    padding-top: 300px;
    padding-left: 150px;
`;

const Text1 = styled.span`
    font-size: 50px;
    font-weight: bold;
    color: ${(props) => props.color};
`;

const Text2 = styled.div`
    font-size: 50px;
    font-weight: bold;
    color: #424434;
`;
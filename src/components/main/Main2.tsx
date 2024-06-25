import styled from 'styled-components';
import Img from '../../assets/mainImage2.png';
import { Logo } from '../logo/Logo.tsx';
import { Link } from 'react-router-dom';

export const Main2 = () => {
    return (
        <Container>
            <Logo />
            <ImgTag src={Img} alt="" />
            <Wrapper>
                <TextArea>
                    <Text>건강상태 입력하고</Text>
                    <Text fontWeight="600">자신에게 필요한 영양성분을 찾으세요!</Text>
                </TextArea>
                <Link to="/login">
                    <Button>입럭하러가기</Button>
                </Link>
                <TextArea>
                    <TextSpan color={'#424434'}>Health</TextSpan>
                    <TextSpan color={'#424434'}>-</TextSpan>
                    <TextSpan color={'#87933C'}>Meal</TextSpan>
                    <TextSpan color={'#D4DF90'}>.</TextSpan>
                    <Text2>건강 상태를 작성하면 건강을 유지하기 위해</Text2>
                    <Text2>필요한 음식과 영양소를 추천하고</Text2>
                    <Text2>추천 음식에 대한 정보, 영양성분, 필요성에 대한 설명을 알려줍니다.</Text2>
                </TextArea>
            </Wrapper>
        </Container>
    )
        ;
};

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`;

const ImgTag = styled.img`
    height: 100vh;
    width: 45vw;
`;

const Wrapper = styled.div`
    height: 90vh;
    width: 50vw;
    padding-top: 10vh;
    padding-left: 5vw;
`;

const TextArea = styled.div`
    margin-top: 150px;
`;

const Text = styled.div<{ fontWeight?: string }>`
    font-size: 40px;
    font-weight: ${(props) => props.fontWeight || 'normal'};
    margin-bottom: 10px;
`;

const Text2 = styled.div`
    font-size: 20px;
`;

const TextSpan = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.color};
`;

const Button = styled.button`
    font-weight: 600;
    font-size: 25px;
    border-radius: 25px;
    border: solid 3px #87933C;
    background-color: white;
    color: #424434;
    cursor: pointer;
    height: 50px;
    width: 180px;
`;

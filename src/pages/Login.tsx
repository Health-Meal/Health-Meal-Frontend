import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({
            email: '',
            password: ''
        }
    );

    const onChange = (e) => {
        const { name, value } = e.target;
        setAuth({ ...auth, [name]: value });
    };

    const onSubmit = () => {
        const { email, password } = auth;
        axios.post('http://localhost:8080/auth/login', {
            email, password
        }).then(res => {
            const { accessToken, refreshToken } = res.data;
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('refresh_token', refreshToken);
            navigate('/keyword');
        });
    };

    return (
        <>
            <Wrapper>
                <Container>
                    <TitleWrapper>
                        <Title color={'#424434'}>Health</Title>
                        <Title color={'#424434'}>-</Title>
                        <Title color={'#87933C'}>Meal</Title>
                        <Title color={'#D4DF90'}>.</Title>
                    </TitleWrapper>
                    <InputName>E-mail Address</InputName>
                    <Input name="email" placeholder="이메일을 입력해주세요." onChange={onChange} value={auth.email}></Input>
                    <InputName>Password</InputName>
                    <Input name="password" placeholder="비밀번호를 입력해주세요." onChange={onChange}
                           value={auth.password}></Input>
                    <Button onClick={onSubmit}>로그인</Button>
                    <SignUpWrapper>
                        <SignUp>계정이 없으신가요?</SignUp>
                        <SignUp color={'#87933C'}> 회원가입</SignUp>
                    </SignUpWrapper>

                </Container>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F5F5F5;
`;

const Container = styled.div`
    width: 500px;
    height: 600px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleWrapper = styled.div`
    margin-top: 100px;
`;

const Title = styled.span`
    font-size: 50px;
    font-weight: bold;
    color: ${(props) => props.color};
`;

const InputName = styled.div`
    font-size: 15px;
    margin-top: 20px;
    margin-left: -200px;
`;

const Input = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #BEBEBE;
`;

const Button = styled.button`
    width: 300px;
    height: 40px;
    background-color: #87933C;
    border: none;
    border-radius: 10px;
    color: #BEBEBE;
    margin-top: 50px;
`;

const SignUpWrapper = styled.div`
    margin-top: 15px;
`;

const SignUp = styled.span`
    font-size: 15px;
    color: ${(props) => props.color};
`;
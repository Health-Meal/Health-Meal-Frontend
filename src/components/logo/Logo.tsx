import styled from 'styled-components';

export const Logo = () => {
    return (
        <>
            <TextWrapper>
                <Text color={'#424434'}>Health</Text>
                <Text color={'#424434'}>-</Text>
                <Text color={'#87933C'}>Meal</Text>
                <Text color={'#D4DF90'}>.</Text>
            </TextWrapper>
        </>
    )
}

const TextWrapper = styled.div`
    margin-top: 15px;
    margin-left: 35px;
    position: fixed;
`

const Text = styled.span`
    font-size: 25px;
    font-weight: bold;
    color: ${(props) => props.color};
`
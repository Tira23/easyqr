import styled from 'styled-components'
export const ButtonStyled = styled.div`
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 200px;
    padding: 5px;
    border: 1px solid rgba(198, 169, 169, 0.47);
    border-radius: 10px;
    transition: .2s;
    box-shadow: rgba(139, 149, 125, 0.23) 1px 1px 2px 2px;
    &:hover {
        box-shadow: rgba(93, 116, 57, 0.4) 1px 1px 10px 5px;

    }
`

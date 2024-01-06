import styled from 'styled-components'
import {RiDeleteBin5Line} from "react-icons/ri";
export const CustomDiv = styled.div`
height: 30px;
`
export const Flex = styled.div<{gap?: number, justify?: string, direction?: string, mt?: number}>`
    display: flex;
    flex-direction: ${p => p.direction || 'row'};
    justify-content: ${p => p.justify || 'start'};
    align-items: center;
    margin-top: ${p => (p.mt || 0) + 'px'};
    gap: ${p => p.gap + 'px'};
    min-width: 90%;
`
export const TodoDiv = styled(Flex)<{checked?: boolean}>`
    height: 50px;
    width: 100%;
    padding: 10px 10px 10px 0;
    margin-top: ${p => (p.mt || 10) + 'px'};
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    transition: .1s;
    box-shadow: ${p => p.checked ? '#85F4567A' : '#0000001C'} 1px 1px 5px 2px;
    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.32);
        box-shadow: ${p => p.checked ? '#85F4567A' : '#0000001C'} 1px 1px 5px 5px;
    }
`
export  const SpanStyled = styled.span<{checked?: boolean}>`
    text-decoration: ${p => p.checked? 'line-through' : 'none'};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
export const CustomCheckBox = styled(RiDeleteBin5Line)`
    margin: 1px;
    color: rgba(255, 75, 75, 0.84);
    height: 28px;
    width: 28px;
    cursor: pointer;
    transition: .5s;
    &:hover {
        transform: scale(1.2);
        color: red
    }
`

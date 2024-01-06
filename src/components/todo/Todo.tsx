import {CustomCheckBox, CustomDiv, Flex, SpanStyled, TodoDiv} from "../helpers/helpers";
import React, {ReactNode} from "react";
import {Checkbox} from "@mui/material";
import Store from "../../store/store";
import {observer} from "mobx-react-lite";

interface IProps {
    checked?: boolean
    children: ReactNode
    index: number
    id:number
}

const Todo = ({children, checked, index,id}: IProps) => {
    return (
        <TodoDiv justify="space-between" checked={checked}>
            <Flex gap={5}>
                <Checkbox
                    checked={checked}
                    onChange={() => Store.toggleCheck(id)}
                    sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                    color="success"
                />
                <SpanStyled checked={checked}>{children}</SpanStyled>
            </Flex>
            <CustomDiv>
                <CustomCheckBox onClick={() => Store.deleteTodo(index)}/>
            </CustomDiv>
        </TodoDiv>
    );
};
export default observer(Todo)

import {InputStyled} from "../input/inputs";
import {ButtonStyled} from "../buttons/buttons";
import {Flex} from "../helpers/helpers";
import React, {useEffect, useState} from "react";
import Store from "../../store/store";
import {observer} from "mobx-react-lite";

const Header = () => {

    const [value, setValue] = useState('');
    const clickEnter = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            click()
        }
    }
    const click = () => {
        if (value.trim()) {
            Store.createTodo(value)
            setValue('')
        }
    }
    useEffect(() => {
        document.addEventListener('keypress', clickEnter)
        return () => {
            document.removeEventListener('keypress', clickEnter)
        }
    }, [value])
    return (
        <Flex gap={20}>
            <InputStyled
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <ButtonStyled onClick={click}>
                Записать
            </ButtonStyled>
        </Flex>
    );
};
export default observer(Header)

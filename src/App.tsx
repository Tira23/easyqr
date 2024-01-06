import React from 'react';
import GlobalStyle from "./global.styled";
import {WrapperStyled} from "./components/wrapper/wrapper";
import {Flex} from "./components/helpers/helpers";
import Todo from "./components/todo/Todo";
import Header from "./components/header/Header";
import {observer} from "mobx-react-lite";
import Store from "./store/store";

function App() {

    return (
        <>
            <GlobalStyle/>
            <WrapperStyled>
                <Header/>
                <Flex direction="column" mt={15} gap={10}>
                    {Store.todos.map(({id, body, checked}, index) => (
                        <Todo key={id} checked={checked} index={index} id={id}>{body}</Todo>))}
                </Flex>
            </WrapperStyled>
        </>
    )
}

export default observer(App);

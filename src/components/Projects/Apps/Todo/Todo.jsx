import React from 'react';
import { TodoContainer, Wrapper } from './styled';
import TodoTitle from './TodoTitle';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function Todo(props) {
    return (
        <>
         <Wrapper>
            <TodoContainer>
                <TodoTitle />
                <TodoForm />
                <TodoList />
            </TodoContainer>
         </Wrapper>   
        </>
    );
}

export default Todo;
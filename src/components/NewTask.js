import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, toggleInput } from '../redux/taskSlice';
import { Container } from '@mui/material';
import styled from 'styled-components';

const NewTaskContainer = styled(Container)`
  max-width: 100%;
  padding-top: 16px;
`;

const TodoForm = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  background: #faf7f5;
  padding: 0 1.5em;
  font-size: initial;
  border-radius: 15px;
  margin: 0.2rem;
  height: 3rem;
  font-family: "Quicksand", sans-serif;
  &:focus {
    outline: none;
    border-color: #ccc;
  }
`;

const Button = styled.button`
  padding: 0 1.3rem;
  border: none;
  background: ${props => props.disabled ? '#ccc' : '#9395d3'};
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 5px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transform: background 0.2s ease-out;
  border-radius: 15px;

  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : '#80669d'};
  }
`;

const NewTask = () => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();
  const isDisabled = !description || !deadline;

  const saveTask = () => {
    if (description && deadline) {
      dispatch(addTask({ id: Date.now(), description, deadline: new Date(deadline), completed: false }));
      setDescription('');
      setDeadline('');
      dispatch(toggleInput());
    }
  };

  return (
    <NewTaskContainer maxWidth="lg">
      <TodoForm onSubmit={saveTask}>

        <Input
          type="text"
          placeholder="Enter task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="task"
        />
        <Input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <Button disabled={isDisabled}>Save Task</Button>
      </TodoForm>
    </NewTaskContainer>
  );
};

export default NewTask;

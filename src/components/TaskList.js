import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

const TaskListContainer = styled(Container)`
  max-width: 700px;
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  background: #9395d3;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 15px;
`;

const SearchInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
  margin-top: 2%;
`;

const SearchInputField = styled.input`
  width: 50%;
  height: 3rem;
  font-family: "Quicksand", sans-serif;
  background: #faf7f5;
  font-size: initial;
  border-radius: 15px;
  border: 0;
  padding: 0 1.5em;
  border: 1px solid transparent;
  border-bottom-color: #ccc;
  transition: 0.4s;

  &:focus {
    outline: none;
    border-color: #ccc;
  }
`;

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [query, setQuery] = useState('');

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) =>
            task.description.toLowerCase().includes(query.toLowerCase())
        );
    }, [tasks, query]);

    return (
        <TaskListContainer>
            <SearchInput>
                <SearchInputField
                    type="text"
                    placeholder="Search tasks..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </SearchInput>
            <div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {filteredTasks.length > 0 ? (
                        filteredTasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))
                    ) : (
                        <Typography variant="body1" color="inherit">
                            No tasks found.
                        </Typography>
                    )}
                </ul>
            </div>
        </TaskListContainer>
    );
};

export default TaskList;

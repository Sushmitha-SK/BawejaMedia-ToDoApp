import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import styled from 'styled-components';

const TaskWrapper = styled.div`
  display: flex;
  margin: 0 -3rem 4px;
  padding: 1.1rem 3rem;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
`;

const TaskItem = styled.li`
  font-size: 12px;
`;

const TaskDescription = styled.span`
font-size:18px;
line-height:30px;
  color: ${(props) => (props.isDeadlineExceeded ? '#c51a1d' : '#000')};
  font-weight: ${(props) => (props.isDeadlineExceeded ? '900' : '700')};
`;

const TaskDate = styled.p`
font-size:14px;
line-height:30px;
  font-weight: ${(props) => (props.isDeadlineExceeded ? '800' : '600')};
`;

const TodoButtons = styled.button`
border: none;
    font-size: 1em;
    margin: 0.4em;
    background: none;
    cursor: pointer;
    color: #fff;
`;

const TaskCard = ({ task }) => {
    const dispatch = useDispatch();
    const now = new Date();
    const isDeadlineExceeded = new Date(task.deadline) < now;

    const handleDeleteTask = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <TaskWrapper>
            <TaskItem>
                <TaskDescription isDeadlineExceeded={isDeadlineExceeded}>
                    {task.description}
                </TaskDescription>
                <TaskDate>{task.deadline.toString()}</TaskDate>
            </TaskItem>
            <div >
                <TodoButtons onClick={handleDeleteTask}>
                    <i className="fas fa-trash" />
                </TodoButtons>
            </div>
        </TaskWrapper>
    );
};

export default TaskCard;

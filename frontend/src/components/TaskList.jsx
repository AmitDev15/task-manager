import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTask } from '../redux/taskSlice';
import { List, ListItem, ListItemText, IconButton, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';

const TaskList = ({onEditTask}) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
    <Typography variant="h5" component="h4" gutterBottom style={{ textAlign: 'center' }}>
      Task List
    </Typography>
      <Box sx={{ borderRadius: 2, borderColor: '#C9DABF' ,boxShadow: 1, color: "#5F6F65", width: '100%', maxWidth: '100%'}}>
      {tasks.length === 0 ? (
        <Typography variant="h4" sx={{ color: '#5F6F65', textAlign: 'center', py: 4 }}>
          No tasks in the list! Please add tasks to the list
        </Typography>
      ) : (
        <List sx={{ width: '100%' }}>
          {tasks.map((task) => (
            <ListItem key={task._id} sx={{ justifyContent: 'space-between' }}>
              <ListItemText primary={task.title} secondary={
                 <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {task.description}
              </Typography>
            </React.Fragment>
              }
              />
              <Box sx={{ display: 'flex' }}>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => onEditTask(task)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(deleteTask(task._id))}
              >
                <DeleteIcon />
              </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      )}
      </Box>
    </>
  );
};

TaskList.propTypes = {
  onEditTask: PropTypes.func.isRequired,
};

export default TaskList;

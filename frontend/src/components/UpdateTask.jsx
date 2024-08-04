/* eslint-disable react/prop-types */
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateTask } from '../redux/taskSlice';

const UpdateTask = ({ task, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(updateTask({ id: task._id, title, description }));
      onClose();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2, width: '100%' }}
    >
      <TextField
        variant="outlined"
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        variant="outlined"
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: '100%' }}
      >
        Update Task
      </Button>
    </Box>
  );
};

export default UpdateTask;

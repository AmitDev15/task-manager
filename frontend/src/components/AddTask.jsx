import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { TextField, Button, Box } from '@mui/material';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description, completed: false }));
    setTitle('');
    setDescription('');
  };

  return (
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2, width: '100%' }}
      >
        <TextField
          variant="outlined"
          label="Title Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          variant="outlined"
          label="Title Description"
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
          fullWidth
          sx={{ width: '100%', height:'4rem' }}
        >
          Add Task
        </Button>
      </Box>
  );
};

export default AddTask;

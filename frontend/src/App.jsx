import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import Login from './components/Login';
import Logout from './components/Logout';
import { Container, CssBaseline, Typography, Box } from '@mui/material';
import { useState } from 'react';

function App() {
    const [editingTask, setEditingTask] = useState(null);
    const { isAuthenticated } = useSelector((state) => state.auth);

    const handleEditTask = (task) => {
        setEditingTask(task);
    };
    const handleCloseUpdateForm = () => {
        setEditingTask(null);
    };

    return (
        <Container maxWidth={false} disableGutters sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', bgcolor: '#C9DABF', width: '100vw', px: '8rem' }} >
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: '#fff',
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: '100%',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#5F6F65' }}>
                    Task Manager
                </Typography>

                    {!isAuthenticated ? (
                        <Login />
                    ) : (
                        <>
                            {editingTask ? (
                                <UpdateTask task={editingTask} onClose={handleCloseUpdateForm} />
                            ) : (
                                <AddTask />
                            )}
                            <TaskList onEditTask={handleEditTask} />
                            <Logout />
                        </>
                    )}
            </Box>
        </Container>
    );
}

export default App;

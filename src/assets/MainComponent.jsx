import React from 'react'
import { Container, Card, CardContent, Typography,TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';    
import InputField from './inputField'
import { useState } from 'react'

function MainComponent() {
    let [tasks, setTasks] = useState([])

    // Edit-related states
    let [editIndex, setEditIndex] = useState(null)

    function handleClick(newTask) {
        return setTasks((prevTasks) => [...prevTasks, newTask])
    }

    function handleDelete(index) {
        setTasks((prevTasks) => prevTasks.filter((__, i) => i !== index))
    }

    // Edit mode enable karne ke liye
    function handleEditClick(index) {
        setEditIndex(index) // Set the task being edited
    }

    // ye edit wala function hai (called onBlur instead of "Save" button)
    function handleSaveEdit(index, event) {
        const updatedValue = event.target.value
        setTasks((prevTasks) =>
            prevTasks.map((task, i) => (i === index ? updatedValue : task))
        )
        setEditIndex(null) // Exit edit mode
    }

    return (
        <Container maxWidth="sm" sx={{ flex: 1, mt: 4 }}>
            {/* YE INPUT LENE K LIYE */}
            <InputField handleClickProp={handleClick} />

            {/* YE DISPLAY KRWANE K LIYE */}
            <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: 3, mt: 2 }}>
                {tasks.map((task, i) => (
                    <Card key={i} sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%' }}>
                            {editIndex === i ? (
                                // Show input field if in edit mode, save onBlur
                                <TextField
                                    type="text"
                                    defaultValue={task}
                                    onBlur={(event) => handleSaveEdit(i, event)}
                                    autoFocus
                                />
                            ) : (
                                // Otherwise, show task text
                                <>
                                    <Typography
                                    variant="subtitle1"
                                    sx={{ flex: 1, cursor: 'pointer' }}
                                    onClick={() => handleEditClick(i)} // Click to enter edit mode
                                    >
                                        {task}
                                    </Typography>
                                    <DeleteIcon onClick={() => handleDelete(i)} sx={{ cursor: 'pointer' }} />
                                </>
                            )}

                        </CardContent>
                    </Card>
                ))}
            </Card>
        </Container>
    )
}

export default MainComponent

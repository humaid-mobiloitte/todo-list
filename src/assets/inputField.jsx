import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

function InputField({ handleClickProp }) {
    const [inputValue, setInputValue] = useState('');

    const childHandleClick = () => {
        handleClickProp(inputValue)
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };

    return (
        <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: 3 }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    TO-DO List
                </Typography>
                <TextField id="filled-basic" label="Enter your task" variant="filled" value={inputValue} onChange={handleInputChange}
                />
                <Button variant="contained" color="primary" onClick={childHandleClick}>
                    Add Task
                </Button>
            </CardContent>
        </Card>
    );
}

export default InputField;
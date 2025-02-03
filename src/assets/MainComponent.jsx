import React from 'react'
import { Container, Card, CardContent, Typography} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';    
import InputField from './inputField'
import { useState } from 'react'

function MainComponent() {
    //isko array bna do,taki aur bhi tasks aaskein:- let [input,setInput]=useState('')
    let [tasks,setTasks]=useState([])

    // is function ko bhi array k hisab se modify kr do
    // function handleClick(value){
    //     return setInput(value)
    // }
    function handleClick(newTask){
        return setTasks((prevTasks)=>[...prevTasks,newTask])
    }

    function handleDelete(index){
        setTasks((prevTasks)=>prevTasks.filter((__,i) => i != index))
    }
  return (
    <Container maxWidth="sm" sx={{ flex: 1, mt: 4 }}>
        {/* YE INPUT LENE K LIYE */}
        <InputField handleClickProp={handleClick}/>

        {/* YE DISPLAY KRWANE K LIYE */}
        <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: 3 }}>
            {tasks.map((task,i)=>{
                return(
                    <CardContent style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%' }}>
                        <Typography variant="subtitle1" sx={{ mb: 2, flex: 1 }}>
                            {/* TASK YHA LIKHA HUA AYEGA */}
                            {task}
                        </Typography>
                        <DeleteIcon onClick={()=>handleDelete(i)} sx={{cursor:'pointer'}}/>
                    </CardContent>

                )
            })}
        </Card>
      </Container>
  )
}

export default MainComponent

import React from 'react'
import { Container, Card, CardContent, Typography} from '@mui/material'
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
  return (
    <Container maxWidth="sm" sx={{ flex: 1, mt: 4 }}>
        {/* YE INPUT LENE K LIYE */}
        <InputField handleClickProp={handleClick}/>

        {/* YE DISPLAY KRWANE K LIYE */}
        <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: 3 }}>
            {tasks.map((task,i)=>{
                return(
                    <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center',gap:'15px'}}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                        {/* TASK YHA LIKHA HUA AYEGA */}
                            {task}
                        </Typography>
                    </CardContent>
                )
            })}
        </Card>
      </Container>
  )
}

export default MainComponent

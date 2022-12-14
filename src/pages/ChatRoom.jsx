import React, { useState, useEffect, useRef } from 'react'
import { InputBase, Typography, Box, Grid, Button } from '@mui/material';
import { BiTrash, BiSend,BiEditAlt } from "react-icons/bi";
import { useLocation } from 'react-router-dom';
import SocketIOClient from 'socket.io-client';
import { PageChatRoom, BoxInput, BoxMessage } from '../assest/StyleComponent';
import girl from '../assest/images/girl.png';
import boy from '../assest/images/boy.png';
import App from '../App.css'

export default function ChatRoom() {
    const [massages, setMassages] = useState([])
    const [newMassage, setnewMassage] = useState([])
    const [edit, setEdit] = useState('')
    const location = useLocation();
    const srcolaGird = useRef()

    //rel socket to backend
    const socket = React.useRef(SocketIOClient.connect("http://localhost:3010/socket"));

    useEffect(() => {
        socket.current.on("newMassage", (massage) => {
            setMassages(massages => massages.concat(massage))
            srcolaGird.current.scroll(0, srcolaGird.current.scrollHeight);
        })
        socket.current.on("editMsg", (data) => {
            setMassages(data)
        })
    }, [])
    useEffect(() => {
        socket.current.on("deleteMsg", id => {
            const dell = massages.filter(i => i.id != id)
            setMassages(dell)
        })
    }, [massages])

    const sendMassage = () => {
        if (edit != '') {
            Object.values(massages).map((data) => {
                if (edit.id == data.id) {
                    data.msg = newMassage;
                }
                setEdit('')
                setnewMassage('')
                socket.current.emit("editMsg", massages)                
            })
        }
        else {
            send()
        }
    }

    const send = () => {
        if (!newMassage)
            return;
        socket.current.emit("newMassage", {
            id: "",
            msg: newMassage,
            sender: {
                name: location.state.name,
                gender: location.state.gender
            }
        })
        setnewMassage("")
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMassage();
        }
    }

    const DeleteMessage = (id) => {
        socket.current.emit("deleteMsg", id)
    }
    
    // edit message-----------------
    const EditMessage = (data) => {
        setnewMassage(data.msg)
        setEdit(data)
    }
    return (
        <>
            <PageChatRoom ref={srcolaGird}>
                <Grid >
                    {massages.map((item, i) =>
                    (
                        <BoxMessage key={i} className={location.state.name === item.sender.name ? 'rtl' : 'ltr'}>
                            <Box>
                                <img src={item.sender.gender === 1 ? girl : boy} className='avatar' />
                            </Box>
                            <p>
                                <i>{item.sender.name}</i>
                                {item.msg}
                                <span>
                                    <label>{item.date.split("T")[1].split(".")[0]}</label>
                                    {location.state.name === item.sender.name ? <>
                                        <button onClick={() => DeleteMessage(item.id)}><BiTrash /></button>
                                        <button onClick={() => EditMessage(item)}><BiEditAlt/></button>
                                    </> : <></>}
                                </span>
                            </p>
                        </BoxMessage>
                    )
                    )}
                </Grid>
            </PageChatRoom>
            <BoxInput>
                <Button onClick={sendMassage}><BiSend /></Button>
                <InputBase value={newMassage} onChange={e => setnewMassage(e.target.value)} sx={{ border: '2px solid' }} onKeyDown={handleKeyDown} placeholder="???????? ???????? ????????..." />
            </BoxInput>
        </>
    )
}
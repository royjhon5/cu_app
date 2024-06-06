import { Box, IconButton, TextField, Tooltip } from "@mui/material"
import PerfectScrollbar from 'react-perfect-scrollbar';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from "react";
import { WebSocket } from "../../main";
import AuthorBox from "./authorBox";
import ClientBox from "./clientBox";

const MessageContainer = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const AppSocket = WebSocket();
  const messagesEndRef = useRef(null);

  console.log(messageList)

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      AppSocket.emit("join_room", room);
      setShowChat(true);
    }
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await AppSocket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    AppSocket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [AppSocket]);
  return (
    <>
        <Box sx={{
            WebkitBoxFlex: 1, 
            flexGrow: 1,
            height: '100%',
            overflow: 'hidden',
            padding: 1.5,
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;'
        }}>
            <PerfectScrollbar>
                <Box>
                    {!showChat ? ( 
                        <><h3>Join A Chat</h3>
                        <input
                            type="text"
                            placeholder="John..."
                            onChange={(event) => {
                            setUsername(event.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Room ID..."
                            onChange={(event) => {
                            setRoom(event.target.value);
                            }}
                        />
                        <button onClick={joinRoom}>Join A Room</button>
                        </>
                    ) : (
                        <>
                        {messageList.length === 0 ?  
                            'hello how can i assist you' 
                            : 
                            messageList.map((messageContent) => {
                                return (
                                    <>
                                    {username === messageContent.author ? (
                                        <AuthorBox 
                                        key={messageContent.id}
                                        authorMessage={messageContent.message} 
                                        authorTime={messageContent.time} 
                                        />
                                    ) : (                        
                                        <ClientBox 
                                        key={messageContent.id}
                                        message={messageContent.message}
                                        time={messageContent.time}
                                        />
                                    )}
                                    </>
                                );
                            })
                        }
                        <Box ref={messagesEndRef} />
                        </>
                    )}
                </Box>
            </PerfectScrollbar>
        </Box>
        <Box sx={{ padding: 1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: 1, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'}}>
            <TextField size="small" fullWidth variant="filled" label="Type a message" value={currentMessage}
            onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <Tooltip tite="Send" placement="top">
            <IconButton size="medium" onClick={sendMessage}>        
                    <SendIcon fontSize="small" color="primary" />
            </IconButton>
            </Tooltip>
        </Box>
    </>
  )
}

export default MessageContainer
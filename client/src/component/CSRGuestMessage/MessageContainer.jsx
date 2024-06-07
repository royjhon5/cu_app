import { Box, Button, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from "react";
import { WebSocket } from "../../main";
import AuthorBox from "./authorBox";
import ClientBox from "./clientBox";
import HelpDesk from '../../assets/images/help-desk.png';
import { v4 as uuidv4 } from 'uuid';

const MessageContainer = () => {
  const guestId = uuidv4();
  const [username, setUsername] = useState(`GuestTicket - ${guestId}`);
  const [room, setRoom] = useState(`GuestTicket - ${guestId}`);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const AppSocket = WebSocket();
  const messageEl = useRef(null);

  useEffect(() => {
    const savedUsername = localStorage.getItem('7GNBbxcdTglBk+Djon8obg==');
    const savedRoom = localStorage.getItem('SkMvAnXuJKrczmx+awosRQ==');
    if (savedUsername && savedRoom) {
      setUsername(savedUsername);
      setRoom(savedRoom);
      joinRoom(savedUsername, savedRoom);
    }
  }, []);

  const joinRoom = (username, room) => {
    if (username !== "" && room !== "") {
      AppSocket.emit("join_room", room);
      setShowChat(true);
      localStorage.setItem('7GNBbxcdTglBk+Djon8obg==', username);
      localStorage.setItem('SkMvAnXuJKrczmx+awosRQ==', room);

      
    }
  };

  const handleJoinRoom = () => {
    joinRoom(username, room);
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

    AppSocket.on("load_messages", (messages) => {
      setMessageList(messages);
    });
  }, [AppSocket]);

  useEffect(() => {
    if (messageEl.current) {
      const observer = new MutationObserver(() => {
        messageEl.current.scroll({ top: messageEl.current.scrollHeight, behavior: 'smooth' });
      });

      observer.observe(messageEl.current, { childList: true });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <>
      <Box sx={{
        WebkitBoxFlex: 1,
        flexGrow: 1,
        height: '100%',
        overflow: 'hidden',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;',
        padding: showChat ? 1.5 : 0
      }}>
        <Box ref={messageEl} sx={{
          height: '342px',
          overflowY: 'auto',
        }}>
          {!showChat ? (
            <>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                gap: 1,
              }}>
                <img src={HelpDesk} />
                <Button
                  onClick={handleJoinRoom}
                  variant="contained"
                  sx={{
                    borderRadius: '14px'
                  }}
                  color="error"
                >Chat with an administrator
                </Button>
              </Box>
            </>
          ) : (
            <>
              {messageList.length === 0 ?
                'hello how can i assist you'
                :
                messageList.map((messageContent, index) => (
                  <div key={index} >
                    {username === messageContent.author ? (
                      <AuthorBox
                        authorMessage={messageContent.message}
                        authorTime={messageContent.time}
                      />
                    ) : (
                      <ClientBox
                        message={messageContent.message}
                        time={messageContent.time}
                      />
                    )}
                  </div>
                ))
              }
            </>
          )}
        </Box>
      </Box>
      <Box sx={{ padding: 1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: 1, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;' }}>
        <TextField size="small"
          fullWidth variant="filled"
          label="Type a message"
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
          disabled={showChat ? false : true}
        />
        <IconButton size="medium" onClick={sendMessage} disabled={showChat ? false : true}>
          <SendIcon fontSize="small" color="primary" />
        </IconButton>
      </Box>
    </>
  );
}

export default MessageContainer;

import { Box, Button, CircularProgress, Grow, IconButton, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from "react";
import { WebSocket } from "../../main";
import AuthorBox from "./authorBox";
import ClientBox from "./clientBox";
import HelpDesk from '../../assets/images/admin.png';
import HelloIcon from '../../assets/images/hello.png'
import { v4 as uuidv4 } from 'uuid';
import ReactTimeAgo from 'react-time-ago'

const MessageContainer = () => {
  const guestId = uuidv4();
  const [username, setUsername] = useState(`GuestTicket - ${guestId}`);
  const [room, setRoom] = useState(`GuestTicket - ${guestId}`);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const AppSocket = WebSocket();
  const messageEl = useRef(null);
  const [loading, setLoading] = useState(false)
  const grow = true;

  const formatDateTime = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
  };

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
      setLoading(true);
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
        time: formatDateTime(new Date()),
        };
      await AppSocket.emit("send_message", messageData);
      await AppSocket.emit("triggerOpenGuestTicken")
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
      setLoading(false)
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
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <CircularProgress />
                </Box>
              ) : (
                messageList.length === 0 ?
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', gap:0 }}>
                    <Grow in={grow} style={{ transformOrigin: '0 0 0' }}
                    {...(grow ? { timeout: 800 } : {})}><img src={HelloIcon} /></Grow>
                    <Grow in={grow} style={{ transformOrigin: '0 0 0' }}
                    {...(grow ? { timeout: 1000 } : {})}>
                      <Typography variant="h6">How can I assist?</Typography>
                    </Grow>
                </Box>
                  :
                  messageList.map((messageContent, index) => (
                    <div key={index} >
                      {username === messageContent.author ? (
                        <AuthorBox
                          authorMessage={messageContent.message}
                          authorTime={<ReactTimeAgo date={new Date(messageContent.time).getTime()} />}
                        />
                      ) : (
                        <ClientBox
                          message={messageContent.message}
                          time={<ReactTimeAgo date={new Date(messageContent.time).getTime()} />}
                        />
                      )}
                    </div>
                  ))
              )}
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

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { Link, useParams } from "react-router-dom";
import io, { Socket } from "socket.io-client";
import { ENDPT } from "../../services/services";
let socket;

const Chat = () => {
  
  let { room_id, room_name } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("uer-------",user)
    socket = io(ENDPT, { transports: ["websocket"] });
    socket.emit("join", { name: user.name, room_id, user_id: user.id });
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      console.log(message);
      socket.emit("send_message", message, room_id, () => setMessage(""));
    }
  };
  return (
    <div>
      <div>
        {room_id} {room_name}
      </div>
      <h1>Chat {JSON.stringify(user)}</h1>
      <form action="" onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        ></input>
        <button>Send message</button>
      </form>
    </div>
  );
};

export default Chat;

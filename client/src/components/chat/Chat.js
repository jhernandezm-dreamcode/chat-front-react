import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { Link, useParams } from "react-router-dom";
import io, { Socket } from "socket.io-client";
import { ENDPT } from "../../services/services";
let socket;

const Chat = () => {
  let { room_id, room_name } = useParams();
  useEffect(() => {
    socket = io(ENDPT, { transports: ["websocket"] });
    socket.emit("join", { name: user.name, room_id, user_id: user.id });
  }, []);
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <div>
        {room_id} {room_name}
      </div>
      <h1>Chat {JSON.stringify(user)}</h1>
      <Link to={"/"}>
        <button>Go to home a</button>
      </Link>
    </div>
  );
};

export default Chat;

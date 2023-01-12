import styles from "./styles.module.css";
import RoomAndUsersColumn from "./RoomAndUser"; // Add this
import SendMessage from "./SendMessage";
import MessagesReceived from "./Messages";

const Chat = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
      {/* Add this */}
      <RoomAndUsersColumn socket={socket} username={username} room={room} />

      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;

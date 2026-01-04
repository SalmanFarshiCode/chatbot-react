import userImg from "../assets/user.png";
import botImg from "../assets/bot.jpg";
import "./input.css"

function ChatMessage({message,sender}){
   // const message= props.message;
    //const sender=props.sender;
   // const{message,sender}=props;
    return(
        <div className={sender==='user'?'chat-user':'chat-robot'}>
            {sender==='robot' && (
            
            <img src={botImg} 
            className="chat-profile"
            />
            )}
            <div className="message">
            {message}
            </div>
            {sender==='user'&&(
            <img src={userImg}
            className="chat-profile"
            />
            )}
            </div>
    );
}
export default ChatMessage;
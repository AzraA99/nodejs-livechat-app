/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    // eslint-disable-next-line no-unused-vars
    const chatProps = useMultiChatLogic('68c01fea-914c-4d76-b884-8c23c596aecc', 
    props.user.username, 
    props.user.secret
    );
    return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        
        </div>
        )
}

export default ChatsPage
import React from 'react';
import { useState, useEffect } from 'react';
// import ChatAPI from './ChatAPI'

// 官方的 ChatAPI 并没有完整案例。
const ChatAPI = {
    status:null,
    isOnline:false,
    login:()=>{
        // 做一些登录相关的事情
        // 然后通知订阅的组件
        this.isOnline = true;
        if(this.handle) this.handle({isOnline:true})
    },
    logout:()=>{
        this.isOnline = false;
        if(this.handle)  this.handle({isOnline:false})
    },
    subscribeToFriendStatus:(id,status)=>{
        console.log(`订阅 用户id:${id},`)
        this.status = status;
    },
    unsubscribeFromFriendStatus:(id,status)=>{
        console.log(`清理 用户id:${id},`)
        this.status = null;
    },
}

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  },[props.friend.id]);

  if (isOnline === null) {
    return 'Loading...';
  }
  return <div>
    {console.log("FriendStatus refresh")}
    {isOnline ? 'Online' : 'Offline'}
  </div>;
}



function Sunscribe(){
    const [show,setShow] = useState(true);
    const [count,setCount] = useState(0);
    const [userId,setUserId] = useState(1);
    return(
        <div>
            userId:{userId}<br />
            counter：{count}<button onClick={()=>setCount(count+1)}> add + 1</button><br />
            {show? <FriendStatus friend={{id:userId,name:'sadam'}} />:null}
            <button onClick={()=>setShow(!show)}>Subscribe / Unsbscribe</button>
            <button onClick={()=>setUserId(userId+1)}>userid + 1</button>
            
            <button onClick={ChatAPI.login}>sign in</button>
            <button onClick={ChatAPI.logout}>siign out</button>
        </div>
    )
}

export default Sunscribe
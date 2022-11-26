import React from 'react';

interface IProps {
  errorCode: number,
  msg: string,
}

const Error = ({errorCode,msg}: IProps)=>{
  return (<>
    Code {errorCode}
    Msg {msg}
  </>
  )
};

export default Error

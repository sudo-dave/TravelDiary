import React from 'react';
// import React, {FC} from 'react';

interface IProps {
  errorCode: number,
  msg: string,
}

const Error: React.FC<IProps> = ({errorCode,msg})=>{
  return (<>
    Code {errorCode}
    Msg {msg}
  </>
  )
};

export default Error

import React from 'react';

interface IProps {
  errorCode: number,
  msg: string,
}

const Error = ({errorCode,msg}: IProps)=>{
  return (
    <div className="flex bg-red-100 h-screen">
      <div className='m-auto text-center'>
        <div>
      Code {errorCode}
        </div>
        {msg}
      </div>
    </div>
  )
};

export default Error

import * as React from 'react'

interface IProps {
  errorCode: number,
  msg: string,
}

// const Error = ({code,msg}: Props) => {
//   return (
//     <div>
//       code {code}
//     </div>

//   )
// };
const Error: React.FC<IProps> = ({errorCode,msg}): JSX.Element =>{
  return (<>
    Code {errorCode}
    Msg {msg}
  </>
  )
};

export default Error

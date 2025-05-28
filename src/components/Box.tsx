import './Box.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import RecoveryForm from './RecoveryForm'

interface Props {
  status: string;
}

export default function Box({ status } : Props){
  let content;
  if(status === "login"){
    content = <LoginForm />
  } else if(status === "register"){
    content = <RegisterForm />
  } else if(status === "recovery"){
    content = <RecoveryForm />
  } else {
    content = <></>
  }
  return (
    <>
      <main className="box">
        {content}
      </main>
    </>
  )
}

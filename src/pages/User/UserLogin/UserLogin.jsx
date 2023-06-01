import React ,{useState} from 'react'
import PassWord from "../../../components/Password/Password"
const UserLogin = () => {
  const [password, setPassword] = useState('');
  return (
    <div>UserLogin
<PassWord
        value={password}
        setValue={setPassword}
        className="custom-input"
        width="200px"
        height="30px"
        placeholder="Enter password"
        label="Password"
      />

    </div>
  )
}

export default UserLogin
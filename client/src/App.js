import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {

  const [listOfUsers,setListOfUsers] = useState([]);
  const [name,setName] = useState('');
  const [age,setAge] = useState(0);
  const [userName,setUserName] = useState('');

  useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response)=>{
      setListOfUsers(response.data);
    });
  },[])

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser",{name:name,age:age,username:userName}).then((response)=>{
      setListOfUsers([...listOfUsers, {name:name,age:age,username:userName}]);
    })
  }

  return (
    <div className="App">
      <div className='usrsDisplay'>
        {listOfUsers.map((user)=>{
          return(
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          )
        })}
        <div>
          <input type='text' 
          placeholder='name' 
          onChange={(e)=>{
            setName(e.target.value);
          }}/>
          <input type= 'number'
          onChange={(e)=>{
            setAge(e.target.value);
          }} placeholder='Age'/>
          <input type='text' 
          placeholder='Username' 
          onChange={(e)=>{
            setUserName(e.target.value);
          }}/>
          <button onClick={createUser}>Create User</button>
        </div>
      </div>
    </div>
  );
}

export default App;

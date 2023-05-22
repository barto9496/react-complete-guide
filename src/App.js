import { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

const App = () => {

  const [usersListChange, setUsersList] = useState([])

  const onDeleteHandler = (id) => {
    setUsersList(prevList => {
      return prevList.filter(listItem => {
        return listItem.id !== id
      })
    })
  }

  const onUserDetailsChangeHandler = (userName, userAge) => {
    setUsersList(prevList => {
      return [
        ...prevList,
        {
          name: userName,
          age: userAge,
          id: Math.random()
        }
      ]
    })
  }

  return (
    <div className='baseDiv' >
      <h2 style={{ textAlign: 'center', color: 'white' }}> User details </h2>
      <div>
        <AddUser onUserDetailsChange={onUserDetailsChangeHandler} />
        <UsersList usersList={usersListChange} onDelete={onDeleteHandler} />
      </div>
    </div>
  )
};

export default App;

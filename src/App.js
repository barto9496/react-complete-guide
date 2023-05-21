import AddUser from './Components/Users/AddUser';

const App = () => {
  return (
    <div className='baseDiv' >
      <h2 style={{textAlign:'center', color: 'white'}}> User details </h2>
      <div>
        <AddUser />
      </div>
    </div>
  )
};

export default App;

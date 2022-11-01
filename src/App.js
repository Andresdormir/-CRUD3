import {useState,useEffect, useCallback} from "react"; 
import './App.css';
import {db} from './firebase-config'
import {collection,getDocs} from 'firebase/firestore';
function App() {
  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection (db, "users");
  
  const getUsers = useCallback(
    async () => {
      const data = await getDocs (usersCollectionRef);
      setUsers(data.docs.map((doc) => ({... doc.data(),id: doc.id})));
    },
    [usersCollectionRef],
  )
  

  
  useEffect(() => {
     getUsers();
  },[getUsers]);

  return (
    <div className="App"> {users.map((user)=>{return <div><h1>Name:{user.name}</h1><h1>Age:{user.age}</h1></div>;})}</div>
  );
}

export default App;

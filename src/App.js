import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function App() {

  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.People)
        setFilteredPeople(data.People); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleSearch = (input) => {
    const filtered = people.filter((person) => {
      return(
        person.name.toLowerCase().includes(input.toLowerCase()) ||
        person.email.toLowerCase().includes(input.toLowerCase()) ||
        person.phone.toLowerCase().includes(input)
        )
    });
    setFilteredPeople(filtered);
  };
  

  return (
    <div className="App">
      <input placeholder='Write to Search'  className='mt-5'
      onChange={(e) => handleSearch(e.target.value)}></input>
      <Table striped bordered hover size="sm" className='container m-5'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
          {filteredPeople.map((e) => (
        <tr key={e.name}>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.phone}</td>
        </tr>
          ))}
      </tbody>
    </Table>
    </div>
  );
}

export default App;

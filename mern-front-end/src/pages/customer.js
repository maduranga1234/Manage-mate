import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './customer.css'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function CustomerCenter() {

    const [id, setId] = useState('');
    const[name,setName]=useState('');
    const[address,setAddress]=useState('');
    const[age,setAge]=useState('');

    const[objId ,setObjId]=useState('');

    const [customer, setCustomers] = useState([]);
      
    

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios.get('http://localhost:8080/getAll')
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

   


    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        
        switch (name) {
          case 'id':
            setId(value);
            break;
          case 'name':
            setName(value);
            break;
          case 'address':
            setAddress(value);
            break;
          case 'age':
            setAge(value);
            break;
          default:
            break;
        }
      };
    
  
      const handleButtonClick = () => {
        const formData = {
          id: id,
          name: name,
          address: address,
          age: age,
        };

        console.log(formData);
      
        if (!id || !name || !address || !age) {
          alert("Please fill in all fields before saving.");
        } else {
          axios.post(`http://localhost:8080/save/post`, formData)
            .then((response) => {
              alert("Save successfully!");
              textFeeldNull();
                         getCustomers();
            })
            .catch((error) => {
              console.error('Error saving data:', error);
            });
        }
      };


      const textFeeldNull=()=>{
       setId("");
       setName("");
       setAddress("");
       setAge("");
      }


     


      const deletButtonClick = () => {
      
        const newObj= objId;
        
      
        if (!newObj) {
          alert("Please select a customer to delete.");
          return;
        }
      
        axios.delete(`http://localhost:8080/delete/${newObj}`)
          .then((response) => {
            alert("Delete successful!");
            textFeeldNull();
            
            getCustomers();
          })
          .catch((error) => {
            console.error('Error deleting customer:', error);
          });
      };


      const updateButtonClick=()=>{

        const newObj= objId;

      const updateData={
        id:id,
        name:name,
        address:address,
        age:age
      }

      console.log(objId);

      axios.put(`http://localhost:8080/update/${newObj}`,updateData)
        .then((response)=>{
          alert("update successful!")
          getCustomers();
          textFeeldNull();
        })
        .catch((error)=>{
          console.error('not updatet customer:', error);
        })
      }

      const tableClick=(setCustomer)=>{
        setId(setCustomer.id)
        setName(setCustomer.name)
        setAddress(setCustomer.address)
        setAge(setCustomer.age)
        setObjId(setCustomer._id)
      }
      
   
    


  return (
<div className="mainDiv">

<h1>CUSTOMER FORM</h1>
      
      <input placeholder='Customer Id' className='idText' type="text" name="id" value={id} onChange={handleInputChange} />

     
      <input placeholder='Customer Name' className='idText' type="text" name="name" value={name} onChange={handleInputChange} />

      
      <input placeholder='Customer Address' className='idText' type="text" name="address" value={address} onChange={handleInputChange} />

     
      <input placeholder='Customer Age' className='idText' type="text" name="age" value={age} onChange={handleInputChange} />

      <div className="btnDiv">
       
          <button id='saveBtn' className="btn btn-primary" onClick={handleButtonClick}>
            Save
          </button>
       
          <button id='updateBtn' className="btn btn-warning" onClick={updateButtonClick} >
            Update
          </button>
        
          <button id='deletBtn' className="btn btn-danger" onClick={deletButtonClick}>
            Delete
          </button>


       
      </div>
   

      <div className="table-container">
             
      <table className="table scaledTable">
        <thead>
          <tr>
            <th style={{ position: 'sticky', top: '0', backgroundColor: 'white' }}>Customer Id</th>
            <th style={{ position: 'sticky', top: '0', backgroundColor: 'white' }}>Customer Name</th>
            <th style={{ position: 'sticky', top: '0', backgroundColor: 'white' }}>Customer Address</th>
            <th style={{ position: 'sticky', top: '0', backgroundColor: 'white' }}>Customer Age</th>
          </tr>
        </thead>
        <tbody className='tBody' >
          {customer.map((customer) => (
            <tr key={customer.id} onClick={()=>tableClick(customer)}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.address}</td>
              <td>{customer.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>

      

   
    </div>
  )
}
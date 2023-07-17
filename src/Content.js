import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Container, Form, FormGroup, Row, Table } from 'react-bootstrap';
import Api from './api/Api';


const Content = () => {
  const [details , setDetails] = useState({});
  const [getData , setGetData] = useState([])
  //  const[names, setNames] = useState("");
  //  const[address, setAddress] = useState("");
  //  const[phonenumber, setPhonenumber] = useState("");
  //  const[department, setDepartment] = useState("");

  // const Data=[
  //   {
  //     id:1,
  //     name:'Tharun',
  //     address:'Panagudi',
  //     phonenumber:9591370416,
  //     College:'Amrita',
  //   },
  //   {
  //     id:2,
  //     name:'Antony',
  //     address:'Eruvadi',
  //     phonenumber:8765111111,
  //     College:'Scad College',
  //   },
  //   {
  //     id:3,
  //     name:'Rajan',
  //     address:'Valliyur',
  //     phonenumber:9591370417,
  //     College:'FX-Engineer college',
  //   },
  //   {
  //     id:2,
  //     name:'Antony',
  //     address:'Eruvadi',
  //     phonenumber:8765111111,
  //     College:'Scad College',
  //   }
  // ]

  useEffect(() => {
      const fetchData =async  () => {
        try {
          const response = await Api.get('/details');
          setGetData(response.data)
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchData();
  },[])
  const handleChange = (e) => {
    const {name , value} = e.target
    setDetails({...details ,
      [name] : value}
      )

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name : details.name,
      address : details.address,
      phonenumber : details.phonenumber,
      department : details.department,
    }
    try {
      const response = await Api.post('/details',data);
      setGetData([...getData , response.data])
    } catch (err) {
      console.log(err.message);
    }
    setDetails({})
  }
    
  return (
    <Container>
      <Row>
      <Col md={6}>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name='name'
            value={details.name || ""}
            onChange={(e) => handleChange(e) }
            />
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              name='address'
              value={details.address|| ""}
              onChange={(e) => handleChange(e)}
              />
            <Form.Label>Phonenumber</Form.Label>
            <Form.Control
               type="number"
               placeholder="Enter your phone number"
               name='phonenumber'
               value={details.phonenumber|| ""}
               onChange={(e) => handleChange(e) }
               />
            <Form.Label>College</Form.Label>
            <Form.Control
               type="text"
               placeholder="Enter your college name"
               name='department'
               value={details.department|| ""}
               onChange={(e) => handleChange(e) }
            />   
        </FormGroup>
        <Button type="submit" >submit</Button>

      </Form>
      </Col>
      <Col md={6}>
      <Table>
        <thead>
          <tr>
          <th>name</th>
          <th>address</th>
          <th>phonenumber</th>
          <th>College</th>
          </tr>
        </thead>
        <tbody>
         {
          getData.map((data) => 
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.address}</td>
            <td>{data.phonenumber}</td>
            <td>{data.department}</td>
          </tr>
          )
         }
        </tbody>
      </Table>
      </Col>
      </Row>
      
    </Container>
    
  )
}

export default Content;

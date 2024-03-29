import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
    return (
        <div >
            {/* <nav>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Blog'>Blog</Link>
                <Link to='/Inventory'>Inventory</Link>
                <Link to='/Manageitem'>Manageitem</Link>
                <Link to='/Additem'>Additem</Link>
            </nav> */}  
             <Nav.Item  style={{marginLeft:"15px",marginTop:"10px",fontSize:'xx-large '}}>
              <img  style={{width:'250px'}}    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQHEWBvfIDjDz2kpIX_ctjuzoR-8YqNVONA&usqp=CAU" alt="" />
        <Nav.Link style={{fontSize:'40px',color:'Black',fontWeight:'700'}} href="/">Shoe Store</Nav.Link>
      </Nav.Item>


            
            <Nav style={{marginLeft:'250px',marginTop:'-250px'}}     variant="tabs" defaultActiveKey="/home">

            <Nav.Item  style={{marginLeft:"100px",marginTop:"30px",fontSize:'xx-large'}}>
        <Nav.Link href="/">Login</Nav.Link>
      </Nav.Item>



      <Nav.Item  style={{marginLeft:"100px",marginTop:"30px",fontSize:'xx-large'}}>
        <Nav.Link href="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{marginLeft:"100px",marginTop:"30px",fontSize:'xx-large'}}>
        <Nav.Link href="/About" eventKey="link-1">About Us</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item  style={{marginLeft:"70px",marginTop:"30px",fontSize:'xx-large'}}>
        <Nav.Link href="/Blog " eventKey="link-2">Blog</Nav.Link>
      </Nav.Item> */}
      {/* <Nav.Item   style={{marginLeft:"70px",marginTop:"30px",fontSize:'xx-large'}}>
        <Nav.Link href="/Manageitem"eventKey="link-3">Inventory</Nav.Link>
      </Nav.Item> */}
      {/* <Nav.Item   style={{marginLeft:"70px",marginTop:"30px",fontSize:'xx-large'}}>
        <Nav.Link href="/Additem" eventKey="link-4">New Product</Nav.Link>
      </Nav.Item> */}
      
      
    </Nav>
            
        </div>
    );
};

export default NavBar;
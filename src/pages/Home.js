import React, {Component} from 'react';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

class Home extends Component {
  render() { 
    return(
           <div>
           <Navbar />
           <div className="container">
              <h1 style={{color: "red"}}>Welcome To Company</h1>
                    <p></p>
                   <img src={process.env.PUBLIC_URL+"p2.jpg"} alt="mypic" />
            
                 </div>
              <Footer />
              </div>
      );
  }

}
export default Home
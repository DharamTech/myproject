import React, {Component} from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

class About extends Component {
    render() {
        return (
             <div>
             <Navbar />
             <div className="container">
             <h1 style={{color: "red"}}>Company Profile or about us:-</h1>

                <p>Vanmas Group is one of the leading IT networking and security solution provider company 
                providing modern technologies in different verticals including Defence and Government segment.
                Vanmas Group is an ISO 9001:2015 certified organization, having specialization in system 
                integration and have specialized team which works on turnkey solutions and always try to deliver
                best and latest solution which fits to the customer requirement. We are well known company for
                System Designing, Implementation, Operation and maintenance of Telecom, security  and IT Networking
                Products Over the years. 
                    </p><img src={process.env.PUBLIC_URL+"imagesc.jpg"} alt="mypic" />
                      <br/>

                 <h2 style={{color: "red"}}>Our Vision and Solutions</h2>
                 <p> 
                 Our vision is to provide best Solution to our customer with best possible after
                 sale support as per their requirement. And also to educate them with latest 
                 technology which is required for their business and help them to raise 
                 productivity and register growth in their business with accuracy and speed.
                 We have defined integrated solutions for Small Medium Enterprise, Big Enterprise,
                 otels and Leisure’s, Manufacturing Industries, Peripheral Solutions for Defence and 
                 ara Military Forces, Police and other government /PSU’s 
                         </p><img src={process.env.PUBLIC_URL+"c1.jpg"} alt="mypic" />
                      <br/>
                  <h2 style={{color: "red"}}>Our Clients</h2>
                 <p>
                 We give utmost importance to our clients. Our team is highly professional and 
                 always works with new clients for their new requirements and needs to fulfill 
                 their business / Security/ IT/Storage/Peripheral Security needs with on time 
                 approach.
                 <br/>
                 We cover almost every vertical in the market for their business and Security 
                 needs for efficient and smooth Operations.  
                    </p><img src={process.env.PUBLIC_URL+"imgc.jpg"} alt="mypic" />
                       <br/>
                         <h2 style={{color: "red"}}>We Cover Major Verticals areas.</h2>

                       <p>1. Defense: - Indian Army, Navy and Air force, Para Military Forces
                             Under MHA: Like CRPF , BSF, BRO, CISF etc
                             </p>
                             <img src={process.env.PUBLIC_URL+"d6.jpg"} alt="mypic" />
                             <p>2. Education Institutions: - we Cover Major Education Institutions and 
                                Universities under Govt and Non Govt Segment.
                             </p>
                             <img src={process.env.PUBLIC_URL+"ed7.jpg"} alt="mypic" />
                             <p>3. Banking and Financial Chains
                             </p>
                             <img src={process.env.PUBLIC_URL+"B8.jpg"} alt="mypic" />
                             <p>4. Hotels and recreational Centers.
                             </p>
                              <img src={process.env.PUBLIC_URL+"imagesh1.jpg"} alt="mypic" />
                             <p>5. Manufacturing, Factories and Ware Houses Govt and Non Govt.
                             </p>
                             <img src={process.env.PUBLIC_URL+"f6.jpg"} alt="mypic" />

                 
                 
                  </div>
               <Footer />
                 </div>
                 
            );
    }
}

export default About;
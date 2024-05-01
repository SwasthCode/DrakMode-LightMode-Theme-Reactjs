import React, { useState } from 'react';
import './Content.css';

const Content = () => {

  const [theme, setTheme] = useState('')
  return (
    <section>
      <h2>Our Team</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
        praesentium veritatis voluptatibus ut consequuntur quas consequatur
        omnis id rem obcaecati.
      </p>
      <div className="cards">
        <div className="card">
          <div className="card-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="James Newton"
            />
          </div>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          
        </div>

        <div className="card">
          <div className="card-img-wrapper">
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Noah Wilson"
            />
          </div>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Content;

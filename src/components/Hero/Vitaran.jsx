import React from 'react';
import './Vitaran.css'
import Footer from '../Footer/Footer';
import c_img1 from'./time.jpg'
import c_img2 from'./parcel-1.jpg'
import c_img3 from'./247.jpg'

export default function Vitaran() {
  return (
    <div>
      <div className="bg">
      <div className="mask">
        <div className="text-container">
        <h1 id="wlc">Welcome to Vitaran!</h1>
        <h6 id='tag-line'>"Delivering Solutions, Every Mile of the Way"</h6>
        </div>
      </div>
      </div>

      <div className="cards-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
    <div className="card">
      <img src={c_img1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">We know your time is valuable hence we provide you 100% cashback if we deliver your goods after given time.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={c_img2}className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">Safety of your product is atmost priority for us.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={c_img3}className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">We provide 24/7 customer care service so that you dont have to worry about anything at any point of shipping.</p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="container">
   <p className='heading'>
    This website is for Vitaran employee only!
   </p>
   <p className="txt">
    Here you can Sign Up by entering your data and Log In using your e-mail and password to access All User in which you can edit or delete User data.
   </p>
</div>

<div className='ftr'>
<Footer/>
</div>

    </div>
  )
}

import {React} from 'react';
import ikea from './Images/ikea.webp'
import loc from './Images/loc.png'
import amb from './Images/amb.jpg'
import delo from './Images/deloitte.jpg'
import dlf from './Images/dlf.jpg'
import msp from './Images/mindspace.jpg'
import '../styles/places.css'
import logo2 from "../components/Images/logo2.png"
import { FaMapMarkerAlt , FaLocationArrow} from 'react-icons/fa';

export default function Raydurg({ data }){

  const openAmb=()=>{
    window.open("https://www.google.com/maps/place/AMB+Cinemas/@17.4577589,78.3606787,17z/data=!3m2!4b1!5s0x3bcb93c8595a7705:0x39e105c49bd5b4b7!4m6!3m5!1s0x3bcb938d99f563cd:0x1d711d3f9ea94260!8m2!3d17.4577538!4d78.3632536!16s%2Fg%2F11fcsqd3ky?entry=ttu");
  }
  const openIkea=()=>{
    window.open("https://www.google.com/maps/place/IKEA+Hyderabad/@17.4391861,78.372798,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93b8f31f6f65:0x2e6f12c4f11e237f!8m2!3d17.439181!4d78.3753729!16s%2Fg%2F11bwky5nrx?entry=ttu");
  }
  const openDel=()=>{
    window.open("https://www.google.com/maps/place/Deloitte+Towers/@17.4417654,78.3670769,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93e9b9b1315d:0x146f3e018d2c0a40!8m2!3d17.4417603!4d78.3696518!16s%2Fg%2F11f5d5x2yl?entry=ttu");
  }
  const openDlf=()=>{
    window.open("https://www.google.com/maps/place/Street+Food+opposite+DLF+(Night+Food)/@17.4488639,78.3532881,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93bc100c62c1:0x48ace1444ba66a2e!8m2!3d17.4488588!4d78.355863!16s%2Fg%2F11c606xd8b?entry=ttu");
  }
  const openMsp=()=>{
    window.open("https://www.google.com/maps/place/Mindspace,+HUDA+Techno+Enclave,+HITEC+City,+Hyderabad,+Telangana+500081/@17.4415805,78.3693419,15z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93e123819919:0xf3ebdeda5f6968e1!8m2!3d17.4415606!4d78.3796417!16s%2Fg%2F11lrp1fq9k?entry=ttu");
  }


  return(
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo2} alt="Logo" width={50} height={50} />
          </a>
          <h3 id="title" className="col-8 col-md-12">Y<span className="title-span">our{data}</span> Metro</h3>
        
        </div>
      </nav>

      <div className='mt-100 ml-20 '><h1>Most searched places near your destination: </h1></div>
      <div className='row ml-40 mt-40'>
      <i class="cis-location-pin"></i>
      <div className='col-2 ml-20 br-5'><img src={amb} alt='ikea' width={220} height={170}></img></div>
      <div className='col-9 bg-lavender'>
        <div className='row'>
          <div className='col-1 mt-3'>
            <FaMapMarkerAlt  size={30} color=""/>    
          </div>
          <div className='col-7 mt-2'>
            <h2>AMB MALL</h2>
          </div>
          
          <div className='col-4 mt-3 nav-click' onClick={openAmb}>
            <div className='row'>
              <div className='col-10 d-flex'>
                <p>Click here to navigate</p>
                <FaLocationArrow className='mt-1 ml-2'/>
              </div>
              
            </div>         
          </div>
        </div>
        <div className='row mt-20'>
          <div className='col-11'>
            <p>Mahesh Babu’s son Gautam Ghattamaneni was spotted at Amb theatres along with his friends on Wednesday. The video of his visit to his father’s cinema hall quickly went viral on social media. Since then, Mahesh’s theatre has become the talk of the town and in this write-up, we will tell you more about it.</p>
          </div>
        </div>
      </div>      
    </div>

    <div className='row mt-20'>
      <div className='col-2 ml-20'><img src={ikea} alt='ikea' width={220} height={170}></img></div>
      <div className='col-9 bg-blue'>
        <div className='row'>
          <div className='col-1 mt-3'>
            <FaMapMarkerAlt  size={30} color=""/>         
          </div>
          <div className='col-7 mt-2'>
            <h2>IKEA</h2>
          </div>
          <div className='col-4 mt-3 nav-click' onClick={openIkea}>
            <div className='row'>
              <div className='col-10 d-flex'>
                <p>Click here to navigate</p>
                <FaLocationArrow className='mt-1 ml-2'/>
              </div>
              
            </div>         
          </div>
        </div>
        <div className='row mt-20'>
          <div className='col-8'>
            <p>At the heart of Hyderabad’s technological revolution, HITEC City is the IT hub of the city. A stark contrast to the historical monuments and sites, this is a city within a city for all working in the huge array of IT companies here.</p>
          </div>
        </div>
      </div>      
    </div>

    <div className='row mt-20'>
      <div className='col-2 ml-20'><img src={delo} alt='ikea' width={220} height={170}></img></div>
      <div className='col-9 bg-orange'>
        <div className='row'>
          <div className='col-1 mt-3'>
          <FaMapMarkerAlt  size={30} color=""/>   
          </div>
          <div className='col-7 mt-2'>
            <h2>Deloitte Towers</h2>
          </div>
          <div className='col-4 mt-3 nav-click' onClick={openDel}>
            <div className='row'>
              <div className='col-10 d-flex'>
                <p>Click here to navigate</p>
                <FaLocationArrow className='mt-1 ml-2'/>
              </div>
              
            </div>         
          </div>
        </div>
        <div className='row mt-20'>
          <div className='col-8'>
            <p>At the heart of Hyderabad’s technological revolution, HITEC City is the IT hub of the city. A stark contrast to the historical monuments and sites, this is a city within a city for all working in the huge array of IT companies here.</p>
          </div>
        </div>
      </div>      
    </div>

    <div className='row mt-20'>
      <div className='col-2 ml-20'><img src={dlf} alt='ikea' width={220} height={190}></img></div>
      <div className='col-9 bg-grey'>
        <div className='row'>
          <div className='col-1 mt-3'>
          <FaMapMarkerAlt  size={30} color=""/>          
          </div>
          <div className='col-7 mt-2'>
            <h2>DLF</h2>
          </div>
          <div className='col-4 mt-3 nav-click'  onClick={openDlf}>
            <div className='row'>
              <div className='col-10 d-flex'>
                <p>Click here to navigate</p>
                <FaLocationArrow className='mt-1 ml-2'/>
              </div>
              
            </div>         
          </div>
        </div>
        <div className='row mt-20'>
          <div className='col-10'>
            <p>This kiosk is full of surprises with their eccentric menu options. From Kurkure Momos to Momo Burgers, Momos Delight is awesome for all those momo lovers. You can keep it simple by chowing down their steamed chicken momos or try the gravy momos. If you've got a thing for Kurkure, the Kurkure Momos will seal the deal for you. </p>
          </div>
        </div>
      </div>      
    </div>

    <div className='row mt-20'>
      <div className='col-2 ml-20'><img src={msp} alt='ikea' width={220} height={170}></img></div>
      <div className='col-9 bg-red'>
        <div className='row'>
          <div className='col-1 mt-3'>
          <FaMapMarkerAlt  size={30} color=""/>           
          </div>
          <div className='col-7 mt-2'>
            <h2>Mindspace</h2>
          </div>
          <div className='col-4 mt-3nav-click' onClick={openMsp}>
            <div className='row'>
              <div className='col-10 d-flex'>
                <p>Click here to navigate</p>
                <FaLocationArrow className='mt-1 ml-2'/>
              </div>
              
            </div>         
          </div>
        </div>
        <div className='row mt-20'>
          <div className='col-8'>
            <p>At the heart of Hyderabad’s technological revolution, HITEC City is the IT hub of the city. A stark contrast to the historical monuments and sites, this is a city within a city for all working in the huge array of IT companies here.</p>
          </div>
        </div>
      </div>      
    </div>


    </div>
  )
}
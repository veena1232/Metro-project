import {React} from 'react';
import ikea from './Images/ikea.webp'
import loc from './Images/loc.png'
import amb from './Images/amb.jpg'
import delo from './Images/deloitte.jpg'
import dlf from './Images/dlf.jpg'
import msp from './Images/mindspace.jpg'
import '../styles/places.css'
import logo2 from "../components/Images/logo2.png"
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Raydurg(){
  return(
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo2} alt="Logo" width={50} height={50} />
          </a>
          <h3 id="title" className="col-8 col-md-12">Y<span className="title-span">our</span> Metro</h3>
          
        </div>
      </nav>

      <div className='row ml-40 mt-100 br-5'>
      <i class="cis-location-pin"></i>
      <div className='col-2 ml-20 br-5'><img src={amb} alt='ikea' width={220} height={170}></img></div>
      <div className='col-9 bg-lavender'>
        <div className='row'>
          <div className='col-1 mt-3'>
            <FaMapMarkerAlt  size={30} color=""/>    
          </div>
          <div className='col-4 mt-2'>
            <h2>AMB MALL</h2>
          </div>
        </div>
        <div className='row mt-20'>
          <div className='col-11'>
            <p>Mahesh Babu’s son Gautam Ghattamaneni was spotted at Amb theatres along with his friends on Wednesday. The video of his visit to his father’s cinema hall quickly went viral on social media. Since then, Mahesh’s theatre has become the talk of the town and in this write-up, we will tell you more about it.</p>
          </div>
        </div>
      </div>      
    </div>

    <div className='row mt-30'>
      <div className='col-2 ml-20'><img src={ikea} alt='ikea' width={220} height={170}></img></div>
      <div className='col-9 bg-blue'>
        <div className='row'>
          <div className='col-1 mt-3'>
            <FaMapMarkerAlt  size={30} color=""/>         
          </div>
          <div className='col-4 mt-2'>
            <h2>IKEA</h2>
          </div>
        </div>
        <div className='row mt-20'>
          <div className='col-8'>
            <p>At the heart of Hyderabad’s technological revolution, HITEC City is the IT hub of the city. A stark contrast to the historical monuments and sites, this is a city within a city for all working in the huge array of IT companies here.</p>
          </div>
        </div>
      </div>      
    </div>

    <div className='row mt-30'>
      <div className='col-2 ml-20'><img src={delo} alt='ikea' width={220} height={170}></img></div>
      <div className='col-9 bg-orange'>
        <div className='row'>
          <div className='col-1 mt-3'>
          <FaMapMarkerAlt  size={30} color=""/>   
          </div>
          <div className='col-4 mt-2'>
            <h2>Deloitte Towers</h2>
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
      <div className='col-2 ml-20'><img src={dlf} alt='ikea' width={220} height={170}></img></div>
      <div className='col-9 bg-grey'>
        <div className='row'>
          <div className='col-1 mt-3'>
          <FaMapMarkerAlt  size={30} color=""/>          
          </div>
          <div className='col-4 mt-2'>
            <h2>DLF</h2>
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
      <div className='col-2 ml-20'><img src={msp} alt='ikea' width={220} height={170}></img></div>
      <div className='col-9 bg-redgit'>
        <div className='row'>
          <div className='col-1 mt-3'>
          <FaMapMarkerAlt  size={30} color=""/>           
          </div>
          <div className='col-4 mt-2'>
            <h2>Mindspace</h2>
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
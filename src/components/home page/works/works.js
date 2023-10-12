import React from 'react';
import './works.css';
import orang from '../../../assets/orang.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTittle'>
            Komentar Pelanggan
        </h2>
        < div className='worksImgs'>
          <div className='group1'>
            <div className='title'>
              <img className='worksimg' src={orang} alt=''/>
              <h2 className='usnTitle'>Username Pelanggan</h2>
            </div>
          <p className='clientReview'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem diam, semper sit amet volutpat eget, venenatis sed eros. Etiam massa magna, malesuada a lorem vel, varius bibendum turpis. Maecenas ultricies ut leo vel laoreet. Sed ac maximus nibh. Cras sit amet molestie nisl, a tempor est. Curabitur id tellus erat</p>
          </div>

            <div className="group2">
              <div className="title">
          <img className='worksimg' src={orang} alt=''/>
          <h2 className='usnTitle'>Username Pelanggan</h2>
          </div>
          <p className='clientReview'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem diam, semper sit amet volutpat eget, venenatis sed eros. Etiam massa magna, malesuada a lorem vel, varius bibendum turpis. Maecenas ultricies ut leo vel laoreet. Sed ac maximus nibh. Cras sit amet molestie nisl, a tempor est. Curabitur id tellus erat</p>
          </div>
          <div className="group3">
            <div className="title">
          <img className='worksimg' src={orang} alt=''/>
          <h2 className='usnTitle'>Username Pelanggan</h2>
          </div>
          <p className='clientReview'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem diam, semper sit amet volutpat eget, venenatis sed eros. Etiam massa magna, malesuada a lorem vel, varius bibendum turpis. Maecenas ultricies ut leo vel laoreet. Sed ac maximus nibh. Cras sit amet molestie nisl, a tempor est. Curabitur id tellus erat</p>
          </div>
        </div>
        <button className='worksBtn'>See  more</button> 
    </section>
  )
}

export default Works
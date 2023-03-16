import React from 'react';
import './projects.css';
import Works from './Works';

function Projects() {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most Recent Works</span>


       
            <div className="work_container">
                <div className="work_card">
                    <a href='' className='project-name'><h2 className='work_title'>Asset Management App</h2></a>
                </div>

                <div className="work_card">
                    <a href='' className='project-name'><h2 className='work_title'>Top 20 Trending Movies App</h2></a>
                </div>

                <div className="work_card">
                    <a href='https://github.com/sasanthi65/traveling-website'className='project-name' target={'_blank'}>
                        <h2 className='work_title'> Traveling Website</h2>
                    </a>
                </div>

                <div className="work_card">
                    <a  href='' className='project-name'><h2 className='work_title'>ATM for bank transactions</h2></a>
                </div>

                <div className="work_card">
                    <a  href='' className='project-name'><h2 className='work_title'>Guessing Game</h2></a>
                </div>

                <div className="work_card">
                    <a  href='' className='project-name'><h2 className='work_title'>Point of Sales Software</h2></a>
                </div>
            </div>

    </section>

    
  )
}

export default Projects


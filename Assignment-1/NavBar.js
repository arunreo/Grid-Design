import React from 'react'


export default function NavBar() {
    return (
        <nav>
            <div className='left'>
                <div className='logo-Section'>
                    <div>EDYODA </div>
                    <p>Stories</p>
                </div>
                <div className='explore_section'>
                    <p>Explore categories <i className='fa fa-angle-down'></i> </p>
                </div>
            </div>
            <div className='right'>
                <div className="text">
                    <p>EdYoda is free learning and knowledge <br />
                        sharing platform for techies</p>
                </div>
                <div className="btn">
                    <button>Go to Main webSite</button>
                </div>
            </div>
          <i className='fa fa-bars'></i>
        </nav>
    )
}
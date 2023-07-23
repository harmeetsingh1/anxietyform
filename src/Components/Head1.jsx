import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Head1() {
  return (
    <div className=''>
        <Navbar className='nav1'>
        <Container className='flex flex-row justify-content-center h-52 p-24'>
          <Navbar.Brand href="#home">
            <img src="/Assets/ezgif.com-webp-to-png.png" alt="broken-image" className='h-28 m-3  p-1 flex flex-row justify-content-center'/>
          </Navbar.Brand>
          <Navbar.Brand >
            <img src="https://anxiety-meter-quiz.web.app/positive-text.png" alt="broken-image1" className='h-20 m-2 p-1 flex flex-row justify-content-center'/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Head1
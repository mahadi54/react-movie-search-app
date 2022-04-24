import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'

function Header({input, setInput, movies, setMovies}) {
  const search_api=  'https://api.themoviedb.org/3/search/movie?&api_key=9e08110b66f194cb5fd50c3f6c7364a8&query=';
  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch(search_api+input)
        .then( res => res.json())
        .then(data2 => setMovies(data2.results))
        setInput('')


  }
  const handleChange = (e)=>{
    setInput(e.target.value)

  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">React-Movie-Search</Navbar.Brand>
      <Nav className="me-auto">

       
      </Nav>
      <Nav>
        <form onSubmit={handleSubmit}>
          <input placeholder='Search' className='px-2 py-1 text-gray-700 focus:shadow-outline focus:bg-blue-100 bg-gray-200 rounded' onChange={handleChange} type='search' value={input} />
        </form>
      </Nav>
    </Container>
  </Navbar>

  )
}

export default Header
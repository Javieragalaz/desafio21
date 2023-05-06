
import Nav from 'react-bootstrap/Nav';

function NavBar() {
    return (
        <div>

            <nav className='align-middle bg-danger bg-opacity-50 p-4 d-flex'>

                <Nav.Item className=''>
                    <Nav.Link className=' m-3 fs-4 text-white text-decoration-none' href='/'> 🏠 Home </Nav.Link>
                </Nav.Item>

                <Nav.Item className=''>
                    <Nav.Link className=' m-3 fs-4 text-white text-decoration-none' href='/contacto'> 📩 Contacto </Nav.Link>
                </Nav.Item>
                
                <Nav.Item className='ms-auto'>
                    <Nav.Link className=' m-3 fs-3 text-white texte-decoration-none'>Happy Cake 🍰</Nav.Link>
                </Nav.Item>

            </nav>

        </div>
    );
}

export default NavBar;


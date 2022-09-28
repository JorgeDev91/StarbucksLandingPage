
import logo from '../../Images/logo.png';

export const Navbar = () => {



  return (
    <>
        <nav className='navbar navbar-expand-lg mt-3'>
            <div className='container'>
                <div className='row w-100'>

                    <div className='col-auto me-auto'>
                        <img className='img-fluid' src={logo} alt="Starbucks-logo" />
                    </div>

                    <div className='col-auto mt-sm-4'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        
                        <div className='collapse navbar-collapse ' id='navigationBar'>
                            <ul className='navbar-nav justify-items-end'>
                                <li className='nav-item'><a className='nav-link' href="#Home">Home</a></li>
                                <li className='nav-item'><a className='nav-link' href="#Menu">Menu</a></li>
                                <li className='nav-item'><a className='nav-link' href="#New">What's New</a></li>
                                <li className='nav-item'><a className='nav-link' href="#Contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    </>
  );
};

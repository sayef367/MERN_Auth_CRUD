
export default function Nav() {
  const logger = false;

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          MERN CRUD
        </a>
        <div>
          {
            logger ? 
            <button type="button" className="btn btn-dark rounded-pill">
              <i className="bi bi-box-arrow-in-right" /> Login
            </button>
            :
            <button type="button" className="btn btn-dark rounded-pill">
              <i className="bi bi-box-arrow-in-left" /> Logout
            </button>
          }
        </div>
      </div>
    </nav>
  )
}

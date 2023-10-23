import NewNote from "./newNote"

export default function NoteTop() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center pt-4 pb-3 bg-body-secondary rounded-3">
        <h2 className="text-center mb-4 fw-bold text-dark">MERN CRUD NOTE APP</h2>
        <div className="col-lg-4 col-md-10 col-sm-10 mb-3">
          <form>
            <input 
              className="form-control form-control-lg me-2 border border-dark bg-body-secondary" 
              type="search" 
              placeholder="Search note title" />
          </form>
        </div>
        <div className="col-lg-4 col-md-10 col-sm-10 mb-3">
          <div className="d-grid gap-2" data-bs-toggle="modal" data-bs-target="#exampleModalNewNote">
            <button type="button" 
              className="btn btn-outline-dark btn-lg">
              <i className="bi bi-file-earmark-plus" /> New Note
            </button>
          </div>
        </div>

        {/* add new note */}
        <NewNote />
      </div>
    </div>
    
  )
}

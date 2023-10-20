import NoteTop from "./components/noteTop"
import DeleteModel from "./components/deleteModel"

export default function Index() {
  return (
    <div className="container">
      <NoteTop />
      
      <div className="row mt-4 justify-content-md-center">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" >
          <div className="card shadow" 
            data-bs-toggle="modal" data-bs-target="#exampleModalView">
            <div className="card-body bg-body-secondary">
              <h6 className="card-title">Card One</h6>
              <hr />
              <p className="card-text textSize">This is my First note</p>
              <button type="button" 
                className="btn btn-outline-dark btn-sm me-1" 
                data-bs-toggle="modal" data-bs-target="#exampleModal" 
                ><i className="bi bi-pencil-square" /> 
              </button>
              <button type="button" 
                className="btn btn-outline-dark btn-sm"
                data-bs-toggle="modal" data-bs-target="#exampleModalDelete"
                ><i className="bi bi-trash" />
              </button>
            </div>
          </div>
        </div>
        {/* if note is empty */}
        {/* {(empty === true) ? <p className="text-center">Empty Note</p> : ''} */}

        {/* View modal */}
        {/* <ViewModel title={title} content={content}/> */}

        {/* <!-- Delete Modal --> */}
        <DeleteModel />  {/* deleteId={modeNoteId} */}

        {/* <!-- Update Modal --> */}
        {/* <div className="modal fade" id="exampleModal" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Note</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="col-form-label">Title</label>
                    <input type="text" className="form-control" id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Content</label>
                    <textarea className="form-control" id="content"
                      value={content}
                      style={{ height: '150px' }}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal"
                  ><i className="bi bi-x-circle-fill" />
                </button>
                <button type="submit" className="btn btn-outline-dark"
                  onClick={() => updateNote(noteId)}
                  ><i className="bi bi-check-circle-fill" />
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Footer bar */}
      <div className="container bg-body-secondary rounded-3  fixed-bottom">
        <p className="text-center pt-3">© 2023 All Rights Reserved. Developed by Md Sayeful Islam</p>
      </div>
    </div>
  )
}

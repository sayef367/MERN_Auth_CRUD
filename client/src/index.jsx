import NoteTop from "./components/noteTop"

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
        
      </div>

      {/* Footer bar */}
      <div className="container bg-body-secondary rounded-3  fixed-bottom">
        <p className="text-center pt-3">© 2023 All Rights Reserved. Developed by Md Sayeful Islam</p>
      </div>
    </div>
  )
}

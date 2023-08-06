import React from 'react'

interface TokenExpiredProps{
    showModal:boolean,
    counter:number,
    extendSession:()=>void,
    closeSession:()=>void
}

const ExtendSesionModal:React.FC<TokenExpiredProps> = ({showModal,counter,extendSession,closeSession}:TokenExpiredProps) => {
    return (


        <div className={`modal fade ${showModal && 'show'}`} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true"
            style={{ display: showModal? 'block':'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        el modal se cerrara en {counter}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeSession}>Logout</button>
                        <button type="button" className="btn btn-primary"   onClick={extendSession}>Extend Session</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtendSesionModal

{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}
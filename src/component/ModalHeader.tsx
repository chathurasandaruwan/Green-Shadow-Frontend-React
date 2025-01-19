export function ModalHeader(props:any) {
    return (
        <div className="modal-header custModalHeader">
            <h5 className="modal-title" id={props.id}>{props.children}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={props.closeBtnOnAction}></button>
        </div>
    );
}
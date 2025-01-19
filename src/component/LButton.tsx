export function LButton(props:any) {
    return (
        <div className="col-md-4 ">
            <button type="button" id={props.id} className="selectBtnSet btn"
                onClick={props.btnAction}>
                <i className={props.icon} aria-hidden="true"></i> {props.children}
            </button>

        </div>
    );
}
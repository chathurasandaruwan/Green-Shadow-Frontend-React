export function Button(props:any) {
    return (
        <button
            type="button"
            id="btnSave"
            className={props.style}
            onClick={props.btnOnAction}
        >
            {props.children}
        </button>
    );
}
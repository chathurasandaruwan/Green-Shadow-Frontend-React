export function Button(props:any) {
    return (
        <button
            type="button"
            id={props.id}
            className={props.style}
            onClick={props.btnOnAction}
        >
            {props.children}
        </button>
    );
}
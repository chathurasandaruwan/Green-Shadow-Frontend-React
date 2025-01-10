export function InputText(props:any) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.children}</label>
            <input
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                className="form-control"
                required
                value={props.item}
                disabled={props.disable}
                onChange={(e) => props.setItems(e.target.value)}
            />
        </div>
    );
}
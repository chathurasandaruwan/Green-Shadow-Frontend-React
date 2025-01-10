export function InputText(props:any) {
    return (
        <div className="form-group">
            <label id="Co-name-label" htmlFor="commonNameTxt">{props.children}</label>
            <input
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                className="form-control"
                required
                value={props.item}
                onChange={(e) => props.setItems(e.target.value)}
            />
        </div>
    );
}
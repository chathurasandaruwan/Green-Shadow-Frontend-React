export function InputAddress(props:any) {
    return (
        <input
            type="text"
            className="form-control"
            id={props.id}
            placeholder={props.placeholder}
            value={props.item}
            onChange={(e) => props.setItems(e.target.value)}
        />
    );
}
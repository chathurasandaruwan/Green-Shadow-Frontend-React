export function Select(props:any) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.children}</label>
            <select
                id={props.id}
                className="form-control"
                required
                value={props.value}
                onChange={(e) => props.setItems(e.target.value)}
            >
                <option value="" disabled hidden >Select {props.children}</option>
                {props.options.map((item: any) => (
                    <option key={item.value} value={item.value}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}
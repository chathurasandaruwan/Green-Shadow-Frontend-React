export function Table(props:any) {
    return (
        <div className={props.firstDivClass}>
            <div className={props.secondDivClass}>
                <table id={props.id} className={props.tableClass}>
                    <thead className={props.theadClass}>
                    <tr>
                        {props.headers.map((header:string, index:number) => (
                            <th key={index} scope="col">
                                {header}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                        {props.tbody}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export function OneColTable(props:any) {
    return (
        <div className="col-md-4 ">
            <table id={props.id} className=" text-center">
                <thead>
                <tr>
                    <th scope="col">{props.children}</th>
                </tr>
                </thead>
                <tbody>
                    {props.tbody}
                </tbody>
            </table>
        </div>
    );
}
export function DashboardCard(props:any) {
    return (
        <div className="col-lg-3 col-md-3">
            <div className="card p-2">
                <h1>{props.h1text}</h1>
                <p>{props.children}</p>
            </div>
        </div>
    );
}
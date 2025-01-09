export function Header(props: any, children: string) {
    return (
        <header className="header animatedBg rounded-4 shadow-lg">
            <h1 id="title" className="text-center">{props.children} Manage</h1>
            <p id="description" className="text-center">
                Please use this form to fill out your {props.children} details.
            </p>
        </header>
    );
}
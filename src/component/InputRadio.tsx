export function InputRadio(prop:any) {
    const handleSeasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        prop.setSelectedSeason(value);
    };
    return (
        <div className="custom-control custom-radio custom-control-inline">
            <input
                type="radio"
                id={prop.id}
                name={prop.name}
                value={prop.value}
                className="custom-control-input"
                checked={prop.selectedSeason === prop.value}
                onChange={handleSeasonChange}
            />
            <label className="custom-control-label"
                   htmlFor={prop.id}>{prop.children}</label>
        </div>
    );
}
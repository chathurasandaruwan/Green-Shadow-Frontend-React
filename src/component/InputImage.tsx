export function InputImage(props:any) {
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    props.setPreviewSrc(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="form-group form-control-file">
            <label htmlFor={props.id}>{props.children} Image</label>
            {props.previewSrc && <img id="previewImage" src={props.previewSrc} alt="Preview"/>}
            <input
                type="file"
                id={props.id}
                className="form-control"
                required
                ref={props.fileInputRef}
                onChange={handleImageChange}
            />
        </div>
    );
}
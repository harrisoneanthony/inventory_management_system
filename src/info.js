function Info(){
    const title = "This is my title"
    const showTitle = true;

if(showTitle){

    return (
        <div>
        <h1>{showTitle ? title : ""}</h1>
        <p>Mannage your stuff.</p>
    </div>
    );
    } else {
        return <p>empty</p>
    }
}

export default Info

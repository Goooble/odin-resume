function DisplayHidden({data, id, setOpen}){
    return (
        <div onClick={()=>setOpen(id)} className={"display-hidden-"+id}>
            <h4>{data.degree[id][0]}</h4>
        </div>
    )
}

export default DisplayHidden;
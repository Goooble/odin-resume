import DegreeEdit from "./DegreeEdit"
function EducationEdit({data, setData}){
    const degree = [];
    for(const key in data.degree){
        degree.push(<DegreeEdit key={key} data={data} setData={setData} id={key}></DegreeEdit>)
    }
    return (
        <>
        {degree}
        </>
    )
}

export default EducationEdit
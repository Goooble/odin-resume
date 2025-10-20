import DegreeEdit from "./DegreeEdit"
function EducationEdit({data, setData}){
    return (
        <>
        <DegreeEdit data={data} setData={setData} id={0}></DegreeEdit>
        <DegreeEdit data={data} setData={setData} id={1}></DegreeEdit>
        </>
    )
}

export default EducationEdit
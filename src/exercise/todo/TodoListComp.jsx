function TodoListComp(props){
    console.log("props",props)
    return (
        <>
        <div> task list :</div>
        <ul>{props.list.map((lis,key)=>(
            <li>{lis}</li>
        ))}</ul>
        </>
        
    )
}

export default TodoListComp
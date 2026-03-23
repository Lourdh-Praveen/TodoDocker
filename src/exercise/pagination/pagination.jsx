function PaginationComp(){

    const imageFaker=[
        {id:1,url:"https://picsum.photos/seed/picsum/200/300"},
        {id:2,url:"https://picsum.photos/seed/picsum/200/300"}
    ]
    return (
        <div>
            <h1>hello page</h1>
            <img src={imageFaker[0].url}/>
            <img src={imageFaker[1].url}/>
        </div>
    )
}

export default PaginationComp;
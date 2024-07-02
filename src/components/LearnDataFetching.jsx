async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
   

    return res.jason()
}

const LearnDataFetching = async() => {
    const data = await getData()
    console.log("Data:", data);
  return (
    <>

    {
        data.map((post,i)=>(
            <div key={id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <hr />

            </div>
        ))
    }

    </>
  )
}

export default LearnDataFetching
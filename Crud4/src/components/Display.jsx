export const Display=({datas,deleteUser})=>{
    return(
        <>


  <div className="container mt-5">

    <h2 className="text-center mb-4">
      Student Data Table
    </h2>

    <table className="table table-bordered table-striped text-center">

      <thead className="table-dark">

        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>

      </thead>

      <tbody>

  {
    datas.map((data, index) => (

      <tr key={index}>

        <td>{index + 1}</td>
        <td>{data.user}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>

        <td>
          <button className="btn btn-danger" onClick={()=>{deleteUser(index)}}>
            Delete
          </button>
        </td>

      </tr>

    ))
  }

</tbody>

     
         

    </table>

  </div>

        </>
    )
}
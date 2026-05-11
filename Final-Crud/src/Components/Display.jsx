export const Display = ({ students,deleteStudent,editStudent }) => {

  return (

    <div className="mt-5">

      <table className="table table-bordered table-striped text-center">

        <thead className="table-dark">

          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action
            </th>
            
          </tr>

        </thead>

        <tbody>

          {
            students.length>0 ?
            students.map((data, index) => (

              <tr key={index}>

                <td>{index + 1}</td>
                <td>{data.user}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                    <button onClick={()=>editStudent(index)}>Edit</button>
                    <button onClick={()=>deleteStudent(index)}>Delete</button>
                </td>

              </tr>

            ))
            :
            <tr>
                <td colSpan={5}>No Data Found</td>
            </tr>
          }

        </tbody>

      </table>

    </div>
  );
};
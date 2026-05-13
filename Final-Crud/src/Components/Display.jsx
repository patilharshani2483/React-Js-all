export const Display = ({ students, deleteStudent, editStudent, search, setSearch }) => {

  return (

    <div className="mt-5">

      <table className="table table-bordered table-striped text-center">

        <thead className="table-dark">

          <input
            type="text"
            placeholder="Search Student"
            className="form-control mb-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

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
            students.length > 0 ?

              students.map((data, index) => (

                <tr key={index}>

                  <td>{index + 1}</td>
                  <td>{data.user}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>

                  <td>

                    <button
                      className="btn btn-warning me-2"
                      onClick={() => editStudent(index)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteStudent(index)}
                    >
                      Delete
                    </button>

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
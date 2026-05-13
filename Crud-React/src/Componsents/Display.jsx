export const Display = ({
  datas,
  deleteUser,
  editStudent,
  search,
  setSearch,
}) => {

  return (
    <>
      <div className="container mt-5">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search Student..."
          className="form-control form-control-lg mb-4 shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {
          datas.length === 0 ? (

            <div className="alert alert-danger text-center fw-bold fs-4">

              No Students Data Found

            </div>

          ) : (

            <div className="table-responsive">

              <table className="table table-hover table-bordered shadow">

                <thead className="table-dark text-center">

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
                    datas.map((user, index) => (

                      <tr key={index} className="text-center align-middle">

                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>

                        <td>

                          <button
                            className="btn btn-danger btn-sm me-2"
                            onClick={() => deleteUser(index)}
                          >
                            Delete
                          </button>

                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => editStudent(index)}
                          >
                            Edit
                          </button>

                        </td>

                      </tr>

                    ))
                  }

                </tbody>

              </table>

            </div>

          )
        }

      </div>
    </>
  );
};
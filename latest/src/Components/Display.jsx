export const Display = ({
  users,
  deleteUser,
  editUser,
  search,
  setSearch
}) => {

  return (
    <>

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search User..."
        className="form-control mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered table-striped text-center">

        <thead className="table-dark">

          <tr>
            <th>No</th>
            <th>User</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {
            users.length > 0 ? (

              users.map((user, index) => (

                <tr key={index}>

                  <td>{index + 1}</td>
                  <td>{user.user}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>

                  <td>

                    {/* DELETE */}
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => deleteUser(index)}
                    >
                      Delete
                    </button>

                    {/* EDIT */}
                    <button
                      className="btn btn-success"
                      onClick={() => editUser(index)}
                    >
                      Edit
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="text-danger"
                >
                  No Data Found
                </td>

              </tr>

            )
          }

        </tbody>

      </table>

    </>
  );

};
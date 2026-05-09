export const Display = ({ users,deleteUser }) => {

  return (
    <>
      <div className="container mt-5">

        <table className="table table-bordered table-hover text-center">

          <thead className="table-dark">

            <tr>
              <th>No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>

          </thead>

          <tbody>

            {
              users.map((user, index) => (

                <tr key={index}>

                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={()=>deleteUser(index)}>Delete</button>
                  </td>
                  <td>
                    <button onClick={()=>EditUser(index)}>Edit</button>
                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>
    </>
  );
};
export const Display = ({ users=[],addUser,deleteUser}) => {

  return (
    <>
      <table border="1">

        <thead>
          <tr>

            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>

          </tr>
        </thead>

        <tbody>

          {
            users.map((user, index) => (

              <tr key={index}>

                <td>{index + 1}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.phone}</td>


                <td>
                
                  <button onClick={()=>deleteUser(index)}>
                        Delete

                    </button>


                </td>

              </tr>

            ))
          }

        </tbody>

      </table>
    </>
  );
};
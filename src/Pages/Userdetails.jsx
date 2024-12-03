import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";

function Userdetails() {
  const data = [
    {
      id: "Shashank",
      username: "schikoti",
      email: "emily.johnson@x.dummyjson.com",
      firstName: "Emily",
      lastName: "Johnson",
      gender: "Male",
      image: "https://dummyjson.com/icon/emilys/128",
    },
  ];

  const colmns = [
    { header: "ID", accessor: "id" },
    { header: "UserName", accessor: "username" },
    { header: "Email", accessor: "email" },
    { header: "FirstName", accessor: "firstName" },
    { header: "LastName", accessor: "lastName" },
    { header: "Gender", accessor: "gender" },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <h1>React Table Example</h1>
      <Table data={data} columns={colmns}></Table>
    </div>
  );
}

export default Userdetails;

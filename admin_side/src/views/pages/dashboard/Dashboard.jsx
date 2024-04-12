import http from "../../../api/http";

const Dashboard = () => {

  const Logout = async () => {
    try {
        await http.delete('/admin-logout');
        window.location.href = '/';
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
     <div>dashboard</div>
     <button onClick={Logout}>Logout</button>
    </>
  )
}

export default Dashboard
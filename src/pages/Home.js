import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { getUsers } from "../services/axios";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await getUsers();
    console.log(users?.data?.data);
    setUsers(users?.data?.data || []);
  };
  return (
    <div className="App">
      <Appbar />
      <Content name={"Home"} description="Lorem Ipsum">
        <Link to="/profile">
          <Button>to profile</Button>
        </Link>
        <ul>
          {users.map((item) => {
            return <li>{item.first_name}</li>;
          })}
        </ul>
      </Content>
      <Footer />
    </div>
  );
}

export default Home;

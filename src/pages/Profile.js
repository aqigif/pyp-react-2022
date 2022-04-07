import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Appbar />
      <Content name={"Profile"} description="Lorem Ipsum" />
      <Button onClick={() => navigate("/")}>Back To Home</Button>
      <Footer />
    </div>
  );
}

export default Profile;

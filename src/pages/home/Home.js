// import {Link} from 'react-router-dom';
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import "../home/Home.css";
import { BiLogOut } from "react-icons/bi";
import { AddBill } from "../../component/addBill/AddBill";
// import { BillProvider } from "../../Context/BillProvider";
import { BillList } from "../../component/billList/BillList";
import BillTotal from "../../component/BillTotal/BillTotal";
import BillOptions from "../../component/BillOption/BillOptions";
import EditBills from "../../component/EditBills/EditBills";
import { BillContext } from "../../Context/BillProvider";
import { useContext, useState } from "react";

function Home() {
  const logout = () => {
    localStorage.removeItem("auth");
  };

  // modal
  const [show, setShow] = useState(false);

  const { editModeEnabled } = useContext(BillContext);

  const data = localStorage.getItem("auth");
  const id = JSON.parse(data);
  return (
    <>
      <div>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">PettyCash</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">{id.email}</a>
              </Navbar.Text>
              <Nav.Link href="login">
                {" "}
                <button onClick={logout}>
                  {" "}
                  <BiLogOut />
                </button>
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="Home">
        <div className="pettycash-container">
          <Button variant="primary" onClick={() => setShow(true)}>
            PettyCash
          </Button>

          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                PETTYCASH MANAGEMENT
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {editModeEnabled ? (
                <EditBills />
              ) : (
                <span>
                  <BillOptions />
                  <AddBill />
                  <BillTotal />
                  <BillList />
                </span>
              )}
            </Modal.Body>
          </Modal>

          {/* {editModeEnabled ? (
            <EditBills />
          ) : (
            <span>
              <BillOptions />
              <AddBill />
              <BillTotal />
              <BillList />
            </span>
          )} */}
        </div>
      </div>
    </>
  );
}

export default Home;

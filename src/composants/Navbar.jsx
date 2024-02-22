import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import ModalAddNote from "./ModalAddNote";

export default function Navbar() {
  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">NoteMe</MDBNavbarBrand>

          <MDBNavbarLink active aria-current="page" href="#">
            <ModalAddNote />
          </MDBNavbarLink>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

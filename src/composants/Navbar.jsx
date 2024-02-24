import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import ModalAddNote from "./ModalAddNote";
import { useState } from "react";

export default function Navbar() {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">NoteMe</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavSecond(!openNavSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>{" "}
          <MDBCollapse navbar open={openNavSecond}>
            <MDBNavbarNav></MDBNavbarNav>
            <MDBNavbarLink active aria-current="page" href="#">
              <ModalAddNote />
            </MDBNavbarLink>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState } from "react";

export default function ModalAddNote() {
  const [centralModal, setCentralModal] = useState(false);

  const toggleOpen = () => setCentralModal(!centralModal);

  return (
    <>
      <MDBBtn color="dark" onClick={toggleOpen}>
        Note +
      </MDBBtn>
      <MDBModal open={centralModal} setOpen={setCentralModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBInput type="texte" label="Descritpion"></MDBInput>
              <MDBInput type="texte" label="Note Titre"></MDBInput>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>

            <MDBModalFooter>
              <MDBBtn color="light" onClick={toggleOpen}>
                Annuler
              </MDBBtn>
              <MDBBtn type="submit" color="dark">
                Enregistrer la note
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

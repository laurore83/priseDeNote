import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { useState } from "react";

export default function ModalDeleteNote({ onDelete }) {
  const [centralModal, setCentralModal] = useState(false);

  const toggleOpen = () => setCentralModal(!centralModal);

  const handleDelete = () => {
    onDelete(); // Appeler la fonction onDelete pour supprimer la note
    toggleOpen(); // Fermer le modal après la suppression
  };

  return (
    <>
      <MDBBtn color="dark" onClick={toggleOpen}>
        Supprimer
      </MDBBtn>
      <MDBModal open={centralModal} setOpen={setCentralModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Etes vous sûre de vouloir supprimer cette note ?
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="light" onClick={toggleOpen}>
                Annuler
              </MDBBtn>
              <MDBBtn type="submit" color="dark" onClick={handleDelete}>
                Confirmer
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

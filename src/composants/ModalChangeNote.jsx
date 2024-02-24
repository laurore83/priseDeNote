import PropTypes from "prop-types";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { useState } from "react";

export default function ModalChangeNote({
  titre,
  description,
  onChange,
  indexNote,
}) {
  const [centralModal, setCentralModal] = useState(false);
  const [titres, setTitre] = useState(titre);
  const [descriptions, setDescription] = useState(description);

  const toggleOpen = () => setCentralModal(!centralModal);

  const handleSubmit = () => {
    alert(" Note modifiée avec succès.");
    // // Stockage des valeurs dans localStorage
    // localStorage.setItem("description", description);
    // localStorage.setItem("titre", titre);

    // alert("Données sauvegardées localement.");

    onChange(indexNote, descriptions, titres);
    toggleOpen(); // Fermer le modal après la suppression
    // Rafraîchir la page
    window.location.reload();
  };
  // onChange(indexNote); // Appeler la fonction onChange pour modifier la note
  // toggleOpen(); // Fermer le modal après la suppression

  return (
    <>
      <MDBBtn color="dark" onClick={toggleOpen}>
        Modifier
      </MDBBtn>

      <MDBModal open={centralModal} setOpen={setCentralModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <form onSubmit={handleSubmit}>
              <MDBModalHeader>
                <MDBBtn
                  type="button"
                  className="btn-close"
                  color="none"
                  onClick={toggleOpen}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                {" "}
                <MDBInput
                  type="texte"
                  value={titres}
                  onChange={(e) => setTitre(e.target.value)}
                ></MDBInput>
                <MDBInput
                  type="texte"
                  value={descriptions}
                  onChange={(e) => setDescription(e.target.value)}
                ></MDBInput>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="light" type="button" onClick={toggleOpen}>
                  Annuler
                </MDBBtn>
                <MDBBtn type="submit" color="dark">
                  Enregistrer la note
                </MDBBtn>
              </MDBModalFooter>
            </form>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
ModalChangeNote.propTypes = {
  titre: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
  indexNote: PropTypes.number,
};

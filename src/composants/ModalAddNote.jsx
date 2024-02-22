import { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";

export default function ModalAddNote() {
  const [centralModal, setCentralModal] = useState(false);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  const toggleOpen = () => setCentralModal(!centralModal);

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Stockage des valeurs dans localStorage
    localStorage.setItem("description", description);
    localStorage.setItem("titre", titre);

    alert("Données sauvegardées localement.");

    // Effacer les champs après la sauvegarde
    setDescription("");
    setTitre("");
  };
  return (
    <>
      <MDBBtn color="dark" onClick={toggleOpen}>
        Note +
      </MDBBtn>
      <MDBModal open={centralModal} setOpen={setCentralModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <form onSubmit={handleSubmit}>
              <MDBModalHeader>
                {/* <MDBInput
                  wrapperClass="mb-4"
                  textarea
                  id="form4Example3"
                  rows={4}
                  label="Message"
                /> */}
                <MDBInput
                  type="texte"
                  id="description"
                  label="Descritpion"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></MDBInput>
                <MDBInput
                  type="texte"
                  id="titre"
                  label="Note Titre"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                ></MDBInput>
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
            </form>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

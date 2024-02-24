import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import ModalChangeNote from "./ModalChangeNote";
import ModalDeleteNote from "./ModalDeleteNote";
import { useEffect, useState } from "react";

export default function Note() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Récupérer les notes depuis localStorage
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Fonction pour supprimer une note
  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1); // Supprimer la note du tableau
    setNotes(updatedNotes); // Mettre à jour les notes
    // Mettre à jour le localStorage
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };
  // const [titre, setTitre] = useState("");
  // const [description, setDescription] = useState("");

  // useEffect(() => {
  //   // Récupérer les données de localStorage lorsque le composant est monté
  //   const savedTitre = localStorage.getItem("titre");
  //   const savedDescription = localStorage.getItem("description");

  //   if (savedTitre && savedDescription) {
  //     setTitre(savedTitre);
  //     setDescription(savedDescription);
  //   }
  // }, []); // Le tableau vide [] assure que useEffect ne s'exécute qu'une fois
  return (
    <>
      {notes.map((note, index) => (
        <div key={index} className="card-container">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>{note.titre}</MDBCardTitle>
              <MDBCardText>{note.description}</MDBCardText>
              <div className="cardBtn">
                <ModalChangeNote />
                <ModalDeleteNote onDelete={handleDeleteNote} />
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </>
  );
}

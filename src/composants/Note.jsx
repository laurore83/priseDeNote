import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import ModalChangeNote from "./ModalChangeNote";
import ModalDeleteNote from "./ModalDeleteNote";

export default function Note() {
  return (
    <div className="card-container">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </MDBCardText>
          <div className="cardBtn">
            <ModalChangeNote />
            <ModalDeleteNote />
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

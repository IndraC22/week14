import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import image from "../assets/taylor.webp";

interface ArtistCardProps {
  title: string;
  artist: string;
  image: string;
  onEdit: () => void;
  delete: (index: number) => void;
  index: number;
}

function ArtistCard(props: ArtistCardProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.artist}
        </Card.Text>
        <Button variant="primary" onClick={props.onEdit}>Edit</Button>
        <Button variant="danger"onClick={()=>props.delete(props.index)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default ArtistCard;
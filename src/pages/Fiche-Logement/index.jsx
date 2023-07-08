import { useParams } from "react-router-dom";

function FicheLogement() {
  const { idLogement } = useParams();
  //ici faire un fetch du fichier json avec l'idLogement
  //ensuite on fera l'affichage

  return <div> test </div>;
}

export default FicheLogement;

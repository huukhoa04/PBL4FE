import '../assets/css/TagCard.css'


export default function TagCard(props) {
    return(
      <div className="tag__card league-spartan-semibold fs__small-1">
        {props.name}
      </div>
    );
}
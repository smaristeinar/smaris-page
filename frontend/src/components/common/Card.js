export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
        <img class="project-image"src={props.props.image.url} alt="" srcset="" />
      <div className="project-content">
        <h1>{props.props.title}</h1>
        <p>{props.props.content}</p>
      </div>
    </div>
  );
}

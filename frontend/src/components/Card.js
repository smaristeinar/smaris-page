export default function Card(props) {
  console.log(props);
  return (
    <div className="flex flex-col w-60 text-xs">
      <img
        width="400px"
        height="200px"
        src={props.props.image.url}
        alt=""
        srcset=""
      />
      <div>
        <h1 className="text-xl">{props.props.title}</h1>
        <p>{props.props.content}</p>
      </div>
    </div>
  );
}

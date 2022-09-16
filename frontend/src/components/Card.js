export default function Card(props) {
  console.log(props);
  return (
    <div className=" flex flex-col pb-6  text-xs lg:flex-row items-center lg:items-start">
      <img
        src={props.props.image.url}
        alt=""
        srcset=""
        className=" rounded-md shadow-xl max-w-full h-auto flex-grow lg:max-w-lg lg:max-h-60 lg:mt-11 "
      />
      <div className=" p-6 rounded-l-md flex-grow flex flex-col h-full items-start lg:pt-0">
        <h2 className="text-xl font-bold pt-1 pb-3 lg:pt-0">
          {props.props.title}
        </h2>
        <p className="text-lg md:max-w-lg">{props.props.content}</p>
      </div>
    </div>
  );
}

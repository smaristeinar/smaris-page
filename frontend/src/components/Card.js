import Scocials from "./socials";

export default function Card(props) {
  console.log(props);
  return (
    <div className=" flex flex-col pb-6 pl-2 pr-2 text-xs lg:flex-row items-center lg:items-start">
      <img
        src={props.props.image.url}
        className=" rounded-md shadow-xl max-w-full h-auto flex-grow lg:max-w-lg lg:max-h-60 lg:mt-11 "
      />
      <div className=" p-6 rounded-l-md flex-grow flex flex-col h-full items-start lg:pt-0">
        <h2 className="text-xl font-bold pt-1 pb-3 lg:pt-0">
          {props.props.title}
        </h2>
        <p className="text-lg md:max-w-lg">{props.props.content}</p>
        <Scocials links={props.props.links} />
        <div className="flex flex-wrap w-full gap-2 pt-2">
          {props.props.tags.map(tag => {
            return (<p className="bg-indigo-500 min-w-fit max-w-fit flex-1 rounded-md pl-2 pr-2 text-gray-100 text-sm" key={tag}>{tag}</p>)
          })}
        </div>
      </div>
    </div>

  );
}

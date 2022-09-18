export default function Button(props) {
  return (
    <button className="p-2 pl-5 pr-5 z-0 transition-colors duration-700 bg-indigo-500 hover:bg-indigo-900 text-gray-100 text-lg rounded-lg">
      {props.content}
    </button>

  );
}

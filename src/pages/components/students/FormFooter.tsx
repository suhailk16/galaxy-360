export default () => {
  return (
    <div className="py-sm px-md  bg-bgPrim ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row  items-center cursor-pointer">
          <img src="/icons/back.svg" alt="Back Button" />
          <span className="font-medium text-sm text-blue-500 ml-3">Back</span>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-gray-500 text-sm mr-4">
            Changes are saved automatically.
          </span>
          <button
            type="button"
            className="inline-flex items-center justify-center px-6 py-3 w-80 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

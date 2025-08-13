export default function CenterDiv() {
  return (
    <div>
      <h2 className="text-2xl">Standard</h2>
      <div className="flex bg-gray-200 p-3 mb-6">
        <div className="w-24 h-24 bg-red-500"></div>
        <div className="w-24 h-24 bg-blue-500"></div>
        <div className="w-24 h-24 bg-green-500"></div>
        <div className="w-24 h-24 bg-yellow-500"></div>
      </div>

      <h2 className="text-2xl">Justify Content</h2>
      <div className="flex justify-between bg-gray-200 p-4 mb-6">
        <div className="w-16 h-16 bg-red-500"></div>
        <div className="w-16 h-16 bg-blue-500"></div>
        <div className="w-16 h-16 bg-green-500"></div>
      </div>

      <h2 className="text-2xl">Align Items</h2>
      <div className="flex items-end bg-gray-200 p-4 mb-6 h-32">
        <div className="w-16 h-8 bg-red-500"></div>
        <div className="w-16 h-16 bg-blue-500"></div>
        <div className="w-16 h-24 bg-green-500"></div>
      </div>

      <h2 className="text-2xl">Wrapping</h2>
      <div className="flex flex-wrap bg-gray-200 p-4 mb-6">
        <div className="w-32 h-16 bg-red-500 m-1"></div>
        <div className="w-32 h-16 bg-blue-500 m-1"></div>
        <div className="w-32 h-16 bg-green-500 m-1"></div>
        <div className="w-32 h-16 bg-yellow-500 m-1"></div>
      </div>

      <h2 className="text-2xl">Flex Grow</h2>
      <div className="flex bg-gray-200 p-4 mb-6">
        <div className="flex-grow bg-red-500 h-16 mr-2"></div>
        <div className="flex-grow bg-blue-500 h-16 mr-2"></div>
        <div className="flex-grow bg-green-500 h-16"></div>
      </div>

    </div>
  );
}

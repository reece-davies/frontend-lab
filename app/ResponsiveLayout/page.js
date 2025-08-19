export default function ResponsiveLayout() {
  return (
    <div className="flex flex-col sm:flex-row gap-4"> 
      <div className="w-full sm:w-1/2 bg-red-200">Left</div>
      <div className="w-full sm:w-1/2 bg-blue-200">Right</div>
    </div>
  );
}

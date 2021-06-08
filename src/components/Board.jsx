export default function Board({ children }) {
  return (
    <div className="shadow container mx-auto p-4 sm:max-w-xsfull content-center">
      {children}
    </div>
  );
}

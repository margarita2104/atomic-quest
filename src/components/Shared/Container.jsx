const Container = ({ children }) => {
  return (
    <div className="flex flex-col items-center max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
      {children}
    </div>
  );
};

export default Container;

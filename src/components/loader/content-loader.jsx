const ContentLoader = () => {
  const arr = new Array(9999).fill("selam");

  return arr.map((i, key) => (
    <div
      data-testid="content-loader"
      className="p-5 border
  text-transparent select-none bg-gray-100 animate-pulse"
    >
      <div>x</div>
      <div>x</div>
    </div>
  ));
};

export default ContentLoader;

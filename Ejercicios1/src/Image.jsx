const Image = ({ src, alt, width, description }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={src} alt={alt} width={width} />
      <p>{description}</p>
    </div>
  );
};

export default Image;

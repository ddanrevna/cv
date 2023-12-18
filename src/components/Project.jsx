const Project = ({ title, description, linkToImg }) => {
  return (
    <div className="mb-4 px-5 py-2 bg-sky-100 bg-opacity-30 ">
      <div className="">
        <h4 className="text-lg font-bold text-left text-gray-800">{title}</h4>
        <img src={linkToImg} />
        <p className="text-gray-600 text-left">{description}</p>
      </div>
    </div>
  );
};

export default Project;

import "../App.css";
const Clients = () => {
  return (
    <div className="client-page">
      <h1 className="clientheader">Client work</h1>
      <p className="cintro">
        Here are a couple of the sites I have made for my freelance clients :)
      </p>
      <div className="cprojects">
        <ul>
          <li className="project-list">
            <a href="https://live-dbainmedia.pantheonsite.io">DbainMedia</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Clients;

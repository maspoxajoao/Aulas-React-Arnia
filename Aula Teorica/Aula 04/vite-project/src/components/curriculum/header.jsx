import icon from "../../assets/imagens";

const Header = () => {
  return (
    <div className="header">
      <div className="item">
        <div className="icon">
          <img src={icon.enveloper} alt="icone" />
        </div>
        <div className="text">dempslia@gmail.com</div>
      </div>
      <div className="item">
        <div className="icon">
          <div>
            <img src={icon.conexao} alt="icone" />
          </div>
        </div>
        <div className="text">www.civie/liamdem.com</div>
      </div>
      <div className="item">
        <div className="icon">
          <img src={icon.celular} alt="icone" />
        </div>
        <div className="text">+366 010 101 001</div>
      </div>
    </div>
  );
};

export default Header;

import "./Header.css";

function Header({ text, textp }) {
  return (
    <>
      <h1 className="header">{text} </h1>
      <p className="textu">{textp}</p>
    </>
  );
}

export default Header;

import Button from "./Button";
import logo from "../assets/logo.png";

const links = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "Roadmap" },
  { href: "#research", title: "Tokenomics" },
  { href: "#features", title: "Features" },
  { href: "#whitepaper", title: "Whitepaper" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <a href="/" className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <nav className="nav-links">
            {links.map((link) => (
              <a key={link.title} href={link.href} className="nav-link">
                {link.title}
              </a>
            ))}
          </nav>
          <div className="header-btn">
            <Button className="presale-btn">Join Presale</Button>
            <Button>Connect Wallet</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

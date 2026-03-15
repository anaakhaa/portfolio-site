export default function Header() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary">
        <a className="logo" href="#top">
          AI<span>folio</span>
        </a>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

import Link from "next/link"

function Navbar() {
  return (
    <>
    <header>
    <nav>
      <ul className="navbar">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/page/about">About Us</Link>
      </li>
      <li>
        <Link href="/page/contact">Contact Us</Link>
      </li>
      <li>
        <Link href="/product">Product</Link>
      </li>
      <li>
        <Link href="/collection">Collection</Link>
      </li>
    </ul>
    </nav>
    </header>
    </>
  )
}

export default Navbar
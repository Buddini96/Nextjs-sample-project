import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <ul>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.link}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/products" className={styles.link}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              Contact us
            </Link>
          </li>
        </ul>

        <Link
          href="https://nextjs.org/"
          target="_blank"
          id={styles.specialLink}
        >
          Next Js Store
        </Link>
        <div>
          <Link href="/products/vegies">Vegies page</Link>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et a
            facilis animi. Quas quisquam, beatae delectus aut sint assumenda
            dignissimos doloribus quae inventore commodi, accusantium hic
            corrupti voluptas praesentium laborum.
          </p>
        </div>
      </div>
    </>
  );
}

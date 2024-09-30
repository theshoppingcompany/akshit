import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Company Logo" className={styles.logoImage} />
        <span className={styles.companyName}>LAVA</span>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/profile">My Profile</Link>
      </nav>
    </header>
  );
};

export default Header;

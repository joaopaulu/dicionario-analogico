import styles from './styles.module.scss';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Dicionário Analógico</h1>
        <nav>
          <Link href="/">Início</Link>
          <Link href="/apresentacao">Apresentação</Link>
        </nav>
      </div>
    </header>
  );
}

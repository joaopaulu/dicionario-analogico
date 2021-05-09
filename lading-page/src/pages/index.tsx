import { SubscribeButton } from 'components/SubscribeButton';
import Head from 'next/head';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Dicionario Analógico</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>Parte Alfabética</h1>
          <h1>
            <span>Parte Analógica</span>
          </h1>
          <p>
            <span>
              Você quer consultar o dicionário que possibilite encontrar
              palavras desconhecidas para o apendizado do Português do Brasil
              como segunda Língua?
            </span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

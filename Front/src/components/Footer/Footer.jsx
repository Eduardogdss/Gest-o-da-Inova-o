import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.info}>
        @ 2021 Bruno e Eduardo S.N.A.
      </p>
      <p className={styles.info}>
        Created and Developed by
        <a className={styles.reference} target='_blank' rel='noreferrer' href="https://github.com/Eduardogdss/Gest-o-da-Inova-o/">{" Bruno Dantas e Eduardo Guedes"}</a>
      </p>
      <p className={styles.info}>
        Quer dar seu testemunho sobre uma IC?
        <a className={styles.reference} href="https://forms.gle/xjTgmcN39kq9DUzu9">{" Clique Aqui"}</a>
      </p>
    </footer>
  );
}

export default Footer;

import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://rvnts.site" target="_blank" rel="noopener">
          rvnts.site
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:ventusmn@gmail.com"
          target="_blank"
          rel="noopener"
        >
          ventusmn@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/vtscode" target="_blank" rel="noopener">
          vtscode
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/riventusaritonang/"
          target="_blank"
          rel="noopener"
        >
          riventusaritonang
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://www.twitter.com/riventusaha"
          target="_blank"
          rel="noopener"
        >
          riventusaha
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{' '}
        <a
          href="https://www.instagram.com/rhivent"
          target="_blank"
          rel="noopener"
        >
          insta
        </a>
        ;
      </p>
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;polywork:{' '}
        <a
          href="https://www.polywork.com/nitinranganath"
          target="_blank"
          rel="noopener"
        >
          nitinranganath
        </a>
        ;
      </p> */}
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;telegram:{' '}
        <a href="https://t.me/username110111" target="_blank" rel="noopener">
          username110111
        </a>
        ;
      </p>
      {/* <p className={styles.line}>
        &nbsp;&nbsp;codepen:{' '}
        <a href="https://codepen.io/itsnitinr" target="_blank" rel="noopener">
          nitinranganath
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;codesandbox:{' '}
        <a
          href="https://codesandbox.io/u/itsnitinr"
          target="_blank"
          rel="noopener"
        >
          itsnitinr
        </a>
        ;
      </p> */}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;

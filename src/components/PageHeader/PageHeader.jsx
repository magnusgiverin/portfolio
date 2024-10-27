import styles from './PageHeader.module.css';

const PageHeader = () => (
    <header className={`w-full flex items-center justify-center p-4 ${styles.header}`}>
        <div className={styles.line}></div> {/* Left line */}
        <h1>{'{ MAGNUS }'}</h1>
        <div className={styles.line}></div> {/* Right line */}
    </header>
);

export default PageHeader;

import styles from './PageHeader.module.css'

const PageHeader = () => (
    <header className={`w-full flex items-center justify-center p-4 ${styles.header}`}>
        <h1>{'{ MAGNUS }'}</h1>
    </header>
)

export default PageHeader;
import styles from './PageHeader.module.css'

const PageHeader = () => (
    <header className={`w-full flex items-center justify-between p-4 ${styles.header}`}>
        <button onClick={() => console.log("Navigate to About")}>ABOUT</button>
        <h1>{'{ MAGNUS }'}</h1>
        <button onClick={() => console.log("Navigate to Projects")}>PROJECTS</button>
    </header>
)

export default PageHeader;
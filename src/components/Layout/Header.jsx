import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.brandContainer}>
                <h1 className={styles.title}>Che, No Solo Arepas</h1>
                <p className={styles.slogan}>
                    "Tequeños, pepitos y el verdadero bajón venezolano."
                </p>
            </div>
        </header>
    );
}
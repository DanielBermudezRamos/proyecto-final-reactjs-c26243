import styles from './Footer.module.css';
import { EquipoContainer } from '../Equipo/EquipoContainer/EquipoContainer';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div >
                <div className={styles.brandSection}>
                    <h3 className={styles.title}>Che, No Solo Arepas</h3>
                    <p className={styles.slogan}>
                        "Tequeños, pepitos y el verdadero bajón venezolano."
                    </p>
                </div>

                <div >
                    <h4>El Equipo Detrás del Bajón 🛵</h4>
                    <EquipoContainer />
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>© {new Date().getFullYear()} Che, No Solo Arepas — Hecho con ❤️ y mucho queso.</p>
            </div>
        </footer>
    );
}
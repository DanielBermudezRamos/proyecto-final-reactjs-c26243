import styles from './EquipoList.module.css'
import { TarjetaEquipo } from '../TarjetaEquipo/TarjetaEquipo'

export function EquipoList({ equipos }) {
    return (
        <div className={styles.grillaItems}>
            {equipos.map(integrante => (
                <TarjetaEquipo key={integrante.id} {...integrante} />
            ))}
        </div>
    );
}
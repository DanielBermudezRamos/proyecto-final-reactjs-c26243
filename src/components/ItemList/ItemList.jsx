import { Item } from '../Item/Item';
import styles from './ItemList.module.css';

export function ItemList({ productos }) {
    return (
        <div className={styles.grillaItems}>
            {productos.map(prod => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
}
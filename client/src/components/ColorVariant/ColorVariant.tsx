import { colorsDict } from '../../dictionaries/colorsDict';
import styles from './ColorVariant.module.css';

const ColorVariant = ({ color }: { color: string }) => {
  return (
    <li
      className={styles.сolorVariant}
      style={{ backgroundColor: `${color}` }}
    >
      {/* TODO: Словарь */}
      <span className="visually-hidden">{colorsDict[color]}</span>
    </li>
  );
};

export default ColorVariant;

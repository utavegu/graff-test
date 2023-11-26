import classNames from 'classnames';
import { colorsDict } from '../../dictionaries/colorsDict';
import styles from './ColorVariant.module.css';

const ColorVariant = ({ color }: { color: string }) => {
  return (
    <li
      className={classNames(styles.сolorVariant, color === 'white' && styles.сolorVariantWhite)}
      style={{ backgroundColor: `${color}` }}
    >
      <span className="visually-hidden">{colorsDict[color]}</span>
    </li>
  );
};

export default ColorVariant;

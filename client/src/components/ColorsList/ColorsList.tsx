import ColorVariant from '../ColorVariant/ColorVariant';
import { IProduct } from '../../typespaces/interfaces/IProduct';
import styles from './ColorsList.module.css';

const ColorsList = ({ colors }: { colors: IProduct['colors'] }) => {
  return (
    <ul className={styles.colorsList}>
      {colors?.map((color, i) => (
        <ColorVariant
          key={i}
          color={color}
        />
      ))}
    </ul>
  );
};

export default ColorsList;

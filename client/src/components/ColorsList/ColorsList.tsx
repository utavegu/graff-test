import classNames from 'classnames';
import ColorVariant from '../ColorVariant/ColorVariant';
import { IProduct } from '../../typespaces/interfaces/IProduct';
import styles from './ColorsList.module.css';

const ColorsList = ({ colors, className }: { colors: IProduct['colors']; className?: string }) => {
  return (
    <ul className={classNames(className, styles.colorsList)}>
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

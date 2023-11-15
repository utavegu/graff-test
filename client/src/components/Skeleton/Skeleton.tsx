import classnames from 'classnames';
import styles from './Skeleton.module.css';

const Skeleton = (): JSX.Element => {
  return (
    <li className={styles.listItem}>
      <div className={styles.imageBlock}>
        <div className={classnames([styles.imageDummy, styles.skeleton])}></div>
      </div>
      <div className={styles.textBlock}>
        <div className={classnames([styles.headingDummy, styles.skeleton])}></div>
        <div className={classnames([styles.contentDummy, styles.skeleton])}></div>
        <div className={classnames([styles.contentDummy, styles.skeleton])}></div>
        <div className={classnames([styles.contentDummy, styles.skeleton])}></div>
        <div className={classnames([styles.contentDummy, styles.skeleton])}></div>
      </div>
    </li>
  );
};

export default Skeleton;

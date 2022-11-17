import styles from './tabbar.module.scss';

export default function Tabber() {
  return <div className={styles.tabbar}>
    <div className={styles.tabbarItem}>user</div>
    <div className={styles.tabbarItem}>list</div>
    <div className={styles.tabbarItem}>more</div>
    <div className={styles.tabbarItem}>home</div>
  </div>;
}

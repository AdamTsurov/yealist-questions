import styles from './Keywords.module.scss'

const Keywords = ({keywords}) => {
  return (
    <div className={styles.keywords}>
      {keywords.map(word => (
        <p className={styles.keyword}>#{word}</p>
      ))}
    </div>
  );
};

export default Keywords;
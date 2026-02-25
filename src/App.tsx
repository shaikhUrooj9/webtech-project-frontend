import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.page}>
      <h1>Web Technologies I</h1>
      <p>Welcome 👋</p>

      <div className={styles.card}>
        <p>
          <strong>Name:</strong> Urooj Fatima
        </p>
        <p>
          <strong>Section:</strong> A/1
        </p>
        <p>
          <strong>Project:</strong> my-project-fronted
        </p>
      </div>
    </div>
  );
}

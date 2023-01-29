import styles from './styled.module.css';

export const ContactForm = () => {
  return (
    <form>
      <div className={styles.inputs}>
        <div className={styles.fild}>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder='Coloque seu nome'
            required
          />
        </div>

        <div className={styles.fild}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder='Coloque seu email'
            required
          />
        </div>
      </div>

      <div className={styles.textareaContainer}>
        <label>Mensagem</label>
        <textarea
          rows={7}
          className={styles.input}
          name="message"
          placeholder='Digite sua mensagem'
          required
        />
      </div>
    </form>
  )
}
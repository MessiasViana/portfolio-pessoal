import styles from './styled.module.css';

export const ContactForm = () => {
  return (
    <div className={styles.formArea}>
      <form action="https://formsubmit.co/contato@messiasdev.com.br" method='POST'>
        <div className={styles.inputs}>
          <input
            type="hidden"
            name="_next"
            value="https://messiasdev.com.br/sucesso"
          />

          <input
            type="hidden"
            name="_autoresponse"
            value="Obrigado pela mensagem, te retorno com a resposta logo logo..."
          />

          <div className={styles.fild}>
            <label>Nome</label>
            <input
              type="text"
              name="name"
              className={styles.input}
              placeholder='Coloque seu nome'
              required
              id={styles.nameInput}
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
      
        <div className={styles.submitArea}>
          <button type="submit" className={styles.submit}>Enviar</button>
        </div>
      </form>
    </div>
  )
}
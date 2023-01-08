import style from './form-container.module.scss'
export const FormContainer = ({ ...props }) => {
  return (
    <div className={style.form}>
      <div className={style.form_Content}>{props.children}</div>
      <div className={style.form_ImageContainer}>
        <img
          alt=''
          src={
            'https://img.freepik.com/premium-vector/people-hotel-concept-reception-lobby-interior-with-stuff-meeting-arabic-european-guests_87771-6056.jpg?w=2000'
          }
        />
      </div>
    </div>
  )
}

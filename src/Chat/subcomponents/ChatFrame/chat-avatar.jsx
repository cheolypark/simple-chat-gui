import styles from "./Chat.module.scss"

export default function Avatar({imgSource='https://res.cloudinary.com/duvaex4uc/image/upload/v1683490676/hwepwcxy7vxp7y6gltrp.webp'}) {
  return (
    <div className={styles.user_avtar}>
      <img src={imgSource} alt="AVATAR Image"/>
    </div>
  )
}



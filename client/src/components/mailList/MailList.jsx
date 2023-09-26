import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitel">!وفر وقتك ومالك
</h1>
      <span className="mailDesc">اشترك وسنرسل أفضل العروض إليك
</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="عنوان البريد الخاص بك"  className="inputEmail"/>
        <button>اشتراك</button>
      </div>
    </div>
  )
}

export default MailList
import style from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>Ash</div>
                <div className={style.dialog}>Gev</div>
                <div className={style.dialog}>Val</div>
                <div className={style.dialog}>Kar</div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>Hallow</div>
                <div className={style.message}>By</div>
            </div>
        </div>
    )
}

export default Dialogs;
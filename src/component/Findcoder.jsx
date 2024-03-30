import styale from"./fandcoder.module.css"
import Logo from "./Logo"
const Findcoder=()=>{
    return(
        <section id={styale.nav}>
            <article>
                <div className={styale.logo}>
                    <Logo/>
                </div>
                <div className={styale.menu}></div>
                <div className={styale.but}></div>

            </article>

        </section>
    )
}
export default Findcoder
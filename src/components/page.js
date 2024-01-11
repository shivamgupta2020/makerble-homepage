import Left from "./left";
import Mid from "./mid";
import Right from "./right";

const Page = () => {
    return(
        <div className="page" style={{backgroundColor:"#dadedf", height:"100vh", display: "flex"}}>
            <div className="left" style={{flex: "25", flexDirection:"column"}}>
                <Left/>
            </div>
            <div className="mid" style={{flex: "50", flexDirection:"column"}}>
                <Mid/>
            </div>
            <div className="right" style={{flex: "25", flexDirection:"column"}}>
                <Right/>
            </div>
        </div>
    );
}
export default Page;
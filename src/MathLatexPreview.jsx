import { memo} from "react";
import Mathjax from "./Main.js"
const MathLatexPreview =(props)=>{
    const {
        className="",
        style,
        math=""
    } =props;
    return (
        <div>
            <div 
            >
                <Mathjax
                    className={className}
                    style={style}
                    math={math}
                />
            </div>     
        </div>
    )
}

export default memo(MathLatexPreview);
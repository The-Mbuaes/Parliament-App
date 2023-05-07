import React, {useEffect, useRef} from 'react';
import lottie from "lottie-web";
import LoadingAnim from "../assets/animations/loading.json";


const Loading = (props) => {
    const animContainerLoading = useRef(),
    animRefLoading = useRef(null);

    useEffect(()=>{
        animRefLoading.current = lottie.loadAnimation({
            container: animContainerLoading.current,
            animationData: LoadingAnim,
            loop: true
        });
        animRefLoading.current.play();
    }, [])
    return (
        <div className="loading__container center-hrz" style={props.style}>
        <div ref={animContainerLoading} className="loading">
        </div>
    </div>
    )
}

export default Loading
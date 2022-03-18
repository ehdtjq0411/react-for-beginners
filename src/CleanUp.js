import {useState, useEffect} from "react";

function Hello(){
    // 컴포넌트 사라질 경우 실행되야하는 함수는 return 시킨다.
    useEffect(() => {
        console.log("create :) ");
        return () => {
            console.log("destroyed :(");
        }
    }, []);
    return <h1>Hello</h1>
}

function CleanUp(){
    const [showing, setShowing] = useState(false);
    const onClick = () => {
        return setShowing( (prev) => {
            return !prev;
        });
    }

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default CleanUp;
import ViewBox from "./components/PercentView";




export const App = () => {
    let num: number = 34;
    return(
        <>
        <ViewBox value={num} max={100} makeColor={(p) => `${{hsl(value)}}` }/>
        <ViewBox value={num} max={200} makeColor={(p) => "green"} />
        <ViewBox value={num} max={300} makeColor={(p) => "blue"} />
        </>
    )
    
};
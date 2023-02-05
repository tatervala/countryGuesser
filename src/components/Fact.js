const Fact = ({data}) => {
    const {flag, text} = data

    return (
        <div>
            <img src={flag} height={"300"} width={"500"} alt=""/>
            <p>{text}</p>

        </div>
    )
}
export default Fact
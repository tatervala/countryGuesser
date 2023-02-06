const Fact = ({data}) => {
    const {flag, text} = data
    const customStyle = {
        marginTop: 10
    }
    return (
        <div>
            <img style={customStyle} src={flag} height={"300"} width={"500"} alt=""/>
            <p>{text}</p>

        </div>
    )
}
export default Fact
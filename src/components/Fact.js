const Fact = ({data}) => {
    const {flag, text} = data

    return (
        <div>
            <img src={flag} height='150' width='300' alt=""/>
            <p>{text}</p>

        </div>
    )
}
export default Fact
const Fact = ({data}) => {
    const {flag, text} = data

    return (
        <div>
            <img src={flag} alt=""/>
            <p>{text}</p>

        </div>
    )
}
export default Fact
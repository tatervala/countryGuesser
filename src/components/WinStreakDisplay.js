const WinStreakDisplay = (props) => {
    if (props.winstreakCounter>=1) {
      return (
        <div>
          <p>Current winstreak at {props.winstreakCounter}.</p>
        </div>
      )
    }
  }
export default WinStreakDisplay
const Counter = (props) => {
  const styles = {
    color: props.value === 0 ? "black" : props.value > 0 ? "green" : "red",
  };

  return (
    <main>
      <h1>counter</h1>
      <span style={styles}>{props.value}</span>
      <div className="counter-btn">
        <button onClick={props.increase}>increase</button>
        <button onClick={props.reset}>reset</button>
        <button onClick={props.decrease}>decrease</button>
      </div>
    </main>
  );
};

export default Counter;

import '../../App.css';

export default function MyWeirdCounts(): JSX.Element {
  const doMath = () => {
    const obj1 = { x: 42, y: 99 };
    const obj2 = obj1; // obj1 and obj2 both reference the same object
    obj1.x += 1;
    obj2.y += 1;
    console.log(obj1.x, obj1.y);
    console.log(obj2.x, obj2.y); // prints the same thing since obj1 and obj2 are the same object
  };
  return (
    <div className="doMath">
      <button type="button" onClick={doMath}>
        {' '}
        do Math{' '}
      </button>
    </div>
  );
}

export default function List() {
  const CarsList = ["MAruti", "kia", "Hyundai", "Toyoto"];

  return (
    <>
      {CarsList.map((item) => {
        return <h1>{item}</h1>;
      })}
    </>
  );
}

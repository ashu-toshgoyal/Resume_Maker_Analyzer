import './List.css'
function List() {
  let item = ["New York", "USA", "Canada"];
  item = ['1','2']; // overwriting, so it becomes empty

  const getMessage = () => {
    if (item.length > 0) {
      return (
        <>
          <p>You have {item.length} Msg in the Inbox</p>
        </>
      );
    }
    return <p>No Msg</p>;
  };

  return (
    <>
      {getMessage()}
    </>
  );
}

export default List;

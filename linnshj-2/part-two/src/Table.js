function Table(props) {
  console.log(props.apiData);

  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // Write your code here:
    return (
      <table className="Table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Continent</th>
            <th>Population</th>
            <th>Population Growth</th>
          </tr>
        </thead>
        <tbody>
          {props.apiData.results.map((item, index) => (
            <tr key={index}>
              <td>{item.Country}</td>
              <td>{item.Continent}</td>
              <td>{item.Population}</td>
              <td>{item.PopulationGrowth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;

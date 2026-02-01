export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Pectisides and Fertilizers</h1>
      <p>Rysgally Dayhan web application</p>

      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", marginTop: 20 }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Type</th>
            <th>Active Ingredient</th>
            <th>Composition</th>
            <th>Firm</th>
            <th>Target</th>
            <th>Dose</th>
            <th>Volume</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Product</td>
            <td>Pesticide</td>
            <td>Example Ingredient</td>
            <td>Example composition</td>
            <td>Example Firm</td>
            <td>Insects / Diseases</td>
            <td>1 l/ha</td>
            <td>1 L</td>
            <td>Available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

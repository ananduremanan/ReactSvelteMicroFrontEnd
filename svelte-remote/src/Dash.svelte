<script>
  import { Grid } from "@grampro/svelte-block";
  import { dataSource } from "./grid/dataSource";

  const columns = [
    { field: "OrderID", width: "200", textAlign: "Right" },
    { field: "CustomerID", width: "100", filter: true },
    { field: "EmployeeID", width: "100", textAlign: "Right" },
    {
      field: "Freight",
      headerText: "Frieght",
      width: "200",
    },
    { field: "ShipCountry", width: "200" },
    { field: "ShipAddress", width: "150" },
  ];
</script>

<span class="text-sm"> DashBoard </span>
<hr class="mt-4 border-dotted mb-4" />

<Grid
  {columns}
  {dataSource}
  pageSettings={{ pageNumber: 10 }}
  enableSearch
  enableExcelExport
  enablePdfExport
/>

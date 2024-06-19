import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
let activeFilterArray = [];
export function handleApplyFilterHelper(event, columns, dataSource) {
    let workingDataSource = [...dataSource];
    let filterValue = event.detail.filterValue.toLowerCase();
    let filterCondition = event.detail.selected;
    let filterColumn = event.detail.columnHeader;
    // Add the new filter to activeFilterArray
    activeFilterArray.push({
        filterValue: filterValue,
        filterCondition: filterCondition,
        filterColumn: filterColumn
    });
    columns = columns.map((column) => {
        if (column.field === filterColumn) {
            return { ...column, isFilterActive: true, showFilterPopup: false };
        }
        return column;
    });
    // Apply all active filters
    activeFilterArray.forEach((filter) => {
        workingDataSource = dataSource.filter((item) => {
            let columnValue = item[filter.filterColumn].toString().toLowerCase();
            switch (filter.filterCondition) {
                case 'contains':
                    return columnValue.includes(filter.filterValue);
                case 'equals':
                    return columnValue === filter.filterValue;
                default:
                    return true;
            }
        });
    });
    return { columns, workingDataSource };
}
// Function For Clearing the Filter
export function clearFilterHelper(event, columns, dataSource) {
    let workingDataSource = [...dataSource];
    let filterColumn = event.detail.columnHeader;
    let hasActiveFilters = activeFilterArray.length > 0;
    activeFilterArray = activeFilterArray.filter((filter) => filter.filterColumn !== filterColumn);
    // Reset the isFilterActive and showFilterPopup flags for the cleared filter
    columns = columns.map((column) => {
        if (column.field === filterColumn) {
            return { ...column, isFilterActive: false, showFilterPopup: false };
        }
        return column;
    });
    // Reapply all active filters
    activeFilterArray.forEach((filter) => {
        workingDataSource = dataSource.filter((item) => {
            let columnValue = item[filter.filterColumn].toString().toLowerCase();
            switch (filter.filterCondition) {
                case 'contains':
                    return columnValue.includes(filter.filterValue);
                case 'equals':
                    return columnValue === filter.filterValue;
                default:
                    return true;
            }
        });
    });
    return { columns, workingDataSource, hasActiveFilters };
}
export function exportToExcelHelper(dataSource, columns, excelName) {
    // This will remove the column template.
    const templateRemovedColumn = columns.filter((column) => !column.template);
    const dataToExport = dataSource.map((row) => {
        const rowData = {};
        templateRemovedColumn.forEach((column) => {
            rowData[column.field] = row[column.field];
        });
        return rowData;
    });
    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `${excelName}.xlsx`);
}
export function exportToPDFHelper(dataSource, columns, pdfName) {
    const doc = new jsPDF();
    // This will remove the columns with template.
    const printableColumns = columns.filter((column) => !column.template);
    const dataToExport = dataSource.map((row) => {
        const rowData = {};
        printableColumns.forEach((column) => {
            rowData[column.field] = row[column.field];
        });
        return Object.values(rowData);
    });
    const columnNames = printableColumns.map((column) => column.field);
    doc.autoTable({
        head: [columnNames],
        body: dataToExport
    });
    doc.save(`${pdfName}.pdf`);
}

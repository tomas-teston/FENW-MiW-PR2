export class DataTableModel {
  constructor(headValues: String[], content: any[]) {
    this.headValues = headValues;
    this.content = content;
  }

  headValues: String[];
  content: any[];
}

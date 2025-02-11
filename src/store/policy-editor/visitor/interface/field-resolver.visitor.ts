import { GridFieldValue } from "../../../../component/policy-editor/controls/grid-field-value.type";

export interface FieldResolverVisitor {
  getBasicRows(): GridFieldValue[];
  getAdvancedRows(): GridFieldValue[];
  remove(): void;

  hasAdvancedRows: boolean;
}

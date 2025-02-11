import { get as _get, set as _set } from "lodash";
import { BaseVisitor } from "../interface/base.visitor";
import { FieldFactoryVisitor } from "../interface/field-factory.visitor";
import { policyEditorJsonVisit } from "../../policy-editor.actions";
import { defaultBlockingSettings } from "../../../../model/policy-editor.defaults.model";

export type BlockingSettingsFieldCreateProps = {
  name: string;
  alarm: boolean;
  block: boolean;
};

export class BlockingSettingsFieldFactory
  extends BaseVisitor
  implements FieldFactoryVisitor<BlockingSettingsFieldCreateProps>
{
  create(props: BlockingSettingsFieldCreateProps): void {
    const path = "policy.blocking-settings.violations";
    this.dispatch(
      policyEditorJsonVisit((currentJson) => {
        let violations = _get(currentJson, path);
        if (!violations) {
          _set(currentJson, path, [] as any);
          violations = _get(currentJson, path);
        }

        violations.push(
          defaultBlockingSettings(props.name, props.alarm, props.block)
        );
      })
    );
  }
}

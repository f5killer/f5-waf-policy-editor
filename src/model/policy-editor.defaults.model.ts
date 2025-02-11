import { OpenAPIFile } from "./policy-schema/policy";

export const defaultGeneralSettings = () => ({
  policy: {
    name: "policy_name",
    template: {
      name: "POLICY_TEMPLATE_NGINX_BASE",
    },
    applicationLanguage: "utf-8",
    enforcementMode: "blocking",
  },
});

export const defaultBlockingSettings = (
  name: string,
  alarm: boolean,
  block: boolean
) => ({
  name,
  alarm,
  block,
});

export const defaultMethods = () => ({
  name: "",
});

export const defaultUrls = (order: number) => ({
  name: "",
  type: "explicit",
  method: "*",
  protocol: "http",
  attackSignaturesCheck: true,
  metacharsOnUrlCheck: true,
  wildcardOrder: order,
});

export const defaultFileTypes = () => ({
  name: "",
  type: "explicit",
  allowed: true,
  checkUrlLength: true,
  urlLength: 2048,
  checkQueryStringLength: true,
  queryStringLength: 2048,
  checkPostDataLength: false,
  postDataLength: 4096,
  checkRequestLength: false,
  requestLength: 8192,
  responseCheck: false,
});

export const defaultHeaders = () => ({
  name: "",
  type: "explicit",
  decodeValueAsBase64: "enabled",
  htmlNormalization: true,
  mandatory: true,
  allowRepeatedOccurrences: false,
  checkSignatures: true,
});

export const defaultParameters = () => ({
  name: "",
  type: "wildcard",
  level: "global",
  parameterLocation: "any",
  valueType: "auto-detect",
  allowEmptyValue: true,
  checkMaxValueLength: false,
  allowRepeatedParameterName: true,
  sensitiveParameter: false,
  attackSignaturesCheck: true,
  checkMetachars: true,
  metacharsOnParameterValueCheck: true,
});

export const defaultOpenApi: () => OpenAPIFile = () => ({
  link: "",
});

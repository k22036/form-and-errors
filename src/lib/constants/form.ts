import type { FormField } from "../types/form";
import type { IdenticalKeyValue } from "../types/helper";

export const formFields: IdenticalKeyValue<FormField> = {
  name: "name",
  email: "email",
  inquiry: "inquiry",
};

// ラベルやinputのtypeなどの定義
export const fieldConfigs: Record<
  FormField,
  { label: string; type: "text" | "email" | "textarea" }
> = {
  name: { label: "名前", type: "text" },
  email: { label: "メールアドレス", type: "email" },
  inquiry: { label: "お問い合わせ内容", type: "textarea" },
};

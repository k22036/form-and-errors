// キーと値が必ず一致する型
export type IdenticalKeyValue<T extends string> = {
  [K in T]: K;
};

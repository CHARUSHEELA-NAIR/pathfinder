import Types "../types";
import List "mo:core/List";

mixin (resources : List.List<Types.CatalogResource>) {
  public query func getResources() : async [Types.CatalogResource] {
    resources.toArray();
  };
};

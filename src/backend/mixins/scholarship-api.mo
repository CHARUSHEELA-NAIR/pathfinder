import Types "../types";
import List "mo:core/List";

mixin (countries : List.List<Types.Country>) {
  public query func getCountries() : async [Types.Country] {
    countries.toArray();
  };

  public query func getCountryById(id : Text) : async ?Types.Country {
    countries.find(func(c) { c.id == id });
  };
};

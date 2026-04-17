import Types "../types";
import CareerLib "../lib/career";
import List "mo:core/List";

mixin (
  questions : List.List<Types.QuizQuestion>,
  careers : List.List<Types.Career>,
) {
  public query func getQuizQuestions() : async [Types.QuizQuestion] {
    questions.toArray();
  };

  public query func getCareerById(id : Text) : async ?Types.Career {
    careers.find(func(c) { c.id == id });
  };

  public query func getAllCareers() : async [Types.Career] {
    careers.toArray();
  };

  public query func getCareersByField(field : Text) : async [Types.Career] {
    careers.filter(func(c) { c.field == field }).toArray();
  };

  public query func matchCareers(answers : [Nat]) : async [Text] {
    CareerLib.matchCareers(answers, questions, careers);
  };
};

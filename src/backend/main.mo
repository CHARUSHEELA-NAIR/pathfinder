import CareerLib "lib/career";
import ScholarshipLib "lib/scholarship";
import ResourcesLib "lib/resources";
import CareerApi "mixins/career-api";
import ScholarshipApi "mixins/scholarship-api";
import ResourcesApi "mixins/resources-api";



actor {
  let questions = CareerLib.seedQuestions();
  let careers = CareerLib.seedCareers();
  let countries = ScholarshipLib.seedCountries();
  let resources = ResourcesLib.seedResources();

  include CareerApi(questions, careers);
  include ScholarshipApi(countries);
  include ResourcesApi(resources);
};

import Types "../types";
import List "mo:core/List";

module {
  public func seedResources() : List.List<Types.CatalogResource> {
    let resources = List.empty<Types.CatalogResource>();

    // Visual Records (YouTube channels)
    resources.add({
      title = "Y Combinator";
      url = "https://www.youtube.com/@ycombinator";
      description = "Startup advice, founder stories, and startup school lectures from the world's top startup accelerator. Essential for entrepreneurs.";
      category = "visualRecords";
    });
    resources.add({
      title = "Slidebean";
      url = "https://www.youtube.com/@slidebean";
      description = "In-depth case studies on why startups succeed and fail, pitch deck teardowns, and founder stories. Great for startup strategy.";
      category = "visualRecords";
    });
    resources.add({
      title = "Ali Abdaal";
      url = "https://www.youtube.com/@aliabdaal";
      description = "Productivity, career building, content creation, and personal finance tips from a doctor-turned-YouTuber. Perfect for students and early-career professionals.";
      category = "visualRecords";
    });
    resources.add({
      title = "Chris Do";
      url = "https://www.youtube.com/@ChrisDo";
      description = "Business of design, creative direction, and how to run a creative freelance or agency business. Essential for designers and creatives.";
      category = "visualRecords";
    });
    resources.add({
      title = "Flux Academy";
      url = "https://www.youtube.com/@FluxAcademy";
      description = "Web design, freelancing, and building a creative career. Practical tutorials on modern web design and client acquisition.";
      category = "visualRecords";
    });

    // Enterprise Basics (websites)
    resources.add({
      title = "Indie Hackers";
      url = "https://www.indiehackers.com/";
      description = "Community of founders building profitable internet businesses. Real revenue numbers, founder interviews, and tactical business-building advice.";
      category = "enterpriseBasics";
    });
    resources.add({
      title = "Product Hunt";
      url = "https://www.producthunt.com/";
      description = "Discover the latest startups, apps, and tech products. Great for product inspiration, trend spotting, and launching your own product.";
      category = "enterpriseBasics";
    });

    // Practice Grounds (communities)
    resources.add({
      title = "GitHub";
      url = "https://github.com/";
      description = "The world's largest code repository and developer community. Build your portfolio, contribute to open source, and collaborate on projects.";
      category = "practiceGrounds";
    });
    resources.add({
      title = "Kaggle";
      url = "https://www.kaggle.com/";
      description = "Data science competitions and community. Practice machine learning with real datasets and compete globally to build your portfolio.";
      category = "practiceGrounds";
    });
    resources.add({
      title = "freeCodeCamp";
      url = "https://www.freecodecamp.org/";
      description = "Free coding curriculum and community. Learn web development, data science, and more with hands-on projects and certifications.";
      category = "practiceGrounds";
    });

    resources;
  };
};

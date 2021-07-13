// Get the graph container HTML element.
const graphContainer = document.getElementById("graph-container");

// Instantiate the graph.
const gitgraph = GitgraphJS.createGitgraph(graphContainer, {
  author: "Ben de Tester <Ben.de.Tester@cfit.nl>",
  commitMessage: "nieuwe versie",
  template: GitgraphJS.templateExtend("metro", {
    colors: [
      "#00aac8",
      "#bc448c",
      "#1369af",
      "#529f45",
      "#1369af",
      "#c83737",
      "#f1ca13",
      "#5a3f8c",
    ],
    commit: {
      color: "#000000",
    },
  }),
});

const main = gitgraph.branch("main").commit("eerste versie");

const ontwikkel = main
  .branch("ontwikkel")
  .commit("creatie ontwikkel branch")
  .tag("v0.1");

ontwikkel.commit();
const feature = ontwikkel.branch("feature").commit("een goed idee");
const feature2 = feature.branch("feature.2").commit("een beter idee");
feature2.commit("Gelukt!").tag("Ben is awesome :P");
ontwikkel.merge(feature2);
ontwikkel.commit();
feature.commit("Blijvende verstoringen").tag("slecht idee");
main.merge(ontwikkel).tag("v0.2");
ontwikkel.commit();

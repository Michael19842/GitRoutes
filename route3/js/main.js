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

const main = gitgraph.branch("main");
main.commit("cfit.co.uk master script ").tag("v0.1");
const acceptatie = main.branch("acceptatie");
acceptatie.commit();
const ontwikkel = main.branch("ontwikkel");
ontwikkel.commit("sprint 1");
ontwikkel.commit("sprint 2");
ontwikkel.commit("sprint 3");
acceptatie.merge(ontwikkel);
ontwikkel.commit("sprint 4");
ontwikkel.commit("sprint 5");
acceptatie.merge(ontwikkel);
acceptatie.commit("release 2").tag("v0.2");
main.merge(acceptatie).tag("v3.0");

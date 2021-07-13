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

const develop = main.branch("develop");
develop.commit("toevoegen contactpagina");

const aFeature = develop.branch("chatbot");
aFeature
  .commit("chatbot features toegevoegd")
  .commit()
  .commit("chat *@#&!&* aangepast");

develop.merge(aFeature);
develop.commit("chatbot op contactpagina toegevoegd");

main.merge(develop).tag("v1.0");

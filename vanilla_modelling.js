(function() {
  let activate_button;
  Plugin.register('vanilla_modelling', {
    title: "Vanilla Modelling",
    author: "SBtree",
    description: "This converts Blockbench models into datapacks that add your models to vanilla minecraft with no resource packs!",
    icon: 'icon-player',
    version: '0.0.1',
    variant: 'both',
    onload() {
      activate_button = new Action('create_datapack', {
        name: "Create Datapack",
        description: "Put the model into a vanilla datapack",
        icon: 'icon-player',
        click: function() {
          console.log("Generating datapack")
        }
      })
    }
  })
})()

import yargs from "yargs"
import { copy, defaultCommand } from "./binCommands"

export default argsToInject => {
  // eslint-disable-next-line no-unused-expressions
  yargs(argsToInject)
    .usage("cpc [args]")
    .command(
      "copy <componentToBeCopiedPath> <newComponentName> <newComponentLocation>",
      "copy a component's structure using the arguments passed",
      yargsCmd => {
        yargsCmd
          .positional("componentToBeCopiedPath", {
            type: "string",
            describe: "path of the component that will be copied.",
          })
          .positional("newComponentName", {
            type: "string",
            describe: "the name of the new component.",
          })
          .positional("newComponentLocation", {
            type: "string",
            describe: "folder of the component that will be copied.",
          })
      },
      copy,
    )
    .command(
      "*",
      "copy a component's structure asking for the parameters",
      () => {},
      defaultCommand,
    )
    .alias("h", "help")
    .alias("v", "version")
    .help().argv
}

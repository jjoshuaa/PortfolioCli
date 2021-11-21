import React, { Component } from "react";
import { render, Box, Color, AppContext, Static } from "ink";
import SelectInput from "ink-select-input";
import packageJson from "./package.json";
import child_process from "child_process";
class Demo extends Component {
  render() {
    const items = Object.keys(packageJson.dependencies).map((commandName) => {
      return {
        label: commandName,
        value: commandName,
      };
    });
    return (
      <>
        <Static>
          <Box width={4} height={2}>
            <Color greenBright>npm run command selector!</Color>
          </Box>
        </Static>
 
        <AppContext.Consumer>
          {({ exit }) => (
            <SelectInput
              items={items}
              onSelect={({ value }) => {
                console.log("You have chosen me, Best of Luck");
                child_process.execSync(`npm start ${value}`, {
                  stdio: "inherit",
                });
                exit();
              }}
            />
          )}
        </AppContext.Consumer>
      </>
    );
  }
}
 
render(<Demo />);
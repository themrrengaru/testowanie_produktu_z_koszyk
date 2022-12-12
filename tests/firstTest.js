const { Builder, By, Key } = require("selenium-webdriver");
//var should = require("chai").should();

describe("adding first thing to cart", function () {
  it("successfully added a backpack", async function () {
    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("https://www.saucedemo.com/");

    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver
      .findElement(By.id("password"))
      .sendKeys("secret_sauce", Key.RETURN);
  });
});

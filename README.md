# Install web-extention in your browser

Stable version: **1.1.12**, [Firefox](https://addons.mozilla.org/en-US/firefox/addon/facebook-tracking-exposed/?src=userprofile) & [Chrome](https://chrome.google.com/webstore/detail/facebooktrackingexposed/fnknflppefckhjhecbfigfhlcbmcnmmi). You should read our [Privacy Statement](https://facebook.tracking.exposed/privacy-statement) or look the [latest explanatory video](https://media.ccc.de/v/SHA2017-127-the_quest_for_algorithm_diversity)

[![Build Status](https://travis-ci.org/tracking-exposed/web-extension.svg?branch=master)](https://travis-ci.org/tracking-exposed/web-extension)

# Intro
This is the source code for the **tracking-exposed** extension.
We use ECMAScript 2015, aka ES6, aka ECMAScript Harmony. The aim is to keep the
code modular, easy to test, and beautiful.


## Getting Started
Setting up the dev environment is super easy.


### Dependencies
This project requires Node 5+. Install [nvm](https://github.com/creationix/nvm) for easy version maintaining. Alternatively install Nodejs from a package, but make sure it's the right version and install npm as well for package management.  


### Set up your build system
The build system uses a simple `package.json` file to describe the tasks, you can check it out to find out the packages that we rely on to make this extension available or for troubleshooting.

To get started run:
```
npm install
npm test
npm start
```

About, the second line (`npm test`): Since keeping tests in sync with the Fb's changes is a costly process, but testing is cool, please use it and feel free to update them. 
By the way, testing is always a nice way to check if the installation succeeded.
If npm test fails, don't worry and try npm start nonetheless, it might be due to facebook frequent html structure changes or nodejs extensions incompatibility, please report it back to us if this is the case.  

`npm start` will build the application using `webpack` and watch for changes.

Keep `npm start` running in the background to take advantage of the autoreload.


### Set up your browser (for Chromium / Google Chrome)
To install the extension go to **settings**, select **extensions**, and enable
**Developer mode**. Click on **Load unpacked extension** and select the
`extension/build` directory contained in this repo.

### Set up your browser (for Firefox)
As standard practice, firefox doesn't allow unpacked extension to be loaded. However, it does allow developers to test unpacked extensions **temporarily**. To accomplish this just visit [about:debugging], click **Load Temporary Add-on** and select `extension/build` directory contained in this repo.

#### Note on autoreloading the extension
By running `npm start`, the extension will work in `DEVELOPMENT` mode. This
means that every time you reload `facebook.com`, the extension will automatically
reload itself using the `chrome.runtime.reload()` method.

Note that before we were using [Extension Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) to autoreload your extension every time a build succeeds. This dependency is no longer needed.


### Ready to go!
Visit [Facebook](https://www.facebook.com/) and open the dev tools. You should
see some logging messages.


### Extend fixtures

 * You've to install the package `tidy` the last version in ubuntu is not
   working (we'll update the comment when fixed), use
   http://binaries.html-tidy.org/
 * Copy the userContentWrapper Element
 * save in file.html

```
tidy -i -m -w 0 -utf8 file.html
```

# Thanks
[@sohkai](https://github.com/sohkai) for the amazing [js-reactor boilerplate](https://github.com/bigchaindb/js-reactor).

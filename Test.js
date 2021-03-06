//test.js
function TestRig() {
    var self = {};
    self.active = false;

    var screenSelect;
    var urlTextBox;
    self.init = function testRigInit(screenSetting) {
        console.log("test rig init");
        self.active = true;

        setTimeout(function () {
            GameDetails('', '', "de_deathcookin", '', '', "terrortown");
        }, 1000);
        var controlPanel = document.createElement("div");
        controlPanel.style.position = "absolute";
        controlPanel.style.zIndex = "999";
        controlPanel.style.top = "1em";
        controlPanel.style.right = "1em";
        controlPanel.style.backgroundColor = "#fff";
        controlPanel.style.color = "#000";
        controlPanel.style.fontSize = "2em";
        controlPanel.style.fontFamily = "Courier, monospace";
        controlPanel.style.border = "2px black solid";

        screenSelect = document.createElement("select");
        loadingScreenDirectory.forEach(function (bg, i) {
            var newOption = document.createElement("option");
            newOption.innerHTML = bg.credit + ":  " + bg.title;
            screenSelect.appendChild(newOption);
        });
        screenSelect.addEventListener("input", selectBackground);
        controlPanel.appendChild(screenSelect);

        var screenLinkGenerator = document.createElement("div");
        screenLinkGenerator.innerHTML = "URL to Screen:";
        screenLinkGenerator.style.display = "block";
        urlTextBox = document.createElement("input");
        screenLinkGenerator.appendChild(urlTextBox);
        controlPanel.appendChild(screenLinkGenerator);

        var imageQuickTest = document.createElement("div");
        imageQuickTest.innerHTML = "Quick Image test:";
        imageQuickTest.style.display = "block";
        var imgSrc = document.createElement("input");
        imageQuickTest.appendChild(imgSrc);
        var imgLoadbutton = document.createElement("button");
        imgLoadbutton.innerHTML = "Load";
        imageQuickTest.appendChild(imgLoadbutton);
        controlPanel.appendChild(imageQuickTest);

        var hideTest = document.createElement("button");
        hideTest.innerHTML = "Hide Test UI";
        hideTest.addEventListener("click", function(e){
            controlPanel.style.display = "none";
            e.preventDefault();
            setTimeout(function(){ //anti-bounce hackery
                function testUIReturn() {
                    controlPanel.style.display = "block";
                    document.body.removeEventListener("click", testUIReturn);
                }
                document.body.addEventListener("click", testUIReturn);
            }, 50);
        });
        controlPanel.appendChild(hideTest);

        document.body.appendChild(controlPanel);

        screenSelect.selectedIndex = screenSetting;
    }

    function selectBackground() {
        ScreenEngine.loadScreenIndex(screenSelect.selectedIndex);
        urlTextBox.value = window.location.href.split("?")[0] + "?test=1&screen=" + screenSelect.selectedIndex;
    }

    function quickTest() {
        ScreenEngine.setBackground("url('" + urlTextBox.value + "')");
    }

    return self;
};

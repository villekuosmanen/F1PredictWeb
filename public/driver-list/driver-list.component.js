angular
    .module('driverList')
    .component("driverList", {
        templateUrl: "driver-list/driver-list.template.html",
        controller: function DriversController($http) {
            var self = this;

            self.isMobile = false;
            var mq = window.matchMedia( "(max-width: 768px)" );
            console.log("Is mobile: " + mq.matches);
            if (mq.matches) {
                self.isMobile = true;
                self.expanded = true;
            }

            $http.get('driversDescribe.json').then(function (driverProfile) {
                var driversDict = {};
                for (var did in driverProfile.data) {
                    getColor(driverProfile.data[did]);
                    driversDict[did] = driverProfile.data[did];
                }

                $http.get('predictions.json').then(function (driverRes) {
                    //console.log(driversDict);
                    for (did in driverRes.data) {
                        driversDict[did].predictions = driverRes.data[did];
                    }

                    var driversArray = [];
                    for (did in driversDict) {
                        driversArray.push([did, driversDict[did]]);
                    }
                    driversArray.sort(function (a, b) {
                        if (a[1].constructor < b[1].constructor) {
                            return -1;
                        }
                        else if (a[1].constructor > b[1].constructor) {
                            return 1;
                        }
                        else return 0;
                    });
                    self.drivers = driversArray;
                });
            });
            this.rowClicked = function (driverTuple) {
                d3.select("#selectedDriver")
                    .text(driverTuple[1].name)
                    .style("color", driverTuple[1].color);
                removeSelections();
                d3.select('[id="' + driverTuple[0] + '"]').classed("selected", true);
                if (self.isMobile) {
                    console.log("Is expanded: " + self.expanded);
                    if (self.expanded) {
                        hideRows();
                    } else {
                        showAllRows();
                    }
                    self.expanded = !self.expanded;
                }
                changeData(driverTuple[1]);
            }
        }
    });

function removeSelections() {
    d3.selectAll(".selected").classed("selected", false);
}

function hideRows() {
    console.log(d3.selectAll(".driverListRow:not(.selected)"));
    d3.selectAll(".driverListRow:not(.selected)").style("display", "none");
}

function showAllRows() {
    d3.selectAll(".driverListRow").style("display", "table-row");
}

function getColor(driver) {
    if (driver.constructor === "Mercedes") {
        driver.color = "#00d2be";
    }
    else if (driver.constructor === "Ferrari") {
        driver.color = "#dc0000";
    }
    else if (driver.constructor === "Red Bull") {
        driver.color = "#00327d";
    }
    else if (driver.constructor === "Force India") {
        driver.color = "#f596c8";
    }
    else if (driver.constructor === "Williams") {
        driver.color = "#ffffff";
    }
    else if (driver.constructor === "Renault") {
        driver.color = "#fff500";
    }
    else if (driver.constructor === "Toro Rosso") {
        driver.color = "#0032ff";
    }
    else if (driver.constructor === "Haas F1 Team") {
        driver.color = "#5a5a5a";
    }
    else if (driver.constructor === "McLaren") {
        driver.color = "#ff8700";
    }
    else if (driver.constructor === "Sauber") {
        driver.color = "#9b0000";
    }
    else {
        //console.log(driver.constructor);
        throw Error();
    }
}
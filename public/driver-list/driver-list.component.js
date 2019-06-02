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

            //This concerns the fetching of data, and as such should probably not be in this component...
                //TODO refactor these into new components

            //Fetch index file, sort the years and races in it
            var indexFileName = 'data/index.json';
            var mostRecentId = null;
            var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
            $http.get(indexFileName).then(function (res)  {
                var years = Object.keys(res.data).sort(collator.compare);
                //For each year:
                console.log("Above loop" + years);
                for (i = 0; i < years.length; i++) {
                    var races = Object.keys(res.data[years[i]]).sort(collator.compare);
                    console.log(races);
                    //TODO add races to a list where user can select them
                    //Select most recent race.
                    console.log("In loop");
                    mostRecentId = races[races.length - 1];
                }
                var recentFileName = 'data/' + mostRecentId + '.json';
                $http.get(recentFileName).then(function (raceData) {
                    driverProfile = raceData.data["drivers"];

                    var driversArray = [];
                    for (var did in driverProfile) {
                        //Get used colour and add driver to data dictionary
                        getColor(driverProfile[did]);
                        driverProfile[did].predictions = raceData.data["predictions"][did];
                        driversArray.push([did, driverProfile[did]]);
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
        driver.color = "#1e41ff";
    }
    else if (driver.constructor === "Racing Point") {
        driver.color = "#f596c8";
    }
    else if (driver.constructor === "Williams") {
        driver.color = "#ffffff";
    }
    else if (driver.constructor === "Renault") {
        driver.color = "#fff500";
    }
    else if (driver.constructor === "Toro Rosso") {
        driver.color = "#469bff";
    }
    else if (driver.constructor === "Haas F1 Team") {
        driver.color = "#f0d787";
    }
    else if (driver.constructor === "McLaren") {
        driver.color = "#ff8700";
    }
    else if (driver.constructor === "Alfa Romeo") {
        driver.color = "#9b0000";
    }
    else {
        //console.log(driver.constructor);
        throw Error();
    }
}

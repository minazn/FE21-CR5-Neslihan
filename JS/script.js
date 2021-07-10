var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//preparation
var locations = [];
var restaurants = [];
var events = [];
//the name Location seems to be protected, that's why I chose Locations. Same for Events instead of Event
var Locations = /** @class */ (function () {
    function Locations(city, zip_code, addr, img, creation_date, timestamp, creation_city) {
        this.city = city;
        this.ZIP_code = zip_code;
        this.address = addr;
        this.image = img;
        this.timestamp = timestamp;
        this.as_date = new Date(creation_date + ", " + timestamp);
        this.creation_date = this.as_date.toLocaleDateString();
        this.creation_city = creation_city;
        locations.push(this);
    }
    //In real life I would not set the content of the paragraph like below, because every city would have
    // another description. So I would give another property "description" and add the content, when creating 
    //the object. I would take the lorep ipsum take for every property.
    //That's why I decided to place the lorem ipsum text right here, so that
    //I don't always have to copy the whole text for each new object.
    Locations.prototype.display = function () {
        var openDiv = "<div class=\"card col-xl-3 col-md-6 col-sm-12 text-center mt-5 cambodia\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title city\">" + this.city + "</h5>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n            Nunc facilisis posuere laoreet. Aliquam eget tincidunt purus. \n            Proin dictum arcu eu lacus maximus congue. Aenean a ante leo.  \n            Sed vehicula nec justo vel maximus. \n            Nullam sagittis lobortis urna, sed tincidunt ante viverra in.</p>\n        </div>\n        <img src=" + this.image + " alt=" + this.city + ">";
        return openDiv;
    };
    Locations.prototype.closeDiv = function () {
        return "<p class=\"card-text text\"><small class=\"text-muted\">" + this.creation_city + ", " + this.creation_date + ", " + this.timestamp + "</small></p></div></div>";
    };
    Locations.prototype.addLocation = function () {
        return this.display() + this.closeDiv();
    };
    return Locations;
}());
//creation of at least two Locations objects
new Locations("Vienna", 1010, "Karlsplatz 12", "../IMG/wien.jpg", "July 9, 2021", "20:37", "Vienna");
new Locations("Linz", 4020, "Landstraße 62", "../IMG/linz.jpg", "July 9, 2021", "16:19", "Vienna");
console.log(locations[0], locations[1]);
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zip_code, addr, img, creation_date, time, creation_city, name, tel, type, homepage) {
        var _this = _super.call(this, city, zip_code, addr, img, creation_date, time, creation_city) || this;
        _this.name = name;
        _this.telephone_nr = tel;
        _this.type_of_cuisine = type;
        _this.homepage = homepage;
        restaurants.push(_this);
        return _this;
    }
    //In real life I would not set the content of the paragraph like below, because every restaurant would have
    // another description. For dynamic solution, I could crate a table with type of cuisine, tel.nr and homepage. But
    //it does not look beautiful for me. That's why I decided to place the lorem ipsum text right here, so that
    //I don't always have to copy the whole text for each new object.
    //If i want to add an event, the div won't be closed here
    Restaurant.prototype.displayRestaurantWithEvent = function () {
        var card = "<div class=\"card-body pt-5\">\n        <h5 class=\"card-title\">" + this.name + "</h5>\n        <p class=\"card-text\">Nunc molestie dignissim interdum. Nunc pretium convallis nulla, non vulputate nisi \n        vehicula ac. Nunc sit " + this.type_of_cuisine + " amet sollicitudin tortor. \n         Fusce bibendum tempor ante " + this.telephone_nr + ", eu egestas purus condimentum a " + this.homepage + ".\n            </p>\n             </div>";
        return card;
    };
    //here I only add a Restaurant, without event
    Restaurant.prototype.displayRestaurant = function () {
        return _super.prototype.display.call(this) + this.displayRestaurantWithEvent() + _super.prototype.closeDiv.call(this);
    };
    return Restaurant;
}(Locations));
//I chose property day instead of date
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zip_code, addr, img, creation_date, timestamp, creation_city, title, day, time, ticket) {
        var _this = _super.call(this, city, zip_code, addr, img, creation_date, timestamp, creation_city) || this;
        _this.title = title;
        _this.day = day;
        _this.time = time;
        _this.ticket_price = ticket;
        events.push(_this);
        return _this;
    }
    Events.prototype.displayEventWithRestaurant = function (obj) {
        var card = _super.prototype.display.call(this) + obj.displayRestaurantWithEvent() + "<hr><div class=\"card-body\">\n        <h5 class=\"card-title\">" + this.title + "</h5>\n        <h6>Opening Hours</h6>\n        <p class=\"card-text\">" + this.day + "<br>"
            + this.time + "<br>" + this.ticket_price +
            "</p>\n    </div>" + _super.prototype.closeDiv.call(this);
        return card;
    };
    Events.prototype.displayEvent = function () {
        var card = _super.prototype.display.call(this) + "<hr><div class=\"card-body\">\n        <h5 class=\"card-title\">" + this.title + "</h5>\n        <h6>Opening Hours</h6>\n        <p class=\"card-text\">" + this.day + "<br>"
            + this.time + "<br>" + this.ticket_price +
            "</p>\n    </div>" + _super.prototype.closeDiv.call(this);
        return card;
    };
    return Events;
}(Locations));
//I cannot see in the requirements, that we should consider a case for restaurant without event
//so, I decided to give every restaurant an event, to keep it simple
new Restaurant("Siem Reap", 1000, "Some Street 12", "../IMG/angkor-wat.jpg", "March 17, 2018", "12:25", "Siem Reap", "Restaurant Name", +223421, "khmer", "www.abc.com");
new Events("Siem Reap", 1000, "Some Street 12", "../IMG/angkor-wat.jpg", "March 17 2018", "12:25", "Siem Reap", "Angkor Wat", "Monday-Sunday", "7:00 - 18:00", "€ 30");
new Restaurant("Kompong Chhnang", 1200, "Kompong Street 23", "../IMG/floatingvillage.jpg", "March 25, 2018", "13:12", "Kompong Chhnang", "Restaurant Kompong", +240421, "khmer", "www.xyz.com");
new Events("Kompong Chhnang", 1200, "Kompong Street 23", "../IMG/floatingvillage.jpg", "March 25, 2018", "13:12", "Kompong Chnnang", "The Floating Villages", "Monday-Sunday", "10:00 - 17:00", "€ 20");
new Restaurant("Phnom Penh", 1230, "PP Street 253", "../IMG/tuktuk.jpg", "March 28, 2018", "19:30", "Phnom Penh", "P&P", +223424, "khmer", "www.ppppp.com");
new Events("Phnom Penh", 1230, "PP Street 253", "../IMG/tuktuk.jpg", "March 28, 2018", "19:30", "Phnom Penh", "Driving TukTuk", "Monday-Sunday", "everytime", "€ 10/day");
new Restaurant("Koh Rong Samloem", 4567, "KohRongSamloem Street 4", "../IMG/kohrong.jpg", "April 3, 2018", "20:19", "Koh Rong Samloem", "Khmer Food", 123456, "Khmer", "www.kohrongsamloem.com");
new Events("Koh Rong Samloem", 4567, "KohRongSamloem Street 4", "../IMG/kohrong.jpg", "April 3, 2018", "20:19", "Koh Rong Samloem", "Night Swimming with Planktons", "Monday-Sunday", "22:00-3:00", "for free");
function writeCambodiaBlock(firstObj, secondObj) {
    for (var i = 0; i < restaurants.length; i++) {
        document.getElementById("list-of-visits").innerHTML += firstObj[i].displayEventWithRestaurant(secondObj[i]);
    }
}
writeCambodiaBlock(events, restaurants);
//because the first two locations (Vienna and Linz) are without event & restaurant, I need to say to the
//for loop where to start and where to end. In the beginning the first two objects are in position 0 and 1, 
//but after sorting, the positions will change. You can see this in the functions sortAcc() and sortDesc()
function writeNextDestinations(obj, start, end) {
    for (var i = start; i < end; i++) {
        document.getElementById("next-visits").innerHTML += obj[i].addLocation();
    }
}
writeNextDestinations(locations, 0, 2);
document.getElementById("asc").addEventListener("click", sortAsc);
document.getElementById("desc").addEventListener("click", sortDesc);
function sortAsc() {
    var sorted_restaurants = restaurants;
    var sorted_events = events;
    var sorted_locations = locations;
    sorted_locations.sort(function (a, b) {
        return a.as_date - b.as_date;
    });
    sorted_restaurants.sort(function (a, b) {
        return a.as_date - b.as_date;
    });
    sorted_events.sort(function (a, b) {
        return a.as_date - b.as_date;
    });
    document.getElementById("list-of-visits").innerHTML = "";
    writeCambodiaBlock(sorted_events, sorted_restaurants);
    document.getElementById("next-visits").innerHTML = "";
    //if I sort asc, the last two entrys of locations are the remaining.
    //events and restaurants have the same length, so I substract it from the locations.length, to get
    //the remaining locations
    var start = locations.length - (events.length * 2);
    writeNextDestinations(sorted_locations, start, locations.length);
    console.log(sorted_locations);
}
function sortDesc() {
    var sorted_locations = locations;
    var sorted_events = events;
    var sorted_restaurants = restaurants;
    sorted_locations.sort(function (a, b) {
        return b.as_date - a.as_date;
    });
    sorted_restaurants.sort(function (a, b) {
        return b.as_date - a.as_date;
    });
    sorted_events.sort(function (a, b) {
        return b.as_date - a.as_date;
    });
    document.getElementById("list-of-visits").innerHTML = "";
    writeCambodiaBlock(sorted_events, sorted_restaurants);
    document.getElementById("next-visits").innerHTML = "";
    //if I sort asc, the first two entrys of locations are the remaining
    writeNextDestinations(sorted_locations, 0, 2);
    console.log(sorted_locations);
}

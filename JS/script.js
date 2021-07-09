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
    function Locations(city, zip_code, addr, img, creation_date) {
        this.city = city;
        this.ZIP_code = zip_code;
        this.address = addr;
        this.image = img;
        this.as_date = new Date(creation_date);
        this.creation_date = this.as_date.toLocaleDateString();
        locations.push(this);
    }
    Locations.prototype.display = function () {
        var openDiv = "<div class=\"card col-lg-4 col-md-6 col-sm-12 text-center mt-5 ps-3 pe-3\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">" + this.city + "</h5>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n            Nunc facilisis posuere laoreet. Aenean congue, massa vitae mattis iaculis, \n            neque lacus molestie justo, eu suscipit ex massa a nisl. Phasellus sit amet iaculis velit, \n            mattis semper enim. Donec ex nisl, sagittis eget venenatis et, pellentesque quis nisl. \n            Fusce porttitor erat at felis molestie scelerisque. Aliquam eget tincidunt purus. \n            Proin dictum arcu eu lacus maximus congue. Aenean a ante leo. \n            Proin ornare lorem vel dui commodo imperdiet. Ut eget congue elit, \n            et efficitur nisl. Donec et bibendum augue, non fermentum tellus. \n            Etiam aliquam sodales egestas. \n            Sed vehicula nec justo vel maximus. \n            Nullam sagittis lobortis urna, sed tincidunt ante viverra in.</p>\n        </div>\n        <img src=" + this.image + " alt=" + this.city + ">";
        return openDiv;
    };
    Locations.prototype.closeDiv = function () {
        return "<p class=\"card-text text\"><small class=\"text-muted\">" + this.city + ", " + this.creation_date + "</small></p></div></div>";
    };
    Locations.prototype.addLocation = function () {
        return this.display() + this.closeDiv();
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zip_code, addr, img, creation_date, name, tel, type, homepage) {
        var _this = _super.call(this, city, zip_code, addr, img, creation_date) || this;
        _this.name = name;
        _this.telephone_nr = tel;
        _this.type_of_cuisine = type;
        _this.homepage = homepage;
        restaurants.push(_this);
        return _this;
    }
    //In real life I would not set the content of the paragraph like below, because every city would have
    // another description. So I would give another property "description" and add the content, when creating 
    //the object. For dynamic solution, I could crate a table with type of cuisine, tel.nr and homepage. But
    //it does not look beautiful for me. That's why I decided to place the lorem ipsum text right here, so that
    //I don't always have to copy the whole text for each new object.
    //If i want to add an event, the div won't be closed here
    Restaurant.prototype.displayRestaurantWithEvent = function () {
        var card = "<div class=\"card-body pt-5\">\n        <h5 class=\"card-title\">" + this.name + "</h5>\n        <p class=\"card-text\">Nunc molestie dignissim interdum. Nunc pretium convallis nulla, non vulputate nisi \n        vehicula ac. Nunc sit " + this.type_of_cuisine + " amet sollicitudin tortor. Donec blandit tortor vitae magna pharetra commodo. \n        Aliquam in laoreet mi. Fusce volutpat, est id tempor venenatis, lorem turpis consequat leo, id varius \n        erat augue finibus nisl. Etiam elit nisl, bibendum vitae venenatis eget, tempor sit amet nibh. Proin \n        gravida purus eu luctus cursus. In hac habitasse platea dictumst. Aenean pretium mauris vitae mauris \n        euismod hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos \n        himenaeos. Fusce bibendum tempor ante " + this.telephone_nr + ", eu egestas purus condimentum a " + this.homepage + ".\n            </p>\n             </div>";
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
    function Events(city, zip_code, addr, img, creation_date, title, day, time, ticket, has_restaurant) {
        var _this = _super.call(this, city, zip_code, addr, img, creation_date) || this;
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
new Locations("wien", 1010, "Karlsplatz 12", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "December 17, 1997, 12:45");
new Restaurant("wien", 1010, "Karlsplatz 12", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "December 17, 1997, 12:45", "Restaurant Name", 223421, "chinese", "www.abc.at");
new Events("wien", 1010, "Karlsplatz 12", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "December 17, 1997, 12:45", "Angkor Wat", "Monday-Saturday", "7:00 - 18:00", "€30", true);
// document.getElementById("list-of-visits").innerHTML = restaurants[0].displayRestaurant();
// document.getElementById("list-of-visits").innerHTML = locations[0].addLocation();
document.getElementById("list-of-visits").innerHTML = events[0].displayEvent();

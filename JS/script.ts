//preparation
var locations = [];
var restaurants = [];
var events = [];

//the name Location seems to be protected, that's why I chose Locations. Same for Events instead of Event
class Locations {

    city;
    ZIP_code;
    address;
    image;
    creation_date;
    as_date;

    constructor(city: string, zip_code: number, addr: string, img: string, creation_date: string) {
        this.city = city;
        this.ZIP_code = zip_code;
        this.address = addr;
        this.image = img;
        this.as_date = new Date(creation_date);
        this.creation_date = this.as_date.toLocaleDateString();
        locations.push(this);

    }

    display() {
        var openDiv =
            `<div class="card col-lg-4 col-md-6 col-sm-12 text-center mt-5 ps-3 pe-3">
        <div class="card-body">
            <h5 class="card-title">` + this.city + `</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc facilisis posuere laoreet. Aenean congue, massa vitae mattis iaculis, 
            neque lacus molestie justo, eu suscipit ex massa a nisl. Phasellus sit amet iaculis velit, 
            mattis semper enim. Donec ex nisl, sagittis eget venenatis et, pellentesque quis nisl. 
            Fusce porttitor erat at felis molestie scelerisque. Aliquam eget tincidunt purus. 
            Proin dictum arcu eu lacus maximus congue. Aenean a ante leo. 
            Proin ornare lorem vel dui commodo imperdiet. Ut eget congue elit, 
            et efficitur nisl. Donec et bibendum augue, non fermentum tellus. 
            Etiam aliquam sodales egestas. 
            Sed vehicula nec justo vel maximus. 
            Nullam sagittis lobortis urna, sed tincidunt ante viverra in.</p>
        </div>
        <img src=` + this.image + ` alt=` + this.city + `>`;

        return openDiv;
    }

    closeDiv() {
        return `<p class="card-text text"><small class="text-muted">`+ this.city + `, ` +this.creation_date +`</small></p></div></div>`;
    }

    addLocation(){
        return this.display()+this.closeDiv();
    }
}

//creation of at least two Locations object
new Locations("Vienna", 1010, "Karlsplatz 12", "image", "July 9, 2021, 16:47");
new Locations("Linz", 4020, "Landstraße 62", "image", "July 9, 2021, 16:48");
console.log(locations[0], locations[1]);

class Restaurant extends Locations {
    name;
    telephone_nr;
    type_of_cuisine;
    homepage;

    constructor(city: string, zip_code: number, addr: string, img: string, creation_date: string,
        name: string, tel: number, type: string, homepage: string) {
        super(city, zip_code, addr, img, creation_date);
        this.name = name;
        this.telephone_nr = tel;
        this.type_of_cuisine = type;
        this.homepage = homepage;
        restaurants.push(this);
    }
    //In real life I would not set the content of the paragraph like below, because every city would have
    // another description. So I would give another property "description" and add the content, when creating 
    //the object. For dynamic solution, I could crate a table with type of cuisine, tel.nr and homepage. But
    //it does not look beautiful for me. That's why I decided to place the lorem ipsum text right here, so that
    //I don't always have to copy the whole text for each new object.

    //If i want to add an event, the div won't be closed here
    displayRestaurantWithEvent() {
        let card = 
            `<div class="card-body pt-5">
        <h5 class="card-title">` + this.name + `</h5>
        <p class="card-text">Nunc molestie dignissim interdum. Nunc pretium convallis nulla, non vulputate nisi 
        vehicula ac. Nunc sit `+ this.type_of_cuisine + ` amet sollicitudin tortor. Donec blandit tortor vitae magna pharetra commodo. 
        Aliquam in laoreet mi. Fusce volutpat, est id tempor venenatis, lorem turpis consequat leo, id varius 
        erat augue finibus nisl. Etiam elit nisl, bibendum vitae venenatis eget, tempor sit amet nibh. Proin 
        gravida purus eu luctus cursus. In hac habitasse platea dictumst. Aenean pretium mauris vitae mauris 
        euismod hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
        himenaeos. Fusce bibendum tempor ante ` + this.telephone_nr + `, eu egestas purus condimentum a ` + this.homepage + `.
            </p>
             </div>`;

        return card;
    }

    //here I only add a Restaurant, without event
    displayRestaurant() {

        return super.display() + this.displayRestaurantWithEvent() + super.closeDiv();
    }

}

//I chose property day instead of date
class Events extends Locations {
    title
    day;
    time;
    ticket_price;


    constructor(city, zip_code, addr, img, creation_date, title, day, time, ticket) {
        super(city, zip_code, addr, img, creation_date);
        this.title = title;
        this.day = day;
        this.time = time;
        this.ticket_price = ticket;

        events.push(this);
    }

    displayEventWithRestaurant(obj) {
        let card =  super.display() + obj.displayRestaurantWithEvent() + `<hr><div class="card-body">
        <h5 class="card-title">` + this.title +`</h5>
        <h6>Opening Hours</h6>
        <p class="card-text">` + this.day + `<br>`
        + this.time +`<br>` + this.ticket_price +
        `</p>
    </div>` + super.closeDiv();

        return card;
    }

    displayEvent() {
        let card =  super.display() + `<hr><div class="card-body">
        <h5 class="card-title">` + this.title +`</h5>
        <h6>Opening Hours</h6>
        <p class="card-text">` + this.day + `<br>`
        + this.time +`<br>` + this.ticket_price +
        `</p>
    </div>` + super.closeDiv();

        return card;
    }

    
}

//I cannot see in the requirements, that we should consider a case for restaurant without event
//so, I decided to give every restaurant an event, to keep it simple

new Restaurant("Siem Reap", 1000, "Some Street 12", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "March 17, 2018, 12:45", "Restaurant Name", +223421, "khmer", "www.abc.com");
new Events("Siem Reap", 1000, "Some Street 12", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "March 17, 2018, 12:45","Angkor Wat","Monday-Sunday","7:00 - 18:00","€30");
new Restaurant("Kompong Chhnang", 1200, "Kompong Street 23", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "March 25, 2018, 15:17", "Restaurant Kompong", +240421, "khmer", "www.xyz.com");
new Events("Kompong Chhnang", 1200, "Kompong Street 23", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "March 25, 2018, 15:17","The Floating Villages","Monday-Sunday","10:00 - 17:00","€20");
new Restaurant("Phnom Penh", 1230, "PP Street 253", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "March 28, 2018, 15:17", "P&P", +223424, "khmer", "www.ppppp.com");
new Events("Phnom Penh", 1230, "PP Street 253", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "March 28, 2018, 15:17", "Driving TukTuk", "Monday-Sunday", "everytime", "€10/day");



for (let i=0; i<restaurants.length; i++){
    document.getElementById("list-of-visits").innerHTML += events[i].displayEventWithRestaurant(restaurants[i]);
}





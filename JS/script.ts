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
    displayRestaurant() {
        let card = super.display();
        card +=
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

    addRestaurant() {
        return this.displayRestaurant() + super.closeDiv();
    }
}

class Events extends Locations {
    date;
    time;
    ticket_price;

    constructor(city, zip_code, addr, img, creation_date, date, time, ticket) {
        super(city, zip_code, addr, img, creation_date);
        this.date = date;
        this.time = time;
        this.ticket_price = ticket;
        events.push(this);
    }

    displayEvent() {

    }
}

new Locations("wien", 1010, "Karlsplatz 12", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "December 17, 1997, 12:45");
new Restaurant("wien", 1010, "Karlsplatz 12", "https://cdn.pixabay.com/photo/2010/11/29/angkor-wat-469__340.jpg", "December 17, 1997, 12:45", "Restaurant Name", 223421, "chinese", "www.abc.at");


console.log(locations[0]);

document.getElementById("list-of-visits").innerHTML = restaurants[0].addRestaurant();
// document.getElementById("list-of-visits").innerHTML = locations[0].addLocation();

// var x = new Date("24.03.2021 12:45");
// var x = new Date("December 17, 1997, 12:45");
// var y = new Date("December 17, 1995, 12:50");
// var arr = [y,x];
// console.log(arr.sort());
// console.log(x.toLocaleDateString());

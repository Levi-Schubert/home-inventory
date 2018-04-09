const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.instruments = []
HomeInventoryDatabase.electronics = []

//defined furniture
const deskOne = {
	name: "Ikea Desk",
	location: "Bedroom",
	description: "This desk is my primary computer desk, has the majority of peripherals on it."
}

const deskTwo = {
	name: "Old Desk",
	location: "Bedroom",
	description: "This desk is my secondary computer desk, it has my second monitor and less accessible peripherals."
}

const bed = {
	name: "Bed",
	location: "Bedroom",
	description: "Rather uncomfortable bed to sleep on, but works well for the limited space I have."
}

const dresser = {
	name: "Ikea Dresser",
	location: "Bedroom",
	description: "Clothes storage device, also doubles as stand for television."
}

//pushing furniture
HomeInventoryDatabase.furniture.push(deskOne)
HomeInventoryDatabase.furniture.push(deskTwo)
HomeInventoryDatabase.furniture.push(bed)
HomeInventoryDatabase.furniture.push(dresser)

//defined electronics
const computerOne = {
	name: "Desktop Computer",
	location: "Old Desk",
	description: "Custom computer in custom enclosure, has amd fx 6350, amd r9 270x, 16gb ddr3 memory, and total storage space of 4tb."
}

const computerTwo = {
	name: "Asus Laptop",
	location: "Ikea Desk",
	description: "Thin and Light laptop, has an Intel i7-7700hq, nvidia 1050, 16gb ddr4 memory, and total storage space of 1.25tb."
}

const computerThree = {
	name: "Raspberry Pi 3",
	location: "Old Desk",
	description: "Small ARMv7 single board computer running Arch Linux ARM, used for hosting my podcasts webserver."
}

const guitarAmp = {
	name: "Panama Shaman 20",
	location: "Bedroom",
	description: "Full tube amp with all five preamp tubes swapped from 12ax7 to 12ay7."
}

const microphone = {
	name: "MXL 770",
	location: "Ikea Desk",
	description: "MXL 770 large diaphragm condenser microphone with frequency cuts and padding switches."
}

const television = {
	name: "Vizio Smart TV",
	location: "Dresser",
	description: "32 inch smart TV"
}

const console = {
	name: "Nintendo Switch",
	location: "Dresser",
	description: "Nintendo Switch portable/home console."
}

//push electronics
HomeInventoryDatabase.electronics.push(computerOne)
HomeInventoryDatabase.electronics.push(computerTwo)
HomeInventoryDatabase.electronics.push(computerThree)
HomeInventoryDatabase.electronics.push(guitarAmp)
HomeInventoryDatabase.electronics.push(microphone)
HomeInventoryDatabase.electronics.push(television)
HomeInventoryDatabase.electronics.push(console)

//define instruments
const electricGuitarOne = {
	name: "Schecter Omen-6",
	location: "Walk-in Closet",
	description: "Six string electric guitar, gloss black finish, humbucker pickups, set-up in drop C."
}

const electricGuitarTwo = {
	name: "Schecter C-1+",
	location: "Walk-in Closet",
	description: "Six string electric guitar, red flamed maple gloss finish, coil tappable humbuckers, set-up in E standard."
}

const accousticGuitarOne = {
	name: "Yamaha Acoustic",
	location: "Bedroom",
	description: "Six String acoustic guitar, steel string, set-up in E standard"
}

const accousticGuitarTwo = {
	name: "Takamine",
	location: "Walk-in Closet",
	description: "Six string cutaway classical guiter, nylon string, internal electronics, set-up E standard"
}

const ukelele = {
	name: "Ukelele",
	location: "Walk-in Closet",
	description: "Blue finish, set-up in standard tuning."
}

//push instruments
HomeInventoryDatabase.instruments.push(electricGuitarOne)
HomeInventoryDatabase.instruments.push(electricGuitarTwo)
HomeInventoryDatabase.instruments.push(accousticGuitarOne)
HomeInventoryDatabase.instruments.push(accousticGuitarTwo)
HomeInventoryDatabase.instruments.push(ukelele)

//save database to storage
const saveDatabase = function (databaseObject, localStorageKey){
	const stringifiedDatabase = JSON.stringify(databaseObject)
	localStorage.setItem(localStorageKey, stringifiedDatabase)
}

//load database into JS from storage
const loadDatabase = function (localStorageKey){
	const databaseString = localStorage.getItem(localStorageKey)
	return JSON.parse(databaseString)
}

saveDatabase(HomeInventoryDatabase, "HomeInventory")
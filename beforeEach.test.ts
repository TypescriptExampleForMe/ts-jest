
const data = {
    user: {
        firstName: "Danny",
        lastName: "Cohen",
        age: 31
    },
    house: {
        squareFeet: 500,
        city: "Tel Aviv"
    },
    car: {
        model: "BMW",
        year: 2000
    }
}

beforeEach(() => {
    data.user = { firstName: "Danny", lastName: "Cohen", age: 31 }
    data.house = { squareFeet: 500, city: "Tel Aviv" }
    data.car = { model: "BMW", year: 2000 }
})

function ChangeUserName(firstName: string, lastName: string){
    data.user.firstName = firstName;
    data.user.lastName = lastName;
}

function setAddress(address: string){
    // @ts-ignore
    data.house.address = address;
}


test('Check that change user name set the right name', () => {
    ChangeUserName("Rotem", "Mizrahi");
    expect(data.user).toEqual({
        firstName: "Rotem",
        lastName: "Mizrahi",
        age: 31
    })
})

test('change address set the right adress', () => {
    setAddress("Tyomkin");
    expect(data).toEqual({
        user: {
            firstName: "Danny",
            lastName: "Cohen",
            age: 31
        },
        house: {
            squareFeet: 500,
            city: "Tel Aviv",
            address: "Tyomkin"
        },
        car: {
            model: "BMW",
            year: 2000
        }
    });
})